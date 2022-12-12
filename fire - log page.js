
var email = document.querySelector(".email")
var password = document.querySelector(".password")
var login = document.querySelector(".login")
var btn = document.querySelector(".btn")

class FireBaseWorker{
    fireBaseRef;
    constructor(){
        this.fireBaseRef = firebase.firestore()
    }
    async getAllUsers(){
        try{
            var arr = []
            var arr1 = []
            let strinval = email.value
            let passval = password.value
            var result = await this.fireBaseRef.collection("users").get()
            console.log(result)
            result.forEach(i=>{
              var tmp = i.data()
              arr.push(tmp)
            });
            var ind = arr.find(x=> {
               if(x.email == strinval && x.password == passval){
                arr1.push("yes")
               }
            })
            if(arr1.includes("yes")){
                console.log("log correct")
            }
            else{
                console.log("log incorrect")
            }
            return ind
        } 
        catch (error) {
            console.log(error)
        }
    }
}

btn.addEventListener("click", function(){
    var getalluser = new FireBaseWorker()
    getalluser.getAllUsers()
});

// btn.addEventListener("click", function(){
//     var getalluser = new FireBaseWorker()
//     getalluser.getAllUsers()
//     let arr2 = [].concat
//     if(arr1.includes("yes")){
//         if(arr[ind].password == password.value){
//             console.log("success")
//             var fbw = new FireBaseWorker()
//             fbw.getAllUsers()
//             return true
//         }
//         else{
//             console.log("incorect password")
//             return false
//         }
//     }
//     else{
//         console.log("incorect email")
//         return false
//     }
// });