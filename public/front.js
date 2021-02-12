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
            headers:{
                'Content-Type': 'application/json'
            },
            body:  JSON.stringify(accData)
        }).then(res => {
            return res.json()
        }).then(data=> {
            if(data.message){
                alert(data.message)
            }
            if(data.code === 11000){
                alert("Username or Password taken")
            }
        
        }).catch(err=>{{
           console.log(err)
        }})

    }

})



