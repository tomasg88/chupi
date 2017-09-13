/**
 * @ngdoc overview
 * @name chupi.contactController
 * @description description
 *
 */

'use strict';

angular.module('chupi').controller('contactController',
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
