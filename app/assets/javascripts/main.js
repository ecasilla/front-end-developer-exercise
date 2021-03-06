'use strict';

var app = angular.module('babysteps',[
    'ui.router',
    "ngAnimate"
])

app.run([ '$rootScope', '$state', '$stateParams', function ($rootScope,$state,$stateParams) {

    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;
    $rootScope.$on('$stateChangeError',function (event,toState,toParams,fromState,fromParams,error) {
      console.log("Huston we have a " + console.error(error));
    });

    $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams){
      if (toParams.stepId > fromParams.stepId) {
          $rootScope.stateTransition = 'down';
      }else if (toParams.stepId < fromParams.stepId){
        $rootScope.stateTransition = 'up';
      }else{
        angular.noop();
      }
    });
  }]);

app.config(["$stateProvider",'$urlRouterProvider', function ($stateProvider) {

  $stateProvider

  .state('app', {
    abstract:true,
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
    },
    controller: 'MainCtrl',
  })

  .state('app.step',{
    url:'{stepId:[0-9]{1,4}}',
    views:{
      'content@':{
        templateUrl: function ($stateParams){
          return 'assets/templates/steps/step' + $stateParams.stepId + '.html';
        }
      }
    }
  })
}])


/**
 * @ngdoc function
 * @name babysteps.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of babysteps
 */

app.controller('MainCtrl', ['$scope', 'friends', MainCtrl])



/**
 * @ngdoc factory
 * @name babysteps.friends
 * @description
 * # friends
 * factory in babysteps.
 */

app.factory('friends',function(){

   var friends = [
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

});

app.directive("transition", function($animate, $compile) {
  function link(scope, element, attr) {
    var isSelected = false;
    var parent = element.parent();
    var box;

    element.on('click', function() {
      isSelected = !isAppended;
      if (isSelected) {
        box = angular.element('<div class="rect"></div>');

        scope.$apply(function () {
        $animate.enter(box, parent, element, function() {
          console.log("Done entering");
        });
      });

      } else {
        scope.$apply(function () {
          $animate.leave(box, parent, element, function() {
            console.log("Done entering");
          });
        });
    
      }
    });
  }
  return {
    link: link
  };
});

function MainCtrl($scope,friends){
  $scope.friends = friends;
  $scope.Limit = 2;
  $scope.babysteps = [
  {id:1, selected:false},
  {id:2, selected:false},
  {id:3, selected:false},
  {id:4, selected:false},
  {id:5, selected:false},
  {id:6, selected:false},
  {id:7, selected:false}
  ];

  $scope.selectStep = function(selectedStep) {
    angular.forEach($scope.babysteps,function (value,key) {
      if (value.id === selectedStep) {
        value.selected = true;
      }else{
        value.selected = false;
      }
    });
  }

}
