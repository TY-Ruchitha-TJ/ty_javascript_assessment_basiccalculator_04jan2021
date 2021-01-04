
//function for displaying values
function dis(val)
{
document.getElementById("ruchi").value+=val
 }
//function for evaluation
function solve()
{
let x = document.getElementById("ruchi").value
let y = eval(x)
document.getElementById("ruchi").value = y
}
//function for clearing the display
function clr()
{
document.getElementById("ruchi").value = ""
}

