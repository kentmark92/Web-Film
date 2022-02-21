const username= localStorage.getItem('userLogin');
if (username) {
    document.getElementById('username').innerHTML=username
    ;
    const loginbtn = document.getElementById('login-btn');
    loginbtn.value='Đăng xuất';
    document.getElementById('btn-dn').href='#';
    loginbtn.addEventListener('click', function(){
        localStorage.removeItem('userLogin');
        window.location.reload();
        
    })
}
