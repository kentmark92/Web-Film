

function getInformation() {
   let username = document.getElementById('username').value;
   let password = document.getElementById('password').value;
   let user_password = localStorage.getItem(username);
   if (user_password== password){
       
       localStorage.setItem("userLogin", username);
       window.location.href="index.html";
   } else { alert('ban dang nhap sai')}
}


