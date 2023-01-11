let buttonAdd = document.getElementsByTagName("button")[0];
let buttonRemove = document.getElementsByTagName("button")[1];


buttonAdd.addEventListener("click",() => {
  div.style.backgroundColor = "red";
  buttonAdd.style.backgroundColor = "#F54B0538";
  buttonRemove.style.backgroundColor = "green";
  
  setTimeout(function(){
    div.style.backgroundColor = "white";
    buttonAdd.style.backgroundColor = "red"
    },2000)
  
} );

buttonRemove.addEventListener("click",() => {
  div.style.backgroundColor = "green";
  buttonRemove.style.backgroundColor = "#41F50538";
  buttonAdd.style.backgroundColor = "red";
  setTimeout(function() {
    div.style.backgroundColor = "white";
    buttonRemove.style.backgroundColor = "green"
  }, 2000)
})