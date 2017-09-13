/**
 * @ngdoc overview
 * @name chupi.Mail
 * @description
 *
 * Hace POST a servicio de mail para funcionalidades de Contacto y Cumpleaños
 */

'use strict';

angular.module('chupi').factory('Mail',
['$http',
  function ($http) {

    var Mail = {};

    Mail.contact = function(data) {

    }

    Mail.sendBirthday = function(data) {

    }

  }
]);
