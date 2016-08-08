export function routerConfig ($stateProvider, $urlRouterProvider) {
  'ngInject';
  $stateProvider
    .state('sign', {
      url: '/sign',
      templateUrl: 'app/sign/sign.html',
      controller: 'SignController',
      controllerAs: 'sign'
    });

  $urlRouterProvider.otherwise('/sign');
}
