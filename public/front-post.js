

let addBtn = document.querySelector(".enter")

addBtn.addEventListener("click", function(event){
    event.preventDefault()
    console.log("click")
    let category = document.querySelector(".category").value
    
    let name = document.querySelector(".name").value
    let notes = document.querySelector(".notes").value
    let image = document.querySelector(".image").value
    
    let obj = {
        category: category,
        name: name,
        notes: notes,
        image: image,
    }
     console.log(category)
    axios.post("/api/post", obj).then(res => console.log(res))
})
