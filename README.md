# CalculadoraJS
## Calculadora en Java Script
1.	Para construir la calculadora propuesta en el ejercicio se hace uso del lenguaje JavaScript para la manipulación del DOM.
•	Se realiza la maquetación en HTML usando tablas para ajustar los botones de manera alineada.

 
•	Se generan los estilos en el archivo de css para dar una mejor apariencia a la calculadora haciendo uso de selectores aprendidos en clases.
```html
<section>
        <div class="content">
            <div class="display">
                <h1>Calculadora</h1>
                <input type="text" id="result" class="result" value="0">
            </div>
            <div class="button">
                <table>
                    <tr>
                        <td><input type="button" id="rest" class="atrib" value="&larr;" onclick="deleted()"></td>
                        <td><input type="button" id="ce" class="atrib" value="CE" onclick="clc()"></td>
                        <td><input type="button" id="c" class="atrib" value="C" onclick="clc()"></td>
                        <td><input type="button" id="btn+-" class="atrib mas" value="&#177;" onclick="neg(true)">
                        </td>
                        <td><input type="button" id="btnRiz" class="atrib" value="&#8730;" onclick="rai()"></td>
                    </tr>
                    <tr>
                        <td><input type="button" id="btn7" class="number" value="7" onclick="dis(value)"></td>
                        <td><input type="button" id="btn8" class="number" value="8" onclick="dis(value)"></td>
                        <td><input type="button" id="btn9" class="number" value="9" onclick="dis(value)"></td>
                        <td><input type="button" id="btnDiv" class="atrib" value="/" onclick="dis(value)"></td>
                        <td><input type="button" id="btnSiento" class="atrib" value="%" onclick="porcent()"></td>
                    </tr>
                    <tr>
                        <td><input type="button" id="btn4" class="number" value="4" onclick="dis(value)"></td>
                        <td><input type="button" id="btn5" class="number" value="5" onclick="dis(value)"></td>
                        <td><input type="button" id="btn6" class="number" value="6" onclick="dis(value)"></td>
                        <td><input type="button" id="btnMult" class="atrib" value="*" onclick="dis(value)"></td>
                        <td><input type="button" id="btn1x" class="atrib" value="1/x" onclick="div()"></td>
                    </tr>
                    <tr>
                        <td><input type="button" id="btn1" class="number" value="1" onclick="dis(value)"></td>
                        <td><input type="button" id="btn2" class="number" value="2" onclick="dis(value)"></td>
                        <td><input type="button" id="btn3" class="number" value="3" onclick="dis(value)"></td>
                        <td><input type="button" id="btnMenos" class="atrib" value="-" onclick="dis(value)"></td>
                        <td rowspan="2"><input type="button" id="btnIgual" class="atrib" value="=" onclick="calculo()">
                        </td>
                    </tr>
                    <tr>
                        <td colspan="2"><input type="button" id="btn0" class="atrib" value="0" onclick="dis(value)">
                        </td>
                        <td><input type="button" id="btnComa" class="atrib" value="." onclick="dis(value)"></td>
                        <td><input type="button" id="btnMas" class="atrib" value="+" onclick="dis(value)"></td>
                    </tr>
                </table>

            </div>
        </div>
    </section> 
```

•	Al finalizar de dar estilos con CSS se aprecian los resultados en el navegador 
```css
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
body{
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #FAFAFA;
}
body section{
    margin-top:5em;
}
body section .content{
    width: 25em;
    background-color: #E6E6E6;
    padding: 5px;
    border-radius: 5px;
}
body section .content .display{
    width: 100%;
    height: 8em;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    overflow: hidden;
}
body section .content .display h1{
    margin-bottom: 10px;
    text-align: center;
}
body section .content .result {
    background-color: #E6E6E6;
    width: 100%;
    padding: 0px 5px;
    padding-top: 60px;
    padding-bottom: 5px;
    text-align: right;
    font-size: 20px;
    font-weight: 800;
    border: none;
    border-bottom:1px solid #FAFAFA;
    border-radius: 5px;
}
body section .content .button table{
    margin-top: 10px;
    width: 100%;
    text-align: center;
}
body section .content .button input[type="button"]{
    width: 5em;
    padding: 15px 5px;
    font-size: 15px;
    text-align: center;
    font-weight: 700;
    border: none;
    transition: all ease .5s; 
}
body section .content .button #btn0{
    width: 10.4em;
}
body section .content .button #btnIgual{
    height: 6.5em;
}
body section .content .button .number{
    background-color: #FAFAFA; 
}
body section .content .button .number:hover{
    background-color: #D6D6D6;
}
body section .content .button .atrib{
    background-color: #F0F0F0;
}
body section .content .button .atrib:hover{
    background-color: #0077D7;
}
body section .content .button .atrib:active{
    background-color: #AFDCFF;
}
body section .content .button .number:active{
    background-color: #F0F0F0;
}
```
 
•	Para la manipulación de los elementos de HTML se hace uso del lenguaje JavaScript para crear los diferentes métodos que realizaran las operaciones de la calculadora, el archivo llamado funciones.js contiene todos los métodos para las operaciones así mismo se hace uso del método eval() propio de JavaScript que sirve para evaluar una operación matemática.
•	El método dis() se encarga de escribir en el input que actúa como display de la calculadora aquí se visualizan los valores presionados.
 
•	La función claculo() es la que realiza el cálculo de las operaciones haciendo uso de la función eval.
```javascript
function dis(valor) {
    let num = document.getElementById("result").value
    if (num.substring(0, 1) == '0') {
        document.getElementById("result").value = valor
        document.getElementById("result").value = num.substring(1, num.length)
    }
    document.getElementById("result").value += valor
}
```
 
•	La función deleted() se encarga de eliminar el ultimo valor presionado por el usuario para así evitar borrar todo lo escrito anteriormente.
```javascript
function deleted() {
    let text = document.getElementById("result").value
    text = text.substring(0, text.length - 1)
    document.getElementById("result").value = text
}
```
 
•	La función neg() cambia el valor positivo por negativo y viceversa similar a la calculadora de Windows.
```javascript
function neg() {
    let num = document.getElementById("result").value
    if (num.substring(0, 1) == '-') {
        document.getElementById("result").value = num.substring(1, num.length)
    } else {
        document.getElementById("result").value = "-" + num
    } 
}
``` 
•	La funciones de div() divide entre 1, la función rai() saca la raíz cuadrada del valor y la función porcent() saca el porcentaje de un número.
```javascript
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
```  
•	El repositorio de GitHub se encuentra en la siguiente dirección: 
https://github.com/MClaudio/CalculadoraJS 
•	Usuario: MClaudio
