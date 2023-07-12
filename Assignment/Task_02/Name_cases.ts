let user : string = 'saim khalid ab';
console.log(user.toLowerCase());
console.log(user.toUpperCase());
//  ------------------ FOR TITLE CASE--------------------------------------------------------------
function titleCase(user:string){
    let arr : string[] = user.split('');
    arr[0] = arr[0].toUpperCase();
    let i:number = 0;
    for(i = 0; i<arr.length; i++){
        if(arr[i] === " "){
            arr[i + 1] = arr[i + 1].toUpperCase();
        }
    }
    return arr.join("");
}
console.log(titleCase(user))