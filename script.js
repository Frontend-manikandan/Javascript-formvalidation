const form = document.getElementById('form')
const username = document.getElementById('username');
const password = document.getElementById('password');
const phonenumber = document.getElementById('phonenumber');
const Fullname = document.getElementById('Fullname');
const email = document.getElementById('email');
const Createpassword = document.getElementById('Createpassword');
const cpassword = document.getElementById('cpassword');

form.addEventListener('submit',e=>{
  e.preventDefault();
  validateInputs();
})
//getting inputs
function validateInputs(){
   const usernameVal = username.value.trim();
   const passwordval = password.value.trim();
   const phonenumberval = phonenumber.value.trim();
   const Fullnameval = Fullname.value.trim();
   const emailval = email.value.trim();
   const Createpasswordval = Createpassword.value.trim();
   const cpasswordval = cpassword.value.trim();

   if(usernameVal===''){
     setError(username,'Username is required')
   }
   else{
     setSuccess(username)
   }
   if(passwordval===''){
     setError(password,'password is required')
   }
   else if(passwordval.length<8){
     setError(password,'Atlest you will 8 charcters password')
   }
   else{
     setSuccess(password)
   }
   if(phonenumberval === ''){
     setError(phonenumbervalue,'phonenumber is required')
   }
   else if(phonenumberval.length<10){
     setError(phonenumber,'minimum required 10 number value')
   }
   else{
     setSuccess(phonenumber)
   }
   if(Fullnameval===''){
     setError(Fullname,"Fullname is reqiured")
   }
   else{
     setSuccess(Fullname)
   }
   if(email===''){
     setError(email,'email is required')
   }
   else if(!ValidateEmail(emailval)){
     setError(email,'Enter you valid email')
   }
   else{
     setSuccess(email)
   }
   if(Createpasswordval===''){
     setError(Createpassword,'Correct is reqiured')
   }
   else if(Createpasswordval.length<8){
     setError(Createpassword,'your will set minimum 8 charcters')
   }
   else{
     setSuccess(Createpassword)
   }
   if(cpasswordval){
      setError(cpassword,'confirm password is required')
   }
   else if(cpasswordval!==Createpasswordval){
     setError(cpassword,'Check your password')
   }
   else{
     setSuccess(cpassword)
   }
}

//elemets and password 

function setError(element,message){
    const loginGroup = element.parentElement;
    const errorDisplay = loginGroup.querySelector('.error')

errorDisplay.innerText = message;
loginGroup.classList.add('error')
loginGroup.classList.remove('success')
}
function setSuccess(element){
    const loginGroup = element.parentElement;
    const errorElement = loginGroup.querySelector('.error');

errorDisplay.innerText ='';
loginGroup.classList.add('success')
loginGroup.classList.remove('error')
}
function ValidateEmail(mail) 
{
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(form.emailAddr.value))
  {
    return (true)
  }
    alert("You have entered an invalid email address!")
    return (false)
}

/*const form = document.getElementById("form")
const username = document.getElementById("username");
const password = document.getElementById("password");

form.addEventListener('submit',e=>{
  e.preventDefault();
  validateInputs();
})
//getting inputs
function validateInputs(){
   const usernameVal = username.value.trim();
   const passwordval = password.value.trim();

   if(usernameVal===''){
     setError(username,'Username is required')
   }
   else{
     setSuccess(username)
   }
   if(passwordval===''){
     setError(password,'password is required')
   }
   else if(passwordval.length<8){
     setError(password,'Atlest you will 8 charcters password')
   }
   else{
     setSuccess(password)
   }

  }
//elemets and password 

function setError(element,message){
    const loginGroup = element.parentElement;
    const errorDisplay = loginGroup.querySelector('.error')

errorDisplay.innerText = message;
loginGroup.classList.add('error')
loginGroup.classList.remove('success')
}
function setSuccess(element){
    const loginGroup = element.parentElement;
    const errorElement = loginGroup.querySelector('.error');

errorDisplay.innerText ='';
loginGroup.classList.add('success')
loginGroup.classList.remove('error')
}*/


