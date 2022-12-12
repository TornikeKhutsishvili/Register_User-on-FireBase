// ავაწყოთ რეგისტრაციის და ლოგინ ფეიჯი თავისი ვალდიაციებით 
// (პაროლი, იუზერნეიმის გამეორება და.შ) firebase-ის დახმარებით.

var email = document.querySelector(".email")
var repeatpassword = document.querySelector(".repeatpassword")
var password = document.querySelector(".password")
var secret = document.querySelector(".secret")
var save = document.querySelector(".save")

class Users{
    constructor(email,password,repeatpassword,secret){
        this.email = email;
        this.password = password;
        this.repeatpassword = repeatpassword;
        this.secret = secret;
    }
}

password.addEventListener("keydown",function(){
    if(password.value.length < 7){
        repeatpassword.style.display = "none"
    }
    else{
        repeatpassword.style.display = "inline-block"
    }
});

class FireBaseWorker{
    fireBaseRef;
    constructor(){
        this.fireBaseRef = firebase.firestore()
    }
    async AddUser(user){
        try{
            var json = JSON.stringify(user)
            var result = await this.fireBaseRef.collection("users").add(JSON.parse(json));
        }
        catch (error) {
            console.log(error)
        }
    }
    async getAllUsers(){
        try {
            var arr = []
            let strinval = email.value
            var result = await this.fireBaseRef.collection("users").get()
            result.forEach(i=>{
                var tmp = i.data()
                arr.push(tmp)
            });
            var ind = arr.find(x=> x.email == strinval)
            return ind
        } 
        catch (error) {
            console.log(error)
        }
    }
}

save.addEventListener("click",function(){
    var getuser = new FireBaseWorker()
    getuser.getAllUsers()
    let x = getuser.getAllUsers()
    x.then(el=>{
        if(el == undefined){
            if(password.value.length >= 8 && password.value.length == repeatpassword.value.length){
                var fbw = new FireBaseWorker()
                var user = new Users(email.value,password.value,repeatpassword.value,secret.value)
                fbw.AddUser(user)
            }
        }
        else{
            console.log("this user already have")
        }
    });
});