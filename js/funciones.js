function dis(valor) {
    let num = document.getElementById("result").value
    if (num.substring(0, 1) == '0') {
        document.getElementById("result").value = valor
        document.getElementById("result").value = num.substring(1, num.length)
    }
    document.getElementById("result").value += valor

}
function clc() {
    document.getElementById("result").value = 0
}
function deleted() {
    let text = document.getElementById("result").value
    text = text.substring(0, text.length - 1)
    document.getElementById("result").value = text
}
function calculo() {
    let op = document.getElementById("result").value
    document.getElementById("result").value = eval(op)
}
function neg(valor) {
    let num = document.getElementById("result").value
    if (num.substring(0, 1) == '-') {
        document.getElementById("result").value = num.substring(1, num.length)
    } else {
        document.getElementById("result").value = "-" + num
    }
}
function div() {
    let op = document.getElementById("result").value
    op = "1/" + op
    document.getElementById("result").value = eval(op)
}
function rai() {
    let op = document.getElementById("result").value
    let res = eval(op)
    document.getElementById("result").value = Math.sqrt(res)
}
function porcent() {
    let op = document.getElementById("result").value
    let res = (eval(op) / 100)
    document.getElementById("result").value = res
}