
var http = require('./http');
var config = require('../config.json');

var _user = null;

var auth = {
  login: function (email, pass, cb) {
    cb = arguments[arguments.length - 1];
    http.post(config.loginUrl,{username: email, password: pass})
      .then((result) => {
            localStorage.setItem(config.loginKeyStorage, result.token);
            cb(result);
        })
      .catch((err) => cb(null))
  },
    getUserId : function(){
      if (_user) {
        return _user.id;
      }

      return null;
    },
  getUser: function () {
    return _user;
  },

  logout: function (cb) {
   // delete localStorage.token;
    // if (cb) cb();
    // this.onChange(false);

      localStorage.removeItem(config.loginKeyStorage);
      this.props.history.replace('/home');
  },

  loggedIn: function (cb2) {
    var cb = (user) => {

      this.onChange(user);
      
      if (cb2) cb2(user);

    }
    http.get('/api/session')
        .then((user) => cb(user))
        .fail(() => cb(false))
  },

  onChange: function () {}
};

function pretendRequest(email, pass, cb) {
    http.post('/api/login', { email : email, password : pass })
        .then(cb)
        .fail(() => cb(null))
}

var Authentication = {
    componentWillMount: function() {
        if (typeof(Storage) !== "undefined") {
            let token = localStorage.getItem(config.loginKeyStorage);
            if(!token){
                this.props.history.replace('/home');
            }
        }
    },
};

module.exports = {
	Authentication : Authentication,
	auth : auth
};
