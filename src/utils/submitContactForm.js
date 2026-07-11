const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";

export async function submitContactForm(formElement, options = {}) {
  const accessKey = import.meta.env.VITE_FORM_ACCESS_KEY;

  if (!accessKey) {
    return {
      success: false,
      message:
        "Email service is not configured. Please use the email address below or try again later.",
    };
  }

  const payload = new FormData(formElement);

  payload.append("access_key", accessKey);

  if (options.subject) {
    payload.append("subject", options.subject);
  }

  if (options.source) {
    payload.append("source", options.source);
  }

  try {
    const response = await fetch(WEB3FORMS_ENDPOINT, {
      method: "POST",
      body: payload,
    });

    const data = await response.json();

    if (data.success) {
      return {
        success: true,
        message:
          options.successMessage ||
          "Message sent successfully! We will contact you soon.",
      };
    }

    return {
      success: false,
      message: data.message || "Something went wrong. Please try again.",
    };
  } catch {
    return {
      success: false,
      message: "Network error. Please try again or email us directly.",
    };
  }
}
