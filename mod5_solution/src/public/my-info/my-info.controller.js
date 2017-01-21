(function () {
"use strict";

angular.module('public')
.controller('MyInfoController', MyInfoController);

MyInfoController.$inject = ['MenuService'];
function MyInfoController(MenuService) {
  var ctrl = this;
  
  ctrl.user = "None";

  ctrl.$onInit = function(){
    ctrl.user = MenuService.getUser();
    MenuService.getMenuItem(ctrl.user.shortName).then(function(response){
      ctrl.menuItem = response;
    });

  }

  // ctrl.$doCheck = function(){
  //   ctrl.menuItem = MenuService.getMenuItem(ctrl.user.shortName).then(function(response){
  //     return response;
  //   });
  // }

}

})();