let button=document.getElementById('button')
let emailInput=document.getElementById('email')
let error=document.querySelector('.error')
let errorMessage=document.querySelector('.error-msg')


function submitEmail(){
    button.addEventListener('click', ()=>{
       const email=emailInput.value.trim()
       const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if(!emailPattern.test(email)){
    button.style.transform='translateY(-120%)'
error.style.display="block"
errorMessage.style.display="block"
    emailInput.focus()
}

    })



}
submitEmail()