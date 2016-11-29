(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService );

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var bought = this;

  bought.items = ShoppingListCheckOffService.getBoughtItems();

  bought.addItemBought = function (itemIndex) {
    ShoppingListCheckOffService.addItemBought(itemIndex);
  }
}

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var toBuy = this;

toBuy.items = ShoppingListCheckOffService.addItem("Cookies", 10);
toBuy.items = ShoppingListCheckOffService.addItem("Cokes", 20);
toBuy.items = ShoppingListCheckOffService.addItem("Chiclets", 15);
toBuy.items = ShoppingListCheckOffService.addItem("Condons", 5);
toBuy.items = ShoppingListCheckOffService.addItem("Chocolates", 3);

  toBuy.items = ShoppingListCheckOffService.getItems();

  toBuy.removeItem = function (itemIndex) {
    ShoppingListCheckOffService.removeItem(itemIndex);
      if(toBuy.items.length === 0)
      {
        toBuy.message = "Everything is bought!";
      }
  };
}

function ShoppingListCheckOffService() {
  var service = this;

  // List of shopping items
  var items = [];

  var itemsBought = [];

  service.addItem = function (itemName, quantity) {
    var item = {
      name: itemName,
      quantity: quantity
    };
    items.push(item);
  };

  service.addItemBought = function (itemIndex) {
  itemsBought.push(items[itemIndex])
  };

  service.removeItem = function (itemIndex) {
    service.addItemBought(itemIndex);
    //itemsBought.push(items[itemIndex])
    items.splice(itemIndex, 1);
  };

  service.getItems = function () {
    return items;
  };

  service.getBoughtItems = function () {
    return itemsBought;
  };
}

})();
