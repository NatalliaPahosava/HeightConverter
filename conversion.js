document.getElementById('submit').addEventListener("click",heightConverter)
function heightConverter(){
    let feet=parseInt(document.getElementById("feet").value*12)
    let inches=parseInt(document.getElementById("inches").value)
    let cm=feet*inches*2.54
    let n=cm.toFixed(0)
    document.getElementById("result").innerHTML=n
}