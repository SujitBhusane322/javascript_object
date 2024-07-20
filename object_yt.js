

let jsuser={
        "name":"sujit",
        age:20,
        email:"sujit@gmail.com",
        location:"mumbai",
    }
    
    


    console.log( jsuser.name);
    console.log( jsuser.location);



//  Object.freeze(jsuser)           //-----is used to freezhe values (cannot change values)

 jsuser.location="latur";        //----is used to change values of keys
console.log( jsuser);


 jsuser.greet=function(){
     console.log("hello world");
 }
 console.log(jsuser.greet());



console.log(Object.keys(jsuser));     //-----is used to find all keys and values in array or object
console.log(Object.values(jsuser));
