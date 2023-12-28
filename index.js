document.querySelector(".btn").addEventListener("click",function(){
    let size=document.querySelector(".text").value;
    if(size<=100){
      createboard(size);
    }
    else{
      alert("invalid!");
    }
    });

function createboard(size){
    let board=document.querySelector(".container");
    board.style.gridTemplateColumns=`repeat(${size},1fr)`;
    board.style.gridTemplateRows=`repeat(${size},1fr)`;
    num=size*size;
    for(var i=0;i<num;i++){
    let div=document.createElement("div");
    div.className="square";
    board.insertAdjacentElement("beforeend",div);
    document.querySelectorAll(".square")[i].style.height="100%";
    document.querySelector(".container").querySelectorAll("div")[i].addEventListener("mouseover", function(){
    this.style.backgroundColor = "black";
    this.style.height="100%";
    })
  }
}
document.querySelector(".clear").addEventListener("click",function(){
  for(var i=0;i<num;i++){
    document.querySelectorAll(".square")[i].style.backgroundColor="white";
  }
});
document.querySelector(".erase").addEventListener("click",function(){
  for(var i=0;i<num;i++){
    document.querySelector(".container").querySelectorAll("div")[i].addEventListener("mouseover", function(){
      this.style.backgroundColor = "white";
      })
  }
});