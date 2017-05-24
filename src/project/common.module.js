import CommonController from './common.controller'
const angularRoute = require('angular-route');

export default function () {
    angular.module("common", ["ngRoute"])
        .controller("commonController", CommonController)
        .config(($routeProvider)=>{
            $routeProvider.when("/common", {
                templateUrl: "html/common.html",
                controller: "commonController as vm"
            })
        })
}