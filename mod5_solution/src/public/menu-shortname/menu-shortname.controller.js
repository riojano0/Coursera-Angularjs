(function () {
"use strict";

angular.module('public')
.controller('MenuShortNameController', MenuShortNameController);

MenuShortNameController.$inject = ['menuItem'];
function MenuShortNameController(menuItem) {
  var $ctrl = this;
  $ctrl.itemName= menuiItem.name;
  $ctrl.item = menuItem;
  
}

})();