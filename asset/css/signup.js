function getInformation() {
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    let confirm_pasword = document.getElementById('cfr-password').value;
    if(username.length < 6){
        alert('Độ dài username >= 6');
    return;
    }
    if (localStorage.getItem(username)){
        alert('Username đã tồn tại! Nhập username khác!');
        return;
    }
    if(password.length < 6){
        alert('Độ dài password >= 6');
    return;
    }
    if (password === confirm_pasword) {
        localStorage.setItem(username,password);
        alert('Đăng ký thành công');
        window.location.href="./login.html";
    } else {alert('Mật khẩu không khớp! Mời nhập lại!')}
}
