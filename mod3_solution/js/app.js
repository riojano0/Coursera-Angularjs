(function() {
'use strict';

angular.module( 'NarrowItDownApp',[])
	.controller('NarrowItDownController', NarrowItDownController)
	.service('MenuSearchService',MenuSearchService)
	.directive('foundItems',foundItemsDirective)
	.constant('ApiPath','https://davids-restaurant.herokuapp.com');


function foundItemsDirective(){
	var ddo = {
		templateUrl : 'foundItems.html',
    	scope: {
     	 found: '<',
     	 onRemove: '&',
     	 error : '<'
   		 }
	};
	return ddo;
}

NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService){
	var narrowCtrl = this;

	narrowCtrl.found = [];
	narrowCtrl.searchTerm = "";
	narrowCtrl.flag = true;	
	narrowCtrl.getMatchedMenuItems = function(){
		if (narrowCtrl.searchTerm != ""){
			MenuSearchService.getMatchedMenuItems(narrowCtrl.searchTerm).then(function(result){
				narrowCtrl.found=result;	
				if(narrowCtrl.found.length){
					narrowCtrl.flag=true;
				}
				else{
					narrowCtrl.flag=false;
				}
			});
		}
		else{
			narrowCtrl.flag=false;
		}
	};

	narrowCtrl.removeItem = function(index){
		narrowCtrl.found.splice(index, 1);
	};

}


MenuSearchService.$inject = ['ApiPath','$http'];
function MenuSearchService(ApiPath,$http){
	var menuService = this;

	menuService.getMatchedMenuItems = function(searchTerm){
		var response = $http({
			method: "GET",
			url: (ApiPath + "/menu_items.json")
		});

    return response.then(function(result){
    	if (searchTerm != ""){
	    	var menuItems = result.data.menu_items;
	    	var foundItems = [];
			for (var i = 0 ; i < menuItems.length; i++){
				var description = menuItems[i].description;
				if (description.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1) {
			   	foundItems.push(menuItems[i]);
				}
			}

			return foundItems;
		}

    });
  };

}

})();