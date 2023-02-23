
function getScale(){
  let c1 = document.getElementById("c").value
  let s = document.getElementById("show")
  let n = parseFloat(c1)
  if(c1 ){
  let result1=(n*1.8)+ 32
    s.innerText = result1.toFixed(2)
}
}
function getScale2(){
  let s = document.getElementById("show")
  let f1 = document.getElementById("f").value
let n2 = parseFloat(f1)
  if(f1){
    let result2 = (n2-32)/1.8
      s.innerText = result2.toFixed(2) //para arredondar a somente duas casas decimais
  }
}

