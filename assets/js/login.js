// LOGIN
const loginForm = document.getElementById("loginForm");
const loginMensagem = document.getElementById("loginMensagem");


const usuariosValidos = [
  { usuario: "admin@comigo.com", senha: "1234", cargo: "Admin" },
  { usuario: "renner@comigo.com", senha: "abcd", cargo: "Estágiario Dev" }
];

if (loginForm) {
  loginForm.addEventListener("submit", function(event) {
    event.preventDefault();
    
    const usuario = document.getElementById("usuario").value.trim();
    const senha = document.getElementById("senha").value.trim();
    
    // Validação básica
    if (!usuario || !senha) {
      loginMensagem.textContent = "Preencha todos os campos!";
      loginMensagem.style.color = "red";
      return;
    }
    
    // Verifica se o usuário existe
    const user = usuariosValidos.find(
      u => u.usuario === usuario && u.senha === senha
    );
    
    if (user) {
      loginMensagem.textContent = `Bem-vindo, ${user.usuario}! Cargo: ${user.cargo}`;
      loginMensagem.style.color = "green";
      
      // Redireciona para a página de tickets
      setTimeout(() => {
        window.location.href = "tickets.html";
      }, 1000);
      
    } else {
      loginMensagem.textContent = "Usuário ou senha inválidos!";
      loginMensagem.style.color = "red";
    }
  });
}

// Esqueci a senha
const esqueciSenha = document.getElementById("esqueci-senha");

if (esqueciSenha) {
  esqueciSenha.addEventListener("click", () => {
    window.location.href = "recuperarSenha.html";
  });
}