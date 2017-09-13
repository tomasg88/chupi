// Main module
//------------------------
angular.module('chupi', [
  'ngRoute',
  'ngAnimate',
  'ngTouch'
])
.config(['$routeProvider',
  function($routeProvider) {

    $routeProvider
    .when('/home', {
      templateUrl: 'partials/home.html'
    })
    .when('/', {
      redirectTo: '/home'
    })
    .when('/concepto', {
      templateUrl: 'partials/concept.html'
    })
    .when('/barra-movil', {
      templateUrl: 'partials/barra-movil.html'
    })
    .when('/locales/:shopName', {
      templateUrl: 'partials/shop-detail.html',
      controller: 'shopController'
    })
    .when('/cumple', {
      templateUrl: 'partials/birthday.html',
      controller: 'birthdayController'
    })
    .when('/contacto', {
      templateUrl: 'partials/contact.html',
      controller: 'contactController'
    })
    .otherwise({
      redirectTo: '/'
    });

  }
])
.run(['$rootScope', '$location',
  function($rootScope, $location) {

    $rootScope.active = {};

    $rootScope.redirectTo = function(path) {
      $location.path(path);
    }

    // $rootScope.$on('$routeChangeStart', function() {
    //   console.log('cambia la ruta!!');
    //   $rootScope.active = '';
    // });
    //
    // $rootScope.$on('$routeChangeStart', function() {
    //   console.log('cambia la ruta!!');
    // });
  }
]);
