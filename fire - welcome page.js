
// ავაწყოთ რეგისტრაციის და ლოგინ ფეიჯი თავისი ვალდიაციებით 
// (პაროლი, იუზერნეიმის გამეორება და.შ) firebase-ის დახმარებით.

var email = document.querySelector(".email")
var deletee = document.querySelector(".delete");
// var arr = JSON.parse(localStorage.getItem("users"))

deletee.addEventListener("click",function(){
    // var ind = arr.findIndex(i=> i.email == email.value)
    // arr.splice(ind, 1)
    // localStorage.setItem("users",JSON.stringify(arr))
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