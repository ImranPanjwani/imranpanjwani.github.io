angular.module('myApp', [
  'ngRoute',
  'myApp.controllers'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/home', {templateUrl: 'views/home.html', controller: 'HomeController'});
  $routeProvider.when('/myskills', {templateUrl: 'views/myskills.html', controller: 'MySkillsController'});
  $routeProvider.when('/game', {templateUrl: 'views/game.html', controller: 'GameController'});
  $routeProvider.when('/contactme', {templateUrl: 'views/game.html', controller: 'ContactMeController'});
  $routeProvider.otherwise({redirectTo: '/home'});
}]);