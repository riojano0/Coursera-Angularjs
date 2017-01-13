(function(){
'use strict';

angular.module('MenuApp')
.controller('ItemsController',ItemsController);

	ItemsController.$inject = ['MenuDataService','items'];
	function ItemsController(MenuDataService,items){
		var iCtrl = this;
		iCtrl.items = items
		iCtrl.test = "For the Horde!"
	}

})();