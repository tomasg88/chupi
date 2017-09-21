/**
 * @ngdoc overview
 * @name chupi.shopController
 * @description description
 *
 */

'use strict';

angular.module('chupi').controller('shopController',
['$scope', '$routeParams',
  function($scope, $routeParams) {

    /* PRIVATE FUNCTIONS */
    function init() {
      $scope.shops = {
        castelar: {
          back: 'castelar',
          info: 'img/info/Info-castelar.png'
        },
        lomas: {
          back: 'lomas',
          info: 'img/info/Info-lomas.png'
        },
        palermoHollywood: {
          back: 'palermo-hollywood',
          info: 'img/info/Info-palermohollywood.png'
        },
        palermoSoho: {
          back: 'palermo-soho',
          info: 'img/info/Info-palermosoho.png'
        },
        punta: {
          back: 'punta',
          info: 'img/info/Info-punta.png'
        },
        sanTelmo: {
          back: 'san-telmo',
          info: 'img/info/Info-santelmo.png'
        }
      };

      $scope.active = $scope.shops[$routeParams.shopName];
    }

    init();
  }
]);
