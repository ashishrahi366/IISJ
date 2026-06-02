export const sendEmail = async ({
    subject,
    name = "",
    email = "",
    message,
  }) => {
    try {
      const formData = new FormData();
  
      formData.append(
        "access_key",
        import.meta.env.VITE_WEB3FORMS_ACCESS_KEY
      );
  
      formData.append("subject", subject);
      formData.append("name", name);
      formData.append("email", email);
      formData.append("message", message);
  
      const response = await fetch(
        "https://api.web3forms.com/submit",
        {
          method: "POST",
          body: formData,
        }
      );
  
      const result = await response.json();
  
      return result;
    } catch (error) {
      console.error(error);
  
      return {
        success: false,
        message: "Something went wrong",
      };
    }
  };