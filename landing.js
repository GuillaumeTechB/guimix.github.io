// VERIF FORMULAIRE
"use strict"

function verif(e){
    e.preventDefault();
    let valid =  true;
    let champs = document.querySelectorAll("input[required]");
champs.forEach((chp) => {
    chp.addEventListener('focus', () =>{
        resetChamps(chp);
    });
    chp.addEventListener('blur', () =>{
        validationChamps(chp);
    });
});
  
    champs.forEach(chp =>{
        resetChamps(chp);
       if(!validationChamps(chp)){
        valid = false;
       }
    });
        if(valid){
          
           document.getElementById('myForm').submit();
        }
}

function validationChamps(ch){
    if(ch.checkValidity()){
       return true;
    }
    else{
        let span = document.createElement('span');
        span.innerHTML = ch.validationMessage;
        span.classList.add("msg");
        ch.classList.add("invalid");
        ch.parentNode.appendChild(span);
        return false;
    }
}

function resetChamps(ch){
    let span = ch.nextElementSibling;
    if(span !== null){
        ch.parentNode.removeChild(span);
        ch.classList.remove("invalid");
    }
}

window.addEventListener('load', ()=>{
    document.getElementById('soumettre').addEventListener('click', verif);
    
   window.scrollTo({
    top:135,
    left:0,
    behavior:'smooth'});
});



