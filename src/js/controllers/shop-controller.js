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
            lomas: {
                back: 'img/contenedores/Lomas-de-zamora.png',
                info: 'img/info/Info-lomas.png'
            },
            palermo: {
                back: 'img/contenedores/Palermo.png',
                info: 'img/info/Info-palermo.png'
            },
            laplata: {
                back: 'img/contenedores/La-plata.png',
                info: 'img/info/Info-laplata.png'
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
