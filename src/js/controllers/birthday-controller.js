/**
 * @ngdoc overview
 * @name chupi.birthdayController
 * @description description
 *
 */

'use strict';

angular.module('chupi').controller('birthdayController',
['$scope',
  function($scope) {

    /* PRIVATE FUNCTIONS */
    function init() {
      // Namespace for holding variables and easier interpretation from the view
      $scope.vv = {};
    }

    /* PUBLIC FUNCTIONS */


    // Initialize
    init();
  }
]);
