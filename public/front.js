const createAccountButton = document.querySelector("#createAccount");
const userName = document.querySelector("#username");
const password = document.querySelector("#password"); 
const verifyPassword = document.querySelector("#verify_password"); 
const phoneNumber = document.querySelector("#phone")

createAccountButton.addEventListener("click", function(event){
    event.preventDefault()
    console.log("click")

    if(password.value !== verifyPassword.value){
        verifyPassword.value = ""
        verifyPassword.placeholder="Password must match"
        verifyPassword.classList.add("invalid")
    }else{

        const accData = {
            userName: userName.value,
            password: password.value,
            phone: phoneNumber.value
        }
        console.log(accData)
        fetch('/api/addAccount', {
            method: "POST",
            body:  JSON.stringify(accData)
        }).then(res => {
            console.log(res.json())
        }).catch(console.log("error"))

    }

})



