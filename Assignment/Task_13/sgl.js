var Guest = ['imran', 'waqas', 'waqar', 'fahad'];
var i = 0;
InviteGuest();
console.log('unfortunately mr waqas will not be joining us');
Guest[1] = 'saad';
InviteGuest();
console.log('congrats! we have found bigger table for dinner so more guest are being invited');
Guest.unshift('Ali');
Guest.push('hadi');
Guest.splice(2, 0, 'wiki');
InviteGuest();
console.log('sorry due to not arrival of table on time we can only invite two people');
while (Guest.length > 2) {
    var removedGuest = Guest.pop();
    console.log("sorry! Mr.".concat(removedGuest, " we couldnot invite you to dinner"));
}
InviteGuest();
Guest.pop();
Guest.pop();
console.log(Guest);
function InviteGuest() {
    for (i = 0; i < Guest.length; i++) {
        console.log("Mr.".concat(Guest[i], " you are invited to dinner"));
    }
}
