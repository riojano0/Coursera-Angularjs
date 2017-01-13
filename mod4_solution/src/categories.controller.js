(function(){
'use strict';

angular.module('MenuApp')
.controller('CategoriesListController',CategoriesListController);

	CategoriesListController.$inject = ['MenuDataService','categories'];
	function CategoriesListController(MenuDataService,categories){
		var catCtrl = this;
		catCtrl.test = "TEST";
		catCtrl.categories = categories;
	}

})();