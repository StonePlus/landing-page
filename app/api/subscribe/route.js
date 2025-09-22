export async function POST(request) {
  try {
    const { email, name, jobTitle, doi = true } = await request.json();

    if (!email) {
      return new Response(JSON.stringify({ message: "Email é obrigatório" }), { status: 400 });
    }

    const attributes = { OPT_IN: true };
    if (name) attributes.NOME = name;
    if (jobTitle) attributes.JOB_TITLE = jobTitle;

    let endpoint = "";
    let body = {};

    if (doi) {
      endpoint = "https://api.brevo.com/v3/contacts/doubleOptinConfirmation";
      body = {
        email,
        attributes,
        templateId: Number(process.env.BREVO_DOI_TEMPLATE_ID),
        includeListIds: [5],
        redirectionUrl: "https://seudominio.com/obrigado",
      };
    } else {
      endpoint = "https://api.brevo.com/v3/contacts";
      body = {
        email,
        attributes: { ...attributes, DOUBLE_OPT_IN: true },
        listIds: [5],
        updateEnabled: true,
      };
    }

    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "api-key": process.env.BREVO_API_KEY,
      },
      body: JSON.stringify(body),
    });

    const text = await response.text();
    let data = {};
    try {
      data = JSON.parse(text);
    } catch {
      data = {};
    }

    if (!response.ok) {
      return new Response(JSON.stringify({ message: data?.message || "Erro Brevo" }), { status: response.status });
    }

    return new Response(
      JSON.stringify({
        message: doi ? "Verifique seu e-mail para confirmar (DOI enviado)" : "Inscrição realizada com sucesso",
      }),
      { status: 200 }
    );
  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ message: "Erro interno" }), { status: 500 });
  }
}
