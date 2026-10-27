const agora = new Date()
const mes = String(agora.getMonth())
const dia = String(agora.getDate())
const semana = String(agora.getDay())
const horas = String(agora.getHours())
const minutos = String(agora.getMinutes())
const ano = String(agora.getFullYear())

const dia_semana_inicio = document.getElementById(`dia_semana_inicio`)
const sistema_horas_inicio = document.getElementById(`sistema_hras_inicio`)
const dia_inicio = document.getElementById(`dia_inicio`)
const mes_inicio = document.getElementById(`mes_inicio`)
const ano_inicio = document.getElementById(`ano_inicio`)
const sistema_de_bom_dia = document.getElementById(`sistema_de_bom_dia`)

// sistema de dias
dia_inicio.innerText = dia

// sistema de meses
const meses_nomes = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro"
]
mes_inicio.innerHTML = meses_nomes[mes]

// sistema de dias da semana
const dia_semana_inicio_nomes = [
    `Domingo`,
    `Segunda-feira`,
    `Terça-feira`,
    `Quarta-feira`,
    `Quinta-feira`,
    `Sexta-feira`,
    `Sábado`
]
dia_semana_inicio.innerHTML = dia_semana_inicio_nomes[semana]

// sistema de ano
ano_inicio.innerText = ano

// sistema de horas e minutos
sistema_horas_inicio.innerText = `${horas}:${minutos}`

// sistema dia e noite
if (horas < 6) {
    sistema_de_bom_dia.innerText = `Boa madrugada...`
} else if (horas < 12) {
    sistema_de_bom_dia.innerText = `Bom dia...`
} else if (horas < 18) {
    sistema_de_bom_dia.innerText = `Boa tarde...`
} else {
    sistema_de_bom_dia.innerText = `Boa noite...`
}

// carteira: sistemas
const total_html = document.getElementById(`total_carteira`)
const saldo_html = document.getElementById(`saldo_atual`)
const investimento_html = document.getElementById(`investimento_total`)
const gasto_html = document.getElementById(`gasto_total`)

//variaveis de carteira
let total = 0
let saldo = 0
let investimento = 0
let gasto = 0

const caixa_carteira_entrada = document.getElementById("caixa_carteira_entrada")

function enviar_entrada() {
    const valor_entrada = Number(document.getElementById(`valor_entrada`).value)
    const descrisao_entrada = document.getElementById(`descrisao_entrada`).value

    saldo += valor_entrada
    total += valor_entrada

    saldo_html.innerText = saldo.toLocaleString(`pt-BR`, {
        style: `currency`,
        currency: `BRL`
    })

    total_html.innerText = total.toLocaleString(`pt-BR`, {
        style: `currency`,
        currency: `BRL`
    })

    if (saldo > 0) {
        saldo_html.style.color = `green`
    }else{
        saldo_html.style.color = `red`
    }

    if (total > 0) {
        total_html.style.color = `green`
    }else{
        saldo_html.style.color = `red`
    }

    const novoItemCarteira = document.createElement("div")
    novoItemCarteira.classList.add("info-historico")

    const valorItemCarteira = document.createElement("p")
    valorItemCarteira.classList.add("valor-carteira")
    valorItemCarteira.innerText = valor_entrada.toLocaleString(`pt-BR`, {
        style: `currency`,
        currency: `BRL`
    })
    valorItemCarteira.style.color = `green`

    const descrisaoItemCarteira = document.createElement("p")
    descrisaoItemCarteira.classList.add("descrisao-carteira")
    descrisaoItemCarteira.innerText = descrisao_entrada

    const buttonItemCarteira = document.createElement("button")
    buttonItemCarteira.addEventListener("click", deletar_item)
    buttonItemCarteira.classList.add("button_carteira")
    buttonItemCarteira.innerText = `X`

    function deletar_item(){
        novoItemCarteira.remove()
        saldo -= valor_entrada
        total -= valor_entrada

        saldo_html.innerText = saldo.toLocaleString(`pt-BR`, {
        style: `currency`,
        currency: `BRL`
        })
        total_html.innerText = total.toLocaleString(`pt-BR`, {
        style: `currency`,
        currency: `BRL`
        })

    }

    caixa_carteira_entrada.appendChild(novoItemCarteira)
    novoItemCarteira.append(valorItemCarteira, descrisaoItemCarteira, buttonItemCarteira)
    
}

