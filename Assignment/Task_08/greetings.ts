var friends :string[] = ["ali" , "hadi" , "ashall"];
var message = "Hi , how are you"
var count:number = 0;
for(count = 0; count  < friends.length; count++){
    console.log(`${friends[count]} , ${message}`);
}