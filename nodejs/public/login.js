document
  .getElementById("form-auth")
  .addEventListener("submit", async function (e) {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("senha").value;

    try {
      const response = await fetch("http://localhost:3000/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Seu login foi realizado com sucesso!", data);
        window.location.href = "http://127.0.0.1:5000";
      } else {
        throw new Error("Falha na requisição");
      }
    } catch (error) {
      console.error("Erro ao fazer a requisição:", error);
    }
  });