const caixa_carteira_gasto = document.getElementById("caixa_carteira_gasto")

function enviar_gasto() {
    const valor_gasto = Number(document.getElementById(`valor_gasto`).value)
    const descrisao_gasto = document.getElementById(`descrisao_gasto`).value

    gasto += valor_gasto
    saldo -= valor_gasto
    total -= valor_gasto

    gasto_html.innerText = gasto.toLocaleString(`pt-BR`, {
        style: `currency`,
        currency: `BRL`
    })

    saldo_html.innerText = saldo.toLocaleString(`pt-BR`, {
        style: `currency`,
        currency: `BRL`
    })

    total_html.innerText = total.toLocaleString(`pt-BR`, {
        style: `currency`,
        currency: `BRL`
    })

    if (saldo < 0) {
        saldo_html.style.color = `red`
    }else{
        saldo_html.style.color = `green`
    }

    if (total < 0) {
        total_html.style.color = `red`
    }else{
        saldo_html.style.color = `green`
    }

    const novoItemCarteira = document.createElement("div")
    novoItemCarteira.classList.add("info-historico")

    const valorItemCarteira = document.createElement("p")
    valorItemCarteira.classList.add("valor-carteira")
    valorItemCarteira.innerText = valor_gasto.toLocaleString(`pt-BR`, {
        style: `currency`,
        currency: `BRL`
    })
    valorItemCarteira.style.color = `red`

    const descrisaoItemCarteira = document.createElement("p")
    descrisaoItemCarteira.classList.add("descrisao-carteira")
    descrisaoItemCarteira.innerText = descrisao_gasto

    const buttonItemCarteira = document.createElement("button")
    buttonItemCarteira.classList.add("button_carteira")
    buttonItemCarteira.addEventListener("click", deletar_item)
    buttonItemCarteira.innerText = `X`

    function deletar_item(){
        novoItemCarteira.remove()

        saldo += valor_gasto
        total += valor_gasto
        gasto -= valor_gasto

        saldo_html.innerText = saldo.toLocaleString(`pt-BR`, {
        style: `currency`,
        currency: `BRL`
        })
        total_html.innerText = total.toLocaleString(`pt-BR`, {
        style: `currency`,
        currency: `BRL`
        })
        gasto_html.innerText = gasto.toLocaleString(`pt-BR`, {
        style: `currency`,
        currency: `BRL`
        })
    }

    caixa_carteira_gasto.appendChild(novoItemCarteira)
    novoItemCarteira.append(valorItemCarteira, descrisaoItemCarteira, buttonItemCarteira)
    
}

// abrir e fechar abas
const aba_button_entrada = document.getElementById(`aba_entrada`)
const aba_button_gastos = document.getElementById(`aba_gasto`)
const aba_frase_lista_de_desejo = document.getElementById(`aba-frase-lista-de-desejo`)
const aba_frase_projetos = document.getElementById(`aba-frase-projeto`)
const aba_button_adicionar_item = document.getElementById(`aba-box-lista-de-desejo`)
const aba_button_adicionar_projeto = document.getElementById(`aba-box-projeto`)

function abrir_adicionar_item() {
    aba_frase_lista_de_desejo.style.display = `none`
    aba_button_adicionar_item.style.display = `flex`
}

function abrir_ganhos() {
    aba_button_entrada.style.display = `flex`
    aba_button_gastos.style.display = `none`
}

function abrir_despesas() {
    aba_button_entrada.style.display = `none`
    aba_button_gastos.style.display = `flex`
}

function abrir_adicionar_projeto(){
    aba_button_adicionar_projeto.style.display = `flex`
    aba_frase_projetos.style.display = `none`

}

const aba_carteira = document.getElementById(`page_carteira`)
const aba_inicio = document.getElementById(`page_inicio`)
const aba_estudo = document.getElementById(`page_estudo`)
const aba_notas = document.getElementById(`page_notas`)
const aba_projetos = document.getElementById(`page_projeto`)
const aba_lista_de_desejo = document.getElementById(`page_lista-de-desejo`)

