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