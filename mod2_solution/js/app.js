(function() {
'use strict';

angular.module('ShoppingListCheckOff',[])
.controller('ToBuyController', ToBuyController )
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);


ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService){
	var toBuy = this;

	toBuy.name="";
	toBuy.quantity="";
	//This boolean is for dont show the message 'Everything is bought!' on Start
	toBuy.list = ShoppingListCheckOffService.getItemsToBuy();

	toBuy.addItem = function(){
		ShoppingListCheckOffService.toBuyAddItem(toBuy.name,toBuy.quantity);
	};

	toBuy.removeItem = function(indexItem,item){
		ShoppingListCheckOffService.boughtAddItem(indexItem, item);
	};

}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService){
	var bought = this;
	bought.list = ShoppingListCheckOffService.getItemsBought();
}


function ShoppingListCheckOffService(){
	var service = this;

	var listToBuy = [{
		name: "Cookies",
		quantity: "10 Bags"
	},
	{
		name: "Pepsi",
		quantity: "2 Bottles"
	},
	{
		name: "Oreos",
		quantity: "1 Bag"
	},
	{
		name: "Te",
		quantity: "1 box"
	},
	{
		name: "Beer",
		quantity: "2 Bottles"
	}
	];
	var listBought = [];

	service.toBuyAddItem =	function(itemName,itemQuantity){
		var item = {
			name: itemName,
			quantity: itemQuantity
		};

		listToBuy.push(item);
	};

	service.boughtAddItem = function(itemIndex, item){

		var item = {
			name: item.name,
			quantity: item.quantity
		};

		listBought.push(item);
		listToBuy.splice(itemIndex, 1);

	};

	service.getItemsToBuy = function(){
		return listToBuy;
	};

	service.getItemsBought = function(){
		return listBought;
	};

}


})();