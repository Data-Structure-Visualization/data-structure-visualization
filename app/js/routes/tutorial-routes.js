//tutorial-routes.js
'use strict';

module.exports = function(app) {

  app.config(function($routeProvider) {
    $routeProvider

      //default page
      .when('/', {
        templateUrl: '/views/public/tutorial-main-view.html',
        controller: 'tutorialController'
      })

      //admin
      .when('/admin', {
        templateUrl: '/views/admin/admin-view.html',
        controller: 'adminController'
      })

            //second page
      .when('/tutorial-select', {
        templateUrl: '/views/public/tutorial-select-view.html',
        controller: 'tutorialSelectController'
      })

      //default to main
      .otherwise({
        redirectTo: '/'
      });
  });
};
