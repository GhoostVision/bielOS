var agora = new Date()
var mes = String(agora.getMonth())
var dia = String(agora.getDate())
var semana = String(agora.getDay())
var horas = String(agora.getHours())
var minutos = String(agora.getMinutes())
var ano = String(agora.getFullYear())

var dia_semana_inicio = document.getElementById(`dia_semana_inicio`)
var sistema_horas_inicio = document.getElementById(`sistema_hras_inicio`)
var dia_inicio = document.getElementById(`dia_inicio`)
var mes_inicio = document.getElementById(`mes_inicio`)
var ano_inicio = document.getElementById(`ano_inicio`)
var sistema_de_bom_dia = document.getElementById(`sistema_de_bom_dia`)

//sistema de dias
dia_inicio.innerText =  dia

//sistema de meses
if (mes == 0) {
    mes_inicio.innerText = (`Janeiro`)
}else if (mes == 1){
    mes_inicio.innerHTML = (`Fevereiro`)
}else if (mes == 2){
    mes_inicio.innerHTML = (`Marco`)
}else if (mes == 3){
    mes_inicio.innerHTML = (`Abril`)
}else if (mes == 4){
    mes_inicio.innerHTML = (`Maio`)
}else if (mes == 5){
    mes_inicio.innerHTML = (`Junho`)
}else if (mes == 6){
    mes_inicio.innerHTML = (`Julho`)
}else if (mes == 7){
    mes_inicio.innerHTML = (`Agosto`)
}else if (mes == 8){
    mes_inicio.innerHTML = (`Setembro`)
}else if (mes == 9){
    mes_inicio.innerHTML = (`Outubro`)
}else if (mes == 10){
    mes_inicio.innerHTML = (`Novembro`)
}else{
    mes_inicio.innerHTML = (`Dezembro`)
}

//sistema dias da semana 
if(semana == 0){
    dia_semana_inicio.innerText = `Domingo`
}else if(semana == 1){
    dia_semana_inicio.innerText = `Segunda`
}else if(semana == 2){
    dia_semana_inicio.innerText = `Terca`
}else if(semana == 3){
    dia_semana_inicio.innerText = `Quarta-feira`
}else if(semana == 4){
    dia_semana_inicio.innerText = `Quinta-feira`
}else if(semana == 5){
    dia_semana_inicio.innerText = `Sexta-feira`
}else{
    dia_semana_inicio.innerText = `Sabado`
}

//sistema de ano
ano_inicio.innerText = ano

// sistema de horas e minutos
sistema_horas_inicio.innerText = `${horas}:${minutos}`

//sistema dia e noite

if(horas < 6){
    sistema_de_bom_dia.innerText = `Boa madrugada...`
}else if(horas < 12){
    sistema_de_bom_dia.innerText = `Bom dia...`
}else if(horas < 18){
    sistema_de_bom_dia.innerText = `Boa tarde...`
}else{
    sistema_de_bom_dia.innerText = `Boa noite...`
}

//carteira sistemas

var total_html = document.getElementById(`total_carteira`)
var saldo_html = document.getElementById(`saldo_atual`)
var investimento_html = document.getElementById(`investimento_total`)
var gasto_html = document.getElementById(`gasto_total`)

var total = 0
var saldo = 0
var investimento = 0
var gasto = 0

function enviar_entrada(){ //entrada de valores
    var valor_entrada = Number(document.getElementById(`valor_entrada`).value)
    saldo += valor_entrada
    total += valor_entrada
    saldo_html.innerText = saldo 
    total_html.innerText = total

    if(saldo > 0 || total > 0 || investimento > 0){
        saldo_html.style.color = `green`
    }
}

function enviar_gasto(){
    var valor_gasto = Number(document.getElementById(`valor_gasto`).value)
    gasto += valor_gasto
    total -= valor_gasto
    gasto_html.innerText = gasto
    saldo_html.innerText = total

    if(total < 0){
        saldo_html.style.color = `red`
    }
}