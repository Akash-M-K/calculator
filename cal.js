function displayvalue(val){
    document.getElementById("display").value+=val;
}
function clearDisplay(){
    document.getElementById("display").value=" ";
}
function calculate(){
   var ui= document.getElementById("display").value;
  var result= eval(ui)
  document.getElementById("display").value=result;
}
