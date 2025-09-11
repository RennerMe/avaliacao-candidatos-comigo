
// CONTROLE DO MODAL


const addTicketBtn = document.getElementById("add-ticket-btn");   // pega o botão que abre o modal
const closeModalBtn = document.getElementById("close-modal-btn"); // pega o botão X que fecha o modal 
const modal = document.getElementById("add-ticket-modal");        // pega o próprio modal, a janela que abre e fecha

// adiciona o evento de click no botao X e add uma classe no CSS que mostra o modal
addTicketBtn.addEventListener("click", () => {
    modal.classList.add("visible");
})

// adiciona um evento de clicar ao botão X, retira a classe e o modal desaparece
closeModalBtn.addEventListener("click", () => {
    modal.classList.remove("visible"); 
})


// OPÇÃO SIM / NÃO (tipo de contato)

const fezContato = document.querySelectorAll('input[name="contato-passivo"]');  // pega todos os radios que têm o name="contato-passivo" 
const tipoContatoContainer = document.getElementById("tipo-contato-container"); // pega a parte do HTML que mostra o select "tipo de contato"

fezContato.forEach(radio => {                        // para cada radio (sim ou não) adiciona um evento quando mudar
    radio.addEventListener("change",(event) => {
        if (event.target.value === "nao") {          // se escolheu "não", esconde o select de tipo de contato
            tipoContatoContainer.classList.add("contato-off");
        } else {                                     // caso contrario ("sim"), mostra o select
            tipoContatoContainer.classList.remove("contato-off");
        }
    });
});


// MUDA AS PÁGINAS DO MODAL (os steps)

let currentStep = 1; // variavel para contar a pagina atual
const formSteps = document.querySelectorAll(".form-step"); // pega todos os blocos de step
const step = document.querySelectorAll(".step"); // pega os "indicadores" de pagina (CONTATO/TICKET/MOTIVO)

// pega os botões de navegação (voltar, avançar e cadastrar)
const btnVoltar = document.getElementById("btn-voltar");
const btnAvancar = document.getElementById("btn-avancar");
const btnCadastrar = document.getElementById("btn-cadastrar");
const totalSteps = formSteps.length; // total de steps (quantos passos(páginas) o formulário tem)


btnAvancar.addEventListener("click", () => { // click para o próximo step
    if (currentStep < totalSteps) {
        currentStep++; // aumenta 1 no passo atual
        updateForm();  // executa a funcao de atualizar a página
    }
});

btnVoltar.addEventListener("click", () => { //  click para o step anterior
    if (currentStep > 1) {
        currentStep--; // diminui 1 no passo atual
        updateForm();  //  executa a funcao de atualizar a página
    }
});


// FUNÇÃO QUE ATUALIZA O FORMULÁRIO

function updateForm() {
    formSteps.forEach(step => { // remove a classe active de todas as paginnas/steps
        step.classList.remove("active");
    });
    
    formSteps[currentStep - 1].classList.add("active"); // mostra só a pagina do step atual (coloca a classe active nele)


    
    step.forEach((indicator, i) => { // atualiza os "indicadores"
        if (i === currentStep - 1) {
            indicator.classList.add("active"); // o indicador do step atual fica ativa
        } else {
            indicator.classList.remove("active"); // as outras ficam apagadas
        }
    });

    // se for o último step, o botão avançar some e aparece o botão cadastrar
    if (currentStep === totalSteps) {
        btnAvancar.style.display = "none";
        btnCadastrar.style.display = "block";
    } else {
        // se não for o último, botão avançar fica visível e o cadastrar some
        btnAvancar.style.display = "block";
        btnCadastrar.style.display = "none";
    }
}

updateForm() // chama a função uma vez no início para mostrar a tela certa (step 1)