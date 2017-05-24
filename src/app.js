import './app.scss';
import './contacts.html';
const angular = require('angular');

import MainCtrl from './MainCtrl';

angular.module('myApp', [])
    .controller('mainCtrl', MainCtrl);
