var email = document.querySelector(".email");
var secret = document.querySelector(".secret");
var password = document.querySelector(".password")
var repeatpassword = document.querySelector(".repeatpassword");
var save = document.querySelector(".save");
// var arr = JSON.parse(localStorage.getItem("users"))
save.addEventListener("click",function(){
    // var ind = arr.findIndex(x=> x.email == email.value)
    if(ind >= 0 && arr[ind].secret == secret.value){
        if(password.value.length >= 8 && password.value.length == repeatpassword.value.length){
            arr[ind].password = password.value
            // localStorage.setItem("users",JSON.stringify(arr))
        }
    }
})

// class FireBaseWorker{
//     fireBaseRef;
//     constructor(){
//         this.fireBaseRef = firebase.firestore()
//     }
//     async addUser(user){
//       try{
//        var json = JSON.stringify(user)
//        var result = await this.fireBaseRef.collection("users").add(JSON.parse(json));
//        console.log(result)
//       }
//       catch(error){
//           console.log(error)
//       }
//     }
//     async getAllUsers(){
//         try{
//            let arr = []
//            let result = await this.fireBaseRef.collection("users").get()
//            console.log(result)
//            result.forEach(i=>{
//             var tmp = i.data()
//             tmp.id = i.id
//             arr.push(tmp)
//            })
//            console.log(arr)
//         }
//         catch(error){
//            console.log(error)
//         }
//     }
// }

// var user1 = new User("giorgi","giorgadze",30)
// var user1 = new User("nika","maisuradze",34)
// var user1 = new User("mari","sichinava",36)
// var fbw = new FireBaseWorker()
// // fbw.addUser(user1)
// fbw.getAllUsers()