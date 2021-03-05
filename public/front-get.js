const axios = require("axios")
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.dropdown-trigger');
    M.Dropdown.init(elems);
  });




const plantBtn = document.querySelector(".plants")
plantBtn.addEventListener("click", function(){
axios.get("/api/fungie").then(res => {

})
    
   
}) 
const animalBtn = document.querySelector(".animalBtn")
animalBtn.addEventListener("click", function(){
    axios.get("/api/animal").then(res => {
    
    })
   
}) 
const rockBtn = document.querySelector(".rockBtn")
rockBtn.addEventListener("click", function(){
    axios.get("/api/rocks").then(res => {
        let row = document.createElement("div").setAttribute("class", "row")
            let col = document.createElement("div").setAttribute("class", "col s12")
            let card = document.createElement("div").setAttribute("class", "card")
            let imgCont = document.createElement("div").setAttribute("class", "card-Image")
            let image = document.createElement("img").setAttribute("src", req.data[i].image)
            let content = document.createElement("div").setAttribute("class", "card-content")
            let p = document.createTextNode(req.data[i].notes)
            let btnCont = document.createElement("div").setAttribute("class", "card-content")
            let a = document.createElement("a").setAttribute("href", "./main").setAttribute("innerHTML", req.data[i].name)


        for(let i = res.data.length; i >= 0; i--){
            
            document.getElementsByClassName("main")
            .append(row.append(col.append(card.append(imgCont.append(image), content.append(p), btnCont.append(a))))
            // col.append(card)
            // card.append(imgCont.append(image))
            // card.append(content.append(p))
            // card.append(btnCont.append(a))
            

    
            
        
        }
    
    })
   
}) 
const fungieBtn = document.querySelector(".fungieBtn")
fungieBtn.addEventListener("click", function(){
    axios.get("/api/animal").then(res => {
    
    })
   
}) 

