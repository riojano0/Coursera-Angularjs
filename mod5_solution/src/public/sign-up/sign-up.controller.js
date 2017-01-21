(function () {
"use strict";

angular.module('public')
.controller('SignUpController', SignUpController);

SignUpController.$inject = ['MenuService'];
function SignUpController(MenuService) {
  var regCtrl = this;
  regCtrl.itemName = "No such number menu exists"


  regCtrl.submit = function(user){
  	console.log(user)
  	regCtrl.valid = true;
  	regCtrl.user = user;
  	regCtrl.getItem(user.shortName);
  	MenuService.insertUser(user);

  }

  regCtrl.getItem = function(shortName){
  	regCtrl.itemExist = false;
  	// console.log(shortName)
  	MenuService.getMenuItem(shortName).then(function(response){
  		regCtrl.itemExist = true;
  		regCtrl.itemName = response.name;
  		// console.log(response.name);
  		return response;
  	})

  }

}

})();