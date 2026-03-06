// document.getElementById('loginBtn').addEventListener('click' , function (){
//     const username = document.getElementById('username').value;
//     const password = document.getElementById('password').value;

//     if(username === 'admin' && password === 'admin123'){
//         window.location.href ="dashboard.html"

//     }else{
//         alert("Invalid ")
//     }
// })

// login Function
document.getElementById('loginBtn').addEventListener('click' , function (){
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if(username !== 'admin'){
        alert("Invalid Username ")
        

    }else if( password !== 'admin123') {
        alert("Invalid Password")
    }else{
        window.location.href ="dashboard.html"

    }
})






function copy (text){
 navigator.clipboard.writeText(text);
}

