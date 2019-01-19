/**
 * @ngdoc overview
 * @name chupi.birthdayController
 * @description description
 *
 */

'use strict';

angular.module('chupi').controller('barraController',
['$scope', 'Email',
  function($scope, Email) {

    /* PRIVATE FUNCTIONS */
    function init() {

        $scope.form = {
          subject: "barraMovil",
          name: "",
          phone: "",
          email: "",
          guests: "",
          location: "",
          comment: ""
        }
    }

    function validateForm() {
  		var emailRegEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

      return true;
  	}

    /* PUBLIC FUNCTIONS */
    $scope.sendEmail = function() {

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
