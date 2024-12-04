// for

// for (let i = 0; i < 10; i++) { //ctrl+d for selecting all i's
//     const element = i;  
//     console.log(element);
    
// }

// for(let i=1;i<=10;i++){
//     console.log(`Table of  : ${i}`);
//     for(let j=1;j<=10;j++){
//         //  console.log(`inner loop: ${j} and outer loop: ${i}`);
//         console.log(i + '*' + j + '=' + i*j);
//     }
// }

// let myarray = [1,2,3,4,5,6,7,8,9,10]
// for (let i = 0; i < myarray.length; i++) {
//     const element = myarray[i];
//     console.log(element);
// }
for (let index = 1; index <= 10; index++) {
    if(index==5){
        //break;  //stops for loop execution
        // continue; // it doesn't print condition and start for loop for next iteration
         return; //it stops the function execution
    }
    console.log(index);
    
}