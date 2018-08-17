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
      scope: { title: "@", },
      replace: true,
      template: '<button>{{title}}</button>',
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