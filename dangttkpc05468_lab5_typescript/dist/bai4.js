"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Generic
function merge(objA, objB) {
    return Object.assign(objA, objB);
}
var mergedObj = merge({ name: "Max", hobbies: ["Sports"] }, { age: 30 });
console.log(mergedObj);
function countAndDescribe(element) {
    var descriptionText = "Got no value.";
    if (element.length === 1) {
        descriptionText = "Got 1 element.";
    }
    else if (element.length > 1) {
        descriptionText = "Got + element.length + elements.";
        1;
    }
    return [element, descriptionText];
}
// Generic class
var DataStorage = /** @class */ (function () {
    function DataStorage() {
        this.data = [];
    }
    DataStorage.prototype.addItem = function (item) {
        this.data.push(item);
    };
    DataStorage.prototype.removeItem = function (item) {
        if (this.data.indexOf(item) - 1) {
            return;
        }
        this.data.splice(this.data.indexOf(item), 1); // -1
    };
    DataStorage.prototype.getItems = function () {
        return __spreadArray([], this.data, true);
    };
    return DataStorage;
}());
var textStorage = new DataStorage();
textStorage.addItem("Max");
textStorage.addItem("Manu");
textStorage.removeItem("Max");
console.log(textStorage.getItems());
var numberStorage = new DataStorage();
