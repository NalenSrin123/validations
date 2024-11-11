const names=document.querySelector('#name');
const email=document.querySelector('#email');
const pass=document.querySelector('#password');
const cpass=document.querySelector('#cpassword');

function setError(input,message){
    const formError=input.parentElement; 
    formError.classList.add('error');
    formError.classList.remove('success');
    var span =formError.querySelector('.span');
    span.innerHTML=message;
    span.style.color='red';
}
function setSuccess(input,message){
    const formSuccess=input.parentElement;
    formSuccess.classList.remove('error');
    formSuccess.classList.add('success');
    var span =formSuccess.querySelector('.span');
    span.innerHTML=message; 
    span.style.color='green'
}


names.addEventListener('keyup',()=>{
    const uname=names.value.trim();
    if(uname==''){
        setError(names,'username is not empty')
    }else if(uname.length<5){
        setError(names,'uername have 5 or more than.')
    }else{
        setSuccess(names,'success')
        
    }
})
const isEmail=(email)=>{
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}
email.addEventListener('keyup',()=>{
    const mail=email.value.trim();
    if(mail==''){
        setError(email,'email not empty!')
    }else if(isEmail(mail)==false){
        setError(email,'email invalid.')
    }else{
        setSuccess(email,'success.');
    }    
})

const iPass=(password)=>{
    let pass=/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()+=-\?;,./{}|\":<>\[\]\\\' ~_]).{8,}/;
    return pass.test(password);
}
pass.addEventListener('keyup',()=>{ 
    const passValue=pass.value.trim();
    if(passValue==''){
        setError(pass,'password not empty')
    }else if(!iPass(passValue)){
        setError(pass,'password with (a-z,A-Z,0-9,$,@,*)');
    }else{
        setSuccess(pass,'success');
    }
})

cpass.addEventListener('keyup',()=>{
    const cpassValue=cpass.value.trim();
    const passValue=pass.value.trim();
    if(cpassValue==''){
        setError(cpass,'Confirm password not empty.');
    }else if(cpassValue!=passValue){
        setError(cpass,'Not match password.')
    }else{
        setSuccess(cpass,'success')
    }
})




