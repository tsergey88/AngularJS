angular
  .module('myApp', [])
  .controller('parentCtrl', Action)
  .directive('container', function() {
    return {
      restrict: 'EA',
      controllerAs: 'container',
      controller: Action,
    }
  })
  .directive('myButton', function() {
    return {
      restrict: 'EA',
      transclude: true,
      template: ['<button ng-transclude></button>'].join(''),
    }
  });

function Action () {
  this.showAlert = function () {
    alert ('Первая кнопочка для Макара ))');
  };
  this.showPrompt = function () {
    let answer = prompt('Любишь издеваться над бедными студентами? ))');
    alert ('твой ответ ' + answer);
  }
  this.showConfirm = function () {
    confirm('Долго еще? ))');
  }
} 