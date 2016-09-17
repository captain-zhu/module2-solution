(function () {
  'use strict';

  angular.module('ShoppingListCheckOff', [])
    .controller('ToBuyShoppingController', ToBuyShoppingController)
    .controller('AlreadyBoughtShoppingController', AlreadyBoughtShoppingController)
    .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

  ToBuyShoppingController.$inject = ['ShoppingListCheckOffService'];
  function ToBuyShoppingController(ShoppingListCheckOffService) {
    var vm = this;

    vm.items = ShoppingListCheckOffService.getToBuyItems();

    vm.buy = ShoppingListCheckOffService.buy();
  };

  AlreadyBoughtShoppingController.$inject = ['ShoppingListCheckOffService'];
  function AlreadyBoughtShoppingController(ShoppingListCheckOffService) {
    var vm = this;

    vm.items = ShoppingListCheckOffService.getAlreadyBuyItems();
  };

   function ShoppingListCheckOffService() {
    var service = this;

    service.toBuyArray = [{
      name: "cookies",
      quantity: 10
    },{
      name: "cookies",
      quantity: 9
    },{
      name: "cookies",
      quantity: 8
    },{
      name: "cookies",
      quantity: 7
    },{
      name: "cookies",
      quantity: 6
    }];
    service.alreadyBuyArray = [];

    service.getToBuyItems = function () {
      return service.toBuyArray;
    };

    service.getAlreadyBuyItems = function () {
      return service.alreadyBuyArray;
    };

    service.buy = function (index) {
      var item = service.toBuyArray.splice(index, 1);
      console.log("buy item: " + item);
      service.alreadyBuyArray.push(item);
    }
  }
})();