'use strict';

angular.module('babysteps',[
  //  'babysteps.step1',
    'ui.router'
])

.config(["$stateProvider",'$urlRouterProvider', function ($stateProvider,$urlRouterProvider) {

  $stateProvider

    .state('app', {
        url: '/',
        views:{
          'header':{
            templateUrl: 'assets/templates/common/header.html'
          },
          'sidebar':{
            templateUrl:'assets/templates/common/sidebar.html'
          },
          'content':{
            templateUrl:'assets/templates/common/content.html'
          }
        }

      //  $urlRouterProvider.otherwise('/app/#/');
    });
}])


/**
 * @ngdoc function
 * @name babysteps.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of babysteps
 */

.controller('MainCtrl', ['$scope', 'friends', MainCtrl])



/**
 * @ngdoc factory
 * @name babysteps.friends
 * @description
 * # friends
 * factory in babysteps.
 */


.factory('friends',function friends(){

  friends = [
      { "firstName" : "Paul", "lastName" : "Taylor", "babyStep": 2 },
      { "firstName" : "Sharon", "lastName" : "Thomas", "babyStep": 3 },
      { "firstName" : "Thomas", "lastName" : "Harris", "babyStep": 3 },
      { "firstName" : "Deborah", "lastName" : "Lee", "babyStep": 4 },
      { "firstName" : "Mark", "lastName" : "Young", "babyStep": 4 },
      { "firstName" : "Shirley", "lastName" : "Perez", "babyStep": 4 },
      { "firstName" : "Joseph", "lastName" : "Lee", "babyStep": 5 },
      { "firstName" : "Mary", "lastName" : "White", "babyStep": 5 },
      { "firstName" : "Matthew", "lastName" : "Garcia", "babyStep": 5 },
      { "firstName" : "Patricia", "lastName" : "Allen", "babyStep": 5 },
      { "firstName" : "Larry", "lastName" : "Robinson", "babyStep": 6 },
      { "firstName" : "Kimberly", "lastName" : "Lopez", "babyStep": 6 },
      { "firstName" : "Jose", "lastName" : "Martinez", "babyStep": 6 },
      { "firstName" : "Deborah", "lastName" : "Walker", "babyStep": 6 },
      { "firstName" : "Joseph", "lastName" : "Lopez", "babyStep": 6 },
      { "firstName" : "Dorothy", "lastName" : "Moore", "babyStep": 7 },
      { "firstName" : "Jose", "lastName" : "Jackson", "babyStep": 7 },
      { "firstName" : "Karen", "lastName" : "Lee", "babyStep": 7 },
      { "firstName" : "Paul", "lastName" : "Taylor", "babyStep": 7 },
      { "firstName" : "Amy", "lastName" : "Gonzalez", "babyStep": 7 },
      { "firstName" : "Richard", "lastName" : "Martinez", "babyStep": 7 }
  ];

  return friends;

})

function MainCtrl($scope,friends){
  $scope.babysteps = [1,2,3,4,5,6,7];
}


angular.module('babysteps.step1', ['ui.router'])

  .config(["stateProvider",function ($stateProvider) {
    $stateProvider

    .$state('babysteps.step1',{
      url: 'step1',
      views:{
        'content@': {
          templateUrl: 'assets/templates/steps/step1.html'
        }
      }
    })
  }])
