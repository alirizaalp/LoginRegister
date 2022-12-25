function signup(e){
    event.preventDefault();
    //console.log('working')

    /* use to var,Let's start by adding records.*/

var email = document.getElementById('email').value;
var username = document.getElementById('username').value;
var pass = document.getElementById('password').value;

var user = {
    email: email,
    username: username,
    password: pass,

    /*  JSON.stringify method takes an object and converts it to a string of type string.*/
};
 var json = JSON.stringify(user);
 localStorage.setItem(username, json);
 console.log('user added');

 var json = JSON.stringify(user);
 localStorage.getItem(username,json);
 console.log('user added');

}

function loginFunc(e){
    event.preventDefault();
     
    var username = document.getElementById('username').value;
    var pass = document.getElementById('password').value;
    var result = document.getElementById('result');
   /* JSON.parse method is used to decode data generated in JSON format and convert it to javascript format */
    var user = localStorage.getItem(username);
    var data = JSON.parse(user);
    console.log(data);

   

    /* null; is a special value that means null. typeof null returns us object */
    
    if(user == null){
        result.innerHTML = 'wrong username'; 
        alert("Access Denied...");
        
              
    } else if(username==data.username && pass == data.password){
        
        result.innerHTML = 'logged in'+ " " + username; 
        alert("Access opened..." + "Welcome" +" 's "+ username )
        
        
        
        
        
    } else{ 
        result.innerHTML = 'wrong password'; 
        alert("Access Denied...")
        
             
    }
}