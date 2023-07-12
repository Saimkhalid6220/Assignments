var Guest = ['imran', 'waqas', 'waqar', 'fahad'];
var i = 0;
for (i = 0; i < Guest.length; i++) {
    console.log("Mr.".concat(Guest[i], " you are invited to dinner"));
}
console.log('unfortunately mr waqas will not be joining us');
Guest[1] = 'saad';
for (i = 0; i < Guest.length; i++) {
    console.log("Mr.".concat(Guest[i], " you are invited to dinner"));
}
console.log('congrats! we have found bigger table for dinner so more guest are being invited');
Guest.unshift('Ali');
Guest.push('hadi');
Guest.splice(2, 0, 'wiki');
for (i = 0; i < Guest.length; i++) {
    console.log("Mr.".concat(Guest[i], " you are invited to dinner"));
}
