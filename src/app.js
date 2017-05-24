import './app.scss';
import './contacts.html';
const angular = require('angular');
import common from './project/common.module'
import MainCtrl from './MainCtrl';

common();

angular.module('myApp', ["common"])
    .controller('mainCtrl', MainCtrl)

    .config(($routeProvider) => {
    $routeProvider.when("/contact", {
        templateUrl: "html/contacts.html",
        controller: "mainCtrl as vm"
    })
        .otherwise({
            redirectTo: '/contact'
        })
});
