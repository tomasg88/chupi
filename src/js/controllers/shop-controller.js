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
          back: 'img/contenedores/Castelar.png',
          info: 'img/info/Info-castelar.png'
        },
        lomas: {
          back: 'img/contenedores/Lomas-de-Zamora.png',
          info: 'img/info/Info-lomas.png'
        },
        palermoHollywood: {
          back: 'img/contenedores/Palermo-hollywood.png',
          info: 'img/info/Info-palermohollywood.png'
        },
        palermoSoho: {
          back: 'img/contenedores/Palermo-soho.png',
          info: 'img/info/Info-palermosoho.png'
        },
        punta: {
          back: 'img/contenedores/Punta-del-este.png',
          info: 'img/info/Info-punta.png'
        },
        sanTelmo: {
          back: 'img/contenedores/San-telmo.png',
          info: 'img/info/Info-santelmo.png'
        }
      };

      $scope.active = $scope.shops[$routeParams.shopName];
    }

    init();
  }
]);
