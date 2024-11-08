let form = document.querySelector(`form`)
let username = document.getElementById('username-field')
let password = document.getElementById('password-field')
let loginPage = document.querySelector(`.login-page`)
let extraPage = document.querySelector(".extra-section")
form.addEventListener('submit', (event)=>{
    event.preventDefault()
    if(username.value.toLowerCase() == `admin` && password.value.toLocaleLowerCase() == '123456'){
        loginPage.classList.add('none');
        extraPage.style.display = "block";
        
    }else{
        alert("No'to'g'ri login yoki parol kiritdingiz!")
    }
})