function abrir_inicio() {
    aba_inicio.style.display = `flex`
    aba_estudo.style.display = `none`
    aba_notas.style.display = `none`
    aba_carteira.style.display = `none`
    aba_lista_de_desejo.style.display = `none`
    aba_projetos.style.display = `none`
}

function abrir_carteira() {
    aba_inicio.style.display = `none`
    aba_projetos.style.display = `none`
    aba_estudo.style.display = `none`
    aba_notas.style.display = `none`
    aba_carteira.style.display = `flex`
    aba_lista_de_desejo.style.display = `none`
}

function abrir_notas() {
    aba_inicio.style.display = `none`
    aba_estudo.style.display = `none`
    aba_notas.style.display = `flex`
    aba_projetos.style.display = `none`
    aba_carteira.style.display = `none`
    aba_lista_de_desejo.style.display = `none`
}

function abrir_estudo() {
    aba_inicio.style.display = `none`
    aba_estudo.style.display = `flex`
    aba_notas.style.display = `none`
    aba_carteira.style.display = `none`
    aba_projetos.style.display = `none`
    aba_lista_de_desejo.style.display = `none`
}

function abrir_lista() {
    aba_inicio.style.display = `none`
    aba_estudo.style.display = `none`
    aba_notas.style.display = `none`
    aba_carteira.style.display = `none`
    aba_projetos.style.display = `none`
    aba_lista_de_desejo.style.display = `flex`
}

function abrir_projetos() {
    aba_inicio.style.display = `none`
    aba_estudo.style.display = `none`
    aba_notas.style.display = `none`
    aba_carteira.style.display = `none`
    aba_projetos.style.display = `flex`
    aba_lista_de_desejo.style.display = `none`
}

const caixa_projeto = document.getElementById(`box-projetos`)


// adicionar projeto sistema
function addProjeto(){
    const InputNomeProjeto = document.getElementById(`NomeProjeto`).value
    const InputDescricaoProjeto = document.getElementById(`DescricaoProjeto`).value
    const InputImagemProjeto = document.getElementById(`ImagemProjeto`).value

    const novoItemProjeto = document.createElement("div");
    novoItemProjeto.classList.add("card-projeto");

    const imagemProjetoItem = document.createElement("img")
    imagemProjetoItem.classList.add("img-projeto")
    imagemProjetoItem.src = InputImagemProjeto

    const nomeProjeto = document.createElement("p")
    nomeProjeto.classList.add("nome-projeto")
    nomeProjeto.innerText = InputNomeProjeto

    const descrisaoProjeto = document.createElement("span")
    descrisaoProjeto.classList.add("descrissao-projeto")
    descrisaoProjeto.innerText = InputDescricaoProjeto

    const buttonProjeto = document.createElement("button")
    buttonProjeto.addEventListener("click", remover_item)
    buttonProjeto.classList.add("button-projeto")
    buttonProjeto.innerText = `Finalizar projeto`

    function remover_item(){
        novoItemProjeto.remove()
    }
    
    caixa_projeto.appendChild(novoItemProjeto)
    novoItemProjeto.append(imagemProjetoItem, nomeProjeto, descrisaoProjeto, buttonProjeto)
}

// adicionar item lista de desejo

const caixa_lista_de_desejo = document.getElementById(`box-itens-desejo`)

function addItemLIstaDeDesejo(){

    const tela_de_aviso = document.getElementById(`tela_de_aviso`)
    const input_valor = document.getElementById(`input_valor_lista-de-desejo`).value
    const input_nome_lista_de_desejo = document.getElementById(`input_nome_lista-de-desejo`).value
    const input_img_lista_de_desejo = document.getElementById(`input_img_lista-de-desejo`).value

    if (input_img_lista_de_desejo.trim() === "" || input_nome_lista_de_desejo.trim() === "" || input_valor.trim() === "") {
        tela_de_aviso.style.display = `flex`
        return
    }

    const input_valor_lista_de_desejo = Number(document.getElementById(`input_valor_lista-de-desejo`).value)

    const novoItemLista = document.createElement("div")
    novoItemLista.classList.add("iten-lista")

    const imagemItemLista = document.createElement("img")
    imagemItemLista.classList.add("img-item-lista")
    imagemItemLista.src = input_img_lista_de_desejo

    const nomeItemLista = document.createElement("p")
    nomeItemLista.classList.add("nome-item-lista")
    nomeItemLista.innerText = input_nome_lista_de_desejo

    const precoItemLista = document.createElement("span")
    precoItemLista.classList.add("valor-item-lista")
    precoItemLista.innerText = input_valor_lista_de_desejo.toLocaleString(`pt-BR`, {
        style: `currency`,
        currency: `BRL`
    })

    const buttonItemLIsta = document.createElement("button")
    buttonItemLIsta.classList.add("button-item-lista")
    buttonItemLIsta.addEventListener("click", remover_item)
    buttonItemLIsta.innerText = "Comprado"

    function remover_item(){
        novoItemLista.remove()

    }

    caixa_lista_de_desejo.appendChild(novoItemLista)
    novoItemLista.append(imagemItemLista, nomeItemLista, precoItemLista, buttonItemLIsta)
}

