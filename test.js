
class UserService {
    constructor(username, password) {
        this._username = username;
        this._password = password;
    }

    get username () {
        return this._username;
    }

    get password () {
        return this._password;
    }

    authenticate_user () {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', `http://examples.com/authenticate?username=${this.username}&password=${this.password}`, true);
        xhr.responseType = 'json';
        let result = false;
        xhr.onload = function (){
            if (this.readyState == 4 && this.status == 200) {
                result = this.response;
            }
        }
        return result;
    }
}
$('#login').click(function(){
    const username = $('#username');
    const password = $('#password');
    const res =new UserService(username,password).authenticate_user();
    if (res === true) {
        document.location.href = '/home'
    } else {
        alert('Incorrect user or password')
    }

})
