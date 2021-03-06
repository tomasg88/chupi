/**
 * @ngdoc overview
 * @name chupi.contactController
 * @description description
 *
 */

'use strict';

angular.module('chupi').controller('contactController',
['$scope', 'Email',
  function($scope, Email) {

    /* PRIVATE FUNCTIONS */
    function init() {

        $scope.form = {
          subject: "contacto",
          name: "",
          phone: "",
          email: "",
          question: "",
          birthday: "",
          comment: ""
        }
    }

    function validateForm() {
  		var emailRegEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      console.log("Validando");
      return true;
  	}

    /* PUBLIC FUNCTIONS */
    $scope.sendEmail = function() {
      console.log('Enviando: ', $scope.form);
        Email.sendEmail($scope.form).then(
          function onSuccess(response) {
            alert('Muchas gracias por su mensaje');
            
          },
          function onError(response) {
            alert('Error al enviar');

          }
        );

    }

    // Initialize
    init();
  }
]);
