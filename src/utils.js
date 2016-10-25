
Storage.prototype.setObject = function (key, value) {
    this.setItem(key, JSON.stringify(value));
};

Storage.prototype.getObject = function (key) {
    var value = this.getItem(key);
    return value && JSON.parse(value);
};

// WTE = WhatToEat
// WTE = WTE || {};
// WTE.LocalStorage = COM.LocalStorage || {};
// WTE.LocalStorage.setObject = function (key, value) {
//     localStorage.setObject(key, value);
// };
// WTE.LocalStorage.getObject(key) = function (key){
//     return localStorage.getObject(key);
// };