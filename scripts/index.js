let username = document.getElementById('username').value;
let password = document.getElementById('password').value;

function loginVerify(){
	if (username == 'AdminSEF123' && 
        password == 'SeF@ctORy$$456') {
        alert('Login successful!')}
    else{
        alert('incorrect')
	}
}
