// Excercise 4 (Step 1)
var promise = new Promise(function(resolve, reject) { 
    reject('Promise is Rejected');
}) 
promise.then(function(successMsg) { 
    console.log("Sucess:"+successMsg); 
},function(errorMsg) { 
    //To error handler function is invoked 
    console.log("Error:"+errorMsg); })
    
    
    // Another Example 
    console.log("second example:");
    promise1 = new Promise(function(resolve, reject) {
         const x = "Nodes"; const y = "Nodes" 
         if(x === y) { resolve("promise1 is resolved as two strings are simillar"); } 
         else { reject('promise1 is not rejected as two strings are NOT similar'); } }); 
         promise.then(function (successMsg) { 
             console.log(successMsg,'Success, Nodes JS is Easy'); 
            },function(errorMsg){console.log('error msg from reject',errorMsg)} ).catch(function (){ 
                console.log('There Some error has occured'); 
    });



// Excercise 4 (Step 2)
function add_positivenos_async(n1, n2) 
{ 
    let p = new Promise(function (resolve, reject) {
         if (n1 >= 0 && n2 >= 0) 
         {
            resolve(n1 + n2) 
        } else
         reject('NOT_Postive_Number_Passed') }) 
         return p; 
}


add_positivenos_async(10,20).then(function(result){
     console.log("first result",result) 
     return add_positivenos_async(result,result) 
    }).then(function(result){
         console.log("second result",result) 
         return add_positivenos_async(result,result) 
        }).then(function(result){ 
            console.log("third result",result)
        }) 
        console.log('end')