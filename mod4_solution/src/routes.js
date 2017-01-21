(function(){
'use strict';
  
angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  
  $urlRouterProvider.otherwise('/');

  $stateProvider

  .state('home', {
    url: '/',
    templateUrl: 'templates/home.template.html'
  })

  .state('categoriesList', {
    url: '/categories-list',
    templateUrl: 'templates/categories-list.template.html',
    controller: 'CategoriesListController as catCtrl',
    resolve: {
      categories: ['MenuDataService', function (MenuDataService) {
        return MenuDataService.getAllCategories();
      }]
    }
  })

  .state('itemsByCategory',{
    url: '/items/{itemShortName}',
    templateUrl: 'templates/items-list.template.html',
    controller: 'ItemsController as iCtrl',
    resolve:{
      items: ['$stateParams','MenuDataService',function($stateParams,MenuDataService){
        return MenuDataService.getItemsForCategory($stateParams.itemShortName)
        .then(function(items){
          return items;
        });
      }]
    }
  });

}


})();