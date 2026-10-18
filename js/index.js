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

function enviar_entrada() {
    const valor_entrada = Number(document.getElementById(`valor_entrada`).value)

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
    }

    if (total > 0) {
        total_html.style.color = `green`
    }
}

function enviar_gasto() {
    const valor_gasto = Number(document.getElementById(`valor_gasto`).value)

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
    }

    if (total < 0) {
        total_html.style.color = `red`
    }
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
    buttonProjeto.classList.add("button-projeto")
    buttonProjeto.innerText = `Finalizar projeto`
    
    caixa_projeto.appendChild(novoItemProjeto)
    novoItemProjeto.append(imagemProjetoItem, nomeProjeto, descrisaoProjeto, buttonProjeto)
}