function fechar_aviso(){
        tela_de_aviso.style.display = `none`
}

const box_tarefa_linguagem = document.getElementById(`box-tarefa-linguagens`);
let linguagens = 0

function enviar_tarefa_linguagens(){

    const input_tarefas_linguagens = document.getElementById(`input_tarefas_linguagens`).value;
    const contador_linguagens = document.getElementById(`contador_linguagens`)
  
    const nova_tarefa = document.createElement("div");
    nova_tarefa.classList.add("tarefa-estudo");

    const text_tarefa = document.createElement("p");
    text_tarefa.classList.add(`text-tarefa`);
    text_tarefa.innerText = input_tarefas_linguagens;

    const button_tarefa = document.createElement("button");
    button_tarefa.classList.add(`button-tarefa`);
    button_tarefa.addEventListener(`click`, concluir_tarefa)
    button_tarefa.innerText = `x`;

    function concluir_tarefa(){
        nova_tarefa.remove();
        linguagens = ++linguagens
        contador_linguagens.innerText = String(linguagens)
    }

    box_tarefa_linguagem.appendChild(nova_tarefa);
    nova_tarefa.append(text_tarefa, button_tarefa);
}

const box_tarefa_escola = document.getElementById(`box-tarefa-escola`);
let licoes_escola = 0

function enviar_tarefa_escola(){

    const input_tarefas_escola = document.getElementById(`input_tarefas_escola`).value;
    const contador_linguagens = document.getElementById(`contador_escola`)
  
    const nova_tarefa = document.createElement("div");
    nova_tarefa.classList.add("tarefa-estudo");

    const text_tarefa = document.createElement("p");
    text_tarefa.classList.add(`text-tarefa`);
    text_tarefa.innerText = input_tarefas_escola;

    const button_tarefa = document.createElement("button");
    button_tarefa.classList.add(`button-tarefa`);
    button_tarefa.addEventListener(`click`, concluir_tarefa)
    button_tarefa.innerText = `x`;

    function concluir_tarefa(){
        nova_tarefa.remove();
        licoes_escola = ++licoes_escola
        contador_linguagens.innerText = String(licoes_escola)
    }

    box_tarefa_escola.appendChild(nova_tarefa);
    nova_tarefa.append(text_tarefa, button_tarefa);
}

const box_tarefa_interesse = document.getElementById(`box-tarefa-interesse`)
let interesse = 0

function enviar_tarefa_interesse(){

    const inpu_tarefa_interesse = document.getElementById(`input_tarefas_interesse`).value
    const contador_interesse = document.getElementById(`contador_interesse`)

    const nova_tarefa = document.createElement("div")
    nova_tarefa.classList.add(`tarefa-estudo`)

    const text_tarefa = document.createElement("p")
    text_tarefa.classList.add(`text-tarefa`)
    text_tarefa.innerText = inpu_tarefa_interesse

    const button_tarefa = document.createElement("button")
    button_tarefa.classList.add('button-tarefa')
    button_tarefa.innerText = `x`
    button_tarefa.addEventListener("click", concluir_tarefa)

    function concluir_tarefa(){
        nova_tarefa.remove()
        interesse = ++interesse

        contador_interesse.innerText = interesse
    }

    box_tarefa_interesse.appendChild(nova_tarefa)
    nova_tarefa.append(text_tarefa, button_tarefa)
}
