let db;
const request = window.indexedDB.open("plants", 1)   /////////initialize the database and give it a name and series.



// onupgradeneeded is called when you change the db version : from no database to first version, first version to second version ...
//onupgradeneeded is the only place where you can alter the structure of the database. In it, you can create and delete object stores and build and remove indices.
request.onupgradeneeded = event => {
    const db = event.target.result
    ////you can create multiple object stores
   const Store =  db.createObjectStore("offLine",
                 {
                     autoIncrement: true
                    //  keyPath: "name"     Sets primary key.
                    })
    ///creates an option you can query off of names if below is in place////
    Store.createIndex("name", "name", {unique: true})

    
}

request.onerror = event => {
    console.log(event + "error")
}

// onsuccess is called each time you make a new request : even if the database schemas has not been changed.

request.onsuccess = event => {
    db = event.target.result                        ///////this is where global db is declared
    
    const transaction = db.transaction(["offLine"], "readwrite").objectStore("offLine")
    const accessObjectStore = transaction.get(1)
    accessObjectStore.onsuccess = e =>{
        const secondRow = e.target.result
        secondRow.name = "dandylion"
        const updateResult = transaction.put(secondRow, 1)
        updateResult.onsuccess = event => {
            console.log( "success")
        }
    }
   
    
   
    
}

///Other Crud Methods add, get, delete, put, getAll, clear, 
    // const transaction = db.transaction(["offLine"], "readwrite")      these all need to be in some sort of function.
    // const accessObjectStore = transaction.objectStore("offLine")
    // accessObjectStore.add({name: "Neddles", uses: "tea"})
    
    // const transaction = db.transaction(["offLine"], "readwrite")
    // const accessObjectStore = transaction.objectStore("offLine")
    // accessObjectStore.add({name: "dandylions", uses: "eatable"})
//everytime you interact with a indeded db you must create a transaction

/////////////////
// const transaction = db.transaction(["offLine"], "readwrite").objectStore("offLine")

// transaction.openCursor().onsuccess = event =>{
//     let cursor = event.target.result;
//     if (cursor){
//         if("this1" === "this"){
//             "this1" = "this now";
//             cursor.update(cursor.value)
//         }
//         cursor.continue()
//     }else{
//         console.log("all done")
//     }
// }
