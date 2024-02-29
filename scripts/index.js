function loginVerify(){
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;

    if (username == 'AdminSEF123' && password == 'SeF@ctORy$$456') {
        window.location.href = "./TDL-page.html";
    } else {
        alert('Incorrect username or password. Please try again.');
    }
}


