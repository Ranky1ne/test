class UserService {
  _username;
  _password;
  constructor(username, password) {
    this._username = username;
    this._password = password;
  }

  get username() {
    return this._username;
  }

  get password () {
    return this._password;
  }

 authenticate_user() {
    return new Promise ((resolve,reject)=>{
      const xhr = new XMLHttpRequest();
    xhr.open('POST', '/auth', true);
    xhr.responseType = 'json';
    xhr.onload = function (){
        if (this.readyState == 4 && this.status == 200) {
            resolve(this.response);
        } else {
          reject(this.response);
        }
    };
    xhr.send(`{'username': ${this.username}, 'password': ${this.password}}`)
    })   
  }
}
$('#login').click(async function(){
    const username = $('#username').val();
    const password = $('#password').val();
    const services =new UserService(username,password);
    try {await services.authenticate_user();
        document.location.href = '/home'
    } catch(error) {
        alert('Incorrect user or password')
    }
})
