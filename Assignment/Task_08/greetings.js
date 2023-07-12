var friends = ["ali", "hadi", "ashall"];
var message = "Hi , how are you";
var count = 0;
for (count = 0; count < friends.length; count++) {
    console.log("".concat(friends[count], " , ").concat(message));
}
