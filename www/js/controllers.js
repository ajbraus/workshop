angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('HomeCtrl', function ($scope, $location, $ionicModal) {

  $ionicModal.fromTemplateUrl('home-menu-modal.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.modal = modal;
  });
  $scope.openModal = function() {
    $scope.modal.show();
  };
  $scope.closeModal = function() {
    $scope.modal.hide();
  };

  $scope.newOrder = function() {
    console.log('new order')
    $scope.modal.hide();
    $location.path('/app/home/new-order');
  }

  $scope.hail = function() {
    $location.path('/app/home/hail');
  }

  $scope.howItWorks = function() {
    $location.path('app/home/how-it-works');
  }

  $scope.checkIn = function() {
    // $http.post('/checkins', $scope.seat_number)
    //   .success(function (data) {

    //   })
    //   .error(function (data) {

    //   })
    console.log("checking in to seat number" + $scope.seat_number);
  }

})

.controller('NewOrderCtrl', function($scope, $stateParams, $ionicModal) {
  $scope.order = [];

  $scope.items = [
    {name: "Coffee", desc: "Light Roast", img_url: "http://cdn1.medicalnewstoday.com/content/images/headlines/289/289891/coffee.jpg"}
  , {name: "Latte", desc: "Light Roast", img_url: "http://cdn1.medicalnewstoday.com/content/images/headlines/289/289891/coffee.jpg"}
  , {name: "Salad", desc: "Light Roast", img_url: "http://cdn1.medicalnewstoday.com/content/images/headlines/289/289891/coffee.jpg"}
  , {name: "Coffee", desc: "Light Roast", img_url: "http://cdn1.medicalnewstoday.com/content/images/headlines/289/289891/coffee.jpg"}
  , {name: "Coffee", desc: "Light Roast", img_url: "http://cdn1.medicalnewstoday.com/content/images/headlines/289/289891/coffee.jpg"}
  , {name: "Coffee", desc: "Light Roast", img_url: "http://cdn1.medicalnewstoday.com/content/images/headlines/289/289891/coffee.jpg"}
  ]

  $scope.addToOrder = function() {
    var coffee = {name: "Coffee", desc: "Light Roast", img_url: "http://cdn1.medicalnewstoday.com/content/images/headlines/289/289891/coffee.jpg"}
    $scope.order.push(coffee)
    console.log($scope.order)
  }

  $ionicModal.fromTemplateUrl('order-menu-modal.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.modal = modal;
  });
  $scope.openModal = function() {
    $scope.modal.show();
  };
  $scope.closeModal = function() {
    $scope.modal.hide();
  };
})

.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
})

.controller('StaffCtrl', function($scope, $stateParams) {
  $scope.staff = [
    { name: "Ilana"
    , bio: 'I was born and raised in San Diego. I studied history in college, so I\'m pretty awesome at trivia. I love events (especially weddings), whether it\'s planning, photographing or writing about them.  My mantra for the year is \"make it happen!\"'
    , img_url: 'https://app.workshopcafe.com/assets/our_people/Iliana.jpg'
    },
    { name: "Thomas"
    , bio: 'Born and raised in California. I am a freelance documentary and music photographer based in San Francisco. I love coffee, cycling, and conventional film photography.'
    , img_url: 'https://app.workshopcafe.com/assets/our_people/Thomas.jpg'
    }
  ]
});


