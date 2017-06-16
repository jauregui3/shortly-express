var db = require('../config');
var bcrypt = require('bcrypt-nodejs');
var Promise = require('bluebird');



var User = db.Model.extend({
  tableName: 'users',
  hasTimestamps: false,
  /*
  save: function() {
    //console.log(this);
    return db.knex(this.tableName)
      .insert({username: this.attributes.username, password: this.attributes.password});
  },
  */
  initialize: function() {
    this.on('creating', function(model, attrs, options) {
      //console.log(model.attributes, 'ATTRS: ',attrs);
      //this.set('username', model.attributes.username);
      //this.set('password', model.attributes.password);
    });
  }
});

module.exports = User;