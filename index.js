const yourname = document.querySelector("#yourname");
const eventsname = document.querySelector("#eventsname");
const department = document.querySelector("#department");
const personsname = document.querySelector("#personsname");
const bitsid = document.querySelector("#bitsid");
const number = document.querySelector("#number");
const startdate = document.querySelector("#startdate");
const enddate = document.querySelector("#enddate");
const starttime = document.querySelector("#starttime");
const endtime = document.querySelector("#endtime");
const form=document.querySelector("#my-form");
const list = document.querySelector(".list");
const button = document.querySelector(".btn");
const msg=document.querySelector('.msg');
let text;
let array = [];
form.addEventListener("submit",onSubmit);
function onSubmit(e){
  e.preventDefault()
  if(bitsid.value===''){
    msg.classList.add('error');
    msg.innerHTML='Please enter bits id as its mandatory'
    setTimeout(() => msg.remove(), 5000);
  }
  else{
    if(startdate.value>enddate.value){
      msg.classList.add('error');
      msg.innerHTML='Start date greater after end date'
      setTimeout(() => msg.remove(), 5000);
    }else{
      if(starttime.value>endtime.value){
        msg.classList.add('error');
        msg.innerHTML='Start time greater after end time'
        setTimeout(() => msg.remove(), 5000);
      }else{
    const li = document.createElement("li");
    li.appendChild(document.createTextNode(`${yourname.value} ${eventsname.value} ${department.value} ${personsname.value} ${bitsid.value} ${number.value} ${startdate.value} ${enddate.value} ${starttime.value} ${endtime.value}`));
    list.appendChild(li);
    

    yourname.value='';
    eventsname.value='';
    department.value='';
    personsname.value='';
    bitsid.value='';
    number.value='';
    starttime.value='';
    enddate.value='';
    startdate.value='';
    endtime.value='';
  }}}
}
