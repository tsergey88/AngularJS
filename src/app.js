angular
  .module('myApp', [])
  .controller('parentCtrl', function() {
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
  })
  .directive('container', function() {
    return {
      restrict: 'EA',
      controllerAs: 'container',
      controller: function () {
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
      },
    }
  })
  .directive('myButton', function() {
    return {
      restrict: 'EA',
      scope: {
        title: "@",
      },
      replace: true,
      template: [
        '<button>{{title}}</button>'
      ].join(''),
    }
  })