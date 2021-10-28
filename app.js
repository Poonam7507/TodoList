

const inputbox=document.querySelector(".list input");
const addbtn=document.querySelector(".list button");
const clearbtn=document.querySelector(".clearlist button");
const todolist=document.querySelector(".listitem");

   showTask();
   
addbtn.onclick=()=>{
    let userData=inputbox.value;
    if(userData.trim()!=0){
    let getLocalStorage=localStorage.getItem("New Todo");
    if(getLocalStorage==null){
        listArr=[];

    }
    else{
        listArr=JSON.parse(getLocalStorage);
    }
    listArr.unshift(userData);
   localStorage.setItem("New Todo",JSON.stringify(listArr));
}
   showTask();

}
   
function showTask(){
   let getLocalStorage=localStorage.getItem("New Todo");
   if(getLocalStorage==null){
       listArr=[];

   }
   else{
       listArr=JSON.parse(getLocalStorage);
   }

   let newLiTag='';
   listArr.forEach((element,index )=> {
       newLiTag+=   `<li ondblclick="complete()" >${element}<span onclick="deleteTask(${index})"><i class="fa fa-trash"></i></span><button class="completebtn" onclick="deleteTask(${index})"  >Completed</button> </li>`
       
   });
   todolist.innerHTML=newLiTag;
   inputbox.value="";
}
function deleteTask(index){
   let getLocalStorage=localStorage.getItem("New Todo");
   listArr=JSON.parse(getLocalStorage);
   listArr.splice(index,1);
   localStorage.setItem("New Todo",JSON.stringify(listArr));
   showTask();
}
let textarea=document.getElementById("textarea");


clearbtn.onclick=()=>{
    listArr=[];
    localStorage.setItem("New Todo",JSON.stringify(listArr));
    showTask();
}
function homepage(){
    document.querySelector(".container").style.display="none";
    document.querySelector(".outerbox").style.display="block";
}
function showlist(){
    document.querySelector(".container").style.display="block";
    document.querySelector(".outerbox").style.display="none";
}




 function complete(){
     document.querySelector(".container .completebtn").style.display="block";

     document.querySelector(".container li i").style.display="none";

 }