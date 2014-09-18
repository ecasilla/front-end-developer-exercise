'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('babysteps'));

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));

  it('should have a list of babysteps count on the scope', function () {
    expect(scope.babysteps.length).toBe(7);
  });

  it('should tell me which step is selected',function () {
    var selected = scope.selectedStep(1);
    expect(scope.babysteps[0].selected).toBe(true);
  })
});
