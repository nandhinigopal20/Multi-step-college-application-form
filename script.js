const slidePage = document.querySelector(".slide-page");
const firstNext = document.querySelector(".firstnext");
const secPrev = document.querySelector(".secprev");
const secNext = document.querySelector(".secnext");
const thirdPrev = document.querySelector(".thirdprev")
const submitBtn = document.querySelector(".submit");
const progressText = document.querySelectorAll(".step p");
const progressCheck = document.querySelectorAll(".step .check");
const bullet = document.querySelectorAll(".step .bullet");
let current=1;




var fname=document.getElementById("fname");
var age=document.getElementById("age");
var gender=document.getElementById("gender");
var fathername=document.getElementById("fathername");
var phonenumber=document.getElementById("phonenumber");
var email=document.getElementById("email");
var maths=document.getElementById("maths");
var physics=document.getElementById("physics");
var chemistryr=document.getElementById("chemistry");
var cutoff=document.getElementById("cut-off");
var group=document.getElementsByClassName("group");


 // var fnamevalue=fname.value.trim();
 // var agevalue=age.value.trim();
 // var fathernamevalue=fathername.value.trim();
 // var phonenumbervalue=phonenumber.value.trim();
 // var emailvalue=email.value.trim();


 

 firstNext.addEventListener("click",function(e) {

e.preventDefault();
//   if ( fnamevalue=="") {
//         alert("First Name cannot be empty");
//     } else if( agevalue=="") {
//         alert("Age cannot be empty");
//     }else if( fathernamevalue=="") {
//         alert("Father Name cannot be empty");
//     }else if(phonenumbervaluer==null || phonenumbervaluer=="") {
//         alert("Phone Number cannot be empty");
//     }else if(emailvalue==null || emailvalue=="") {
//         alert("Email-id cannot be empty");
//     }else{
    
 

if(fname.value=="" && age.value=="" && fathername.value=="" && phonenumber.value=="" && email.value==""){
 alert("please fill all fields")
}else{
   slidePage.style.marginLeft= "-25%";
   bullet[current-1].classList.add("active");
   progressCheck[current-1].classList.add("active");
   progressText[current-1].classList.add("active");
current +=1;
}
});

secNext.addEventListener("click", function (event) {
 event.preventDefault();
 if (maths.value=="" && physics.value=="" && chemistry.value=="" && cutoff.value=="") {
     alert("please fill all fields")
 } else {
     

 slidePage.style.marginLeft= "-50%";
 bullet[current-1].classList.add("active");
 progressCheck[current-1].classList.add("active");
 progressText[current-1].classList.add("active");
 current +=1;
}
});

submitBtn.addEventListener("click",function (event) {
 event.preventDefault();
 if(group.value==""){
     alert("please fill all fields")
 }else{

 bullet[current-1].classList.add("active");
 progressCheck[current-1].classList.add("active");
 progressText[current-1].classList.add("active");
 current+=1;
}

 setTimeout(function(){
 alert("Your Form Successfully Registered up");
 location.reload();
},800);

});
secPrev.addEventListener("click",function (event) {
 event.preventDefault();
 slidePage.style.marginLeft= "0%";
 bullet[current-2].classList.remove("active");
 progressCheck[current-2].classList.remove("active");
 progressText[current-2].classList.remove("active");
 current -=1;
});

thirdPrev.addEventListener("click",function (event) {
 event.preventDefault();
 slidePage.style.marginLeft = "-25%";
 bullet[current-2].classList.remove("active");
 progressCheck[current-2].classList.remove("active");
 progressText[current-2].classList.remove("active");
 current -=1;
});
