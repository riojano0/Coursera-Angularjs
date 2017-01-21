(function() {
"use strict";

angular.module('common', [])
.constant('ApiPath', 'https://riojano0-course-angularjs.herokuapp.com/')
.config(config);

config.$inject = ['$httpProvider'];
function config($httpProvider) {
  $httpProvider.interceptors.push('loadingHttpInterceptor');
}

})();
