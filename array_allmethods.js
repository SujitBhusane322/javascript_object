myarr1=[1,2,3,4,5,6];
 myarr2=[7,8,9,10,11];     //---SPREAD OPERATOR
add=[...myarr1,...myarr2]

console.log(add)

student=["sujit","jay","om","ram"];
  console.log(student.push("yash"));     //------PUSH  its is used for add values in end
  console.log(student.pop("ram"));        //------POP  it is delete last value
  console.log(student.unshift("madhuri"))  //-----UNSHIFT   it is used for add in start
  console.log(student.includes("sujit"));     //-----includes  it is used check values(T&F)
  console.log(student.flat(Infinity));            //-----FLAT  it is used to many array in one array
  console.log(student.indexOf("om"));                //----INDEXOF it is used to find index of particular value

console.log(student);


