var Guest:string[] = ['imran' , 'waqas' , 'waqar' , 'fahad'];
var i:number = 0;
for(i = 0; i <Guest.length; i++){
    console.log(`Mr.${Guest[i]} you are invited to dinner`)
} 
console.log('unfortunately mr waqas will not be joining us');
Guest[1] = 'saad';
for(i = 0; i <Guest.length; i++){
    console.log(`Mr.${Guest[i]} you are invited to dinner`)
} 
