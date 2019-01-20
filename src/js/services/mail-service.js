/**
* @ngdoc overview
* @name chupi.Form
* @description
*
* description
*/

'use strict';

angular.module('chupi').factory('Email',
['$http', '$q',
function ($http, $q) {

    var Email = {};

    Email.sendEmail = function(body) {
        var promise = $q.defer();
        var request = {
            method: "POST",
            url: "../mail.php",
            headers: {
                "Content-Type": 'application/x-www-form-urlencoded',
            },
            dataType: "json", // Add datatype
            data: body
        };
        // var payload = new FormData();

        $http(request).then(
            function success(data) {
                console.log('Correo enviado!');
                console.log('Data:', data);
                promise.resolve(data);
            },
            function error(data, data2, data3, data4) {
                console.log('Error al enviar: ', data);
                promise.reject();
            }
        );

        return promise.promise;
    }

    return Email;

}
]);
