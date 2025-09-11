
// LOGIN

// login de teste: admin@comigo.com
// senha de teste: 1234

const loginForm = document.getElementById("loginForm"); // pega o formulário de login 
const loginMensagem = document.getElementById("loginMensagem"); // pega a área onde eu vou mostrar mensagens de erro/login

const usuariosValidos = [ // criei uma lista de usuários válidos para login
  { usuario: "admin@comigo.com", senha: "1234", cargo: "Admin" },
  { usuario: "renner@comigo.com", senha: "abcd", cargo: "Estágiario Dev" }
];

// se existir o formulário (pra garantir que o código só roda se tiver a tela de login)
if (loginForm) {
  loginForm.addEventListener("submit", function(event) { 
    event.preventDefault(); // não deixa recarregar a página
    
    // pega o valor digitado nos campos e tira espaços antes/depois
    const usuario = document.getElementById("usuario").value.trim();
    const senha = document.getElementById("senha").value.trim();
    
    // procura se existe um usuário na lista com esse email e senha
    const user = usuariosValidos.find(
      u => u.usuario === usuario && u.senha === senha
    );
    
    // se encontrou o usuário
    if (user) {
      // mostra mensagem verde de boas-vindas
      loginMensagem.textContent = `Bem-vindo, ${user.usuario}! Cargo: ${user.cargo}`;
      loginMensagem.style.color = "green";
      
      // depois de 1 segundo, redireciona para a página principal (index.html)
      setTimeout(() => {
        window.location.href = "index.html";
      }, 1000);
      
    } else {
      // se não encontrou o usuário ou senha não bate, mostra mensagem vermelha
      loginMensagem.textContent = "Usuário ou senha inválidos!";
      loginMensagem.style.color = "red";
    }
  });
}

// ESQUECI A SENHA

// pega o link "esqueci a senha"
const esqueciSenha = document.getElementById("esqueci-senha");


if (esqueciSenha) {
  // quando clicar no link, manda o usuário para a página de recuperar senha
  esqueciSenha.addEventListener("click", () => {
    window.location.href = "recuperarSenha.html";
  });
}