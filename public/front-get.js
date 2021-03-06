
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.dropdown-trigger');
    M.Dropdown.init(elems);
  });




let plantBtn = document.querySelector(".plants")
plantBtn.addEventListener("click", function(){
    console.log("Click Plant")
axios.get("/api/plants").then(res => {

})
    
   
}) 

let animalBtn = document.querySelector(".animals")
animalBtn.addEventListener("click", function(){
    console.log("Click Animal")
    axios.get("/api/animal").then(res => {
    
    })
   
}) 

let rockBtn = document.querySelector(".rocks")
rockBtn.addEventListener("click", function(){
    console.log("Click Rock")
    axios.get("/api/rocks").then(res => {
        
        
        for(let i = res.data.length -1; i >= 0; i--){
            // console.log(res.data[i].image)
            let row = document.createElement("div")
            row.classList.add("row")
            let col = document.createElement("div")
            col.classList.add("col")
            col.classList.add("s12")
            col.classList.add("m6   ")
            let card = document.createElement("div")
            card.classList.add("card")
            let imgCont = document.createElement("div")
            imgCont.classList.add("card-image")
            let im = document.createElement("img")
            im.setAttribute("src", res.data[i].image)
            let content = document.createElement("div")
            content.classList.add("card-content")
            let p = document.createTextNode(res.data[i].notes)
            let btnCont = document.createElement("div")
            btnCont.classList.add("card-action")
            let a = document.createElement("a")
            let atext = document.createTextNode(res.data[i].name)
           
            
            let main = document.querySelector(".main")
            main.append(row)
            row.append(col)
            col.append(card)
            card.append(imgCont)
            card.append(content)
            card.append(btnCont)
            imgCont.append(im)
            content.append(p)
            btnCont.append(a)
            a.append(atext)
            
            
            
            
           
            


            // main.append(row)
            // main.append(row.append(col))
            // card.append(btnCont.append(a))
            // col.append(card)
            // card.append(imgCont.append(image))
            // card.append(content.append(p))
            // card.append(btnCont.append(a))
            

    
            
        
        }
    
    })
   
}) 
let fungieBtn = document.querySelector(".fungie")
fungieBtn.addEventListener("click", function(){
    axios.get("/api/fungie").then(res => {
    
    })
   
}) 

