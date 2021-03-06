// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'angularMoment', 'starter.controllers'])

.constant('angularMomentConfig', {
    // preprocess: 'unix', // optional
    // timezone: 'Europe/London' // optional
})

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('app', {
    url: "/app",
    abstract: true,
    templateUrl: "templates/menu.html",
    controller: 'AppCtrl'
  })

  .state('app.home', {
    url: "/home",
    views: {
      'menuContent': {
        templateUrl: "templates/home.html"
      , controller: 'HomeCtrl'
      }
    }
  })

  .state('app.hail', {
    url: "/home/hail",
    views: {
      'menuContent': {
        templateUrl: "templates/hail.html"
      , controller: 'NewOrderCtrl'
      }
    }
  })

  .state('app.privacy', {
    url: "/home/privacy",
    views: {
      'menuContent': {
        templateUrl: "templates/privacy.html"
      }
    }
  })

  .state('app.staff', {
    url: "/home/staff",
    views: {
      'menuContent': {
        templateUrl: "templates/staff.html"
      , controller: 'StaffCtrl'
      }
    }
  })

  .state('app.account', {
    url: "/home/account",
    views: {
      'menuContent': {
        templateUrl: "templates/account.html"
      , controller: 'AccountCtrl'
      }
    }
  })

  .state('app.new-order', {
    url: "/home/new-order",
    views: {
      'menuContent': {
        templateUrl: "templates/new-order.html"
      , controller: 'NewOrderCtrl'
      }
    }
  })

  .state('app.how-it-works', {
    url: "/home/how-it-works",
    views: {
      'menuContent': {
        templateUrl: "templates/how-it-works.html"
      }
    }
  })

  // .state('app.playlists', {
  //   url: "/playlists",
  //   views: {
  //     'menuContent': {
  //       templateUrl: "templates/playlists.html",
  //       controller: 'PlaylistsCtrl'
  //     }
  //   }
  // })

  // .state('app.single', {
  //   url: "/playlists/:playlistId",
  //   views: {
  //     'menuContent': {
  //       templateUrl: "templates/playlist.html",
  //       controller: 'PlaylistCtrl'
  //     }
  //   }
  // });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/home');
});
