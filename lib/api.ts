export const sendContactForm = async (data: any) =>
  fetch("/api/contact", {
    method: "POST",
    body: JSON.stringify(data),
    headers: { "Content-Type": "application/json", Accept: "application/json" },
  })
    .then((res) => {
      return res;
    })
    .catch((error) => console.log("error", error));
