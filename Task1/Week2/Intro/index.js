// Excercise 1

function EmployeeInfo(Name,Salary)
{
     console.log("Wellcome " + Name+ " Your monthly Salary is "+ Salary) 
}
var name="Mr X";
var salary=5000;
EmployeeInfo(name,salary);




// Excercise 2
const EmpSkills= (skills)=> {
console.log("Employee is expert in "+ skills)
}
var skill="Java";
EmpSkills(skill);




const person = require('./Person');
const student= require('./StudentInfo');
console.log("Student Name:" +student.getName());
// because getName is the function so we should use () 
console.log(`${student.Location()}`);
//getLocation is the function so we should use () 
console.log(`${student.dob}`); 
// because dob is not the the function rather a variable so we do nt needt to use () 
console.log(student.Studentgrade());
console.log("Grade is "+student.Studentgrade(55)); 
// creating new Person 
person1= new person("Jim","USA","myemail@gmail.com");
console.log("using Person Module",person1.getPersonInfo());
console.log("Programe ended");



// Excercise 3
os=require("os");
const util=require('util'); 
console.log("temporary directory"+ os.tmpdir()); 
console.log("hostname: "+ os.hostname()) 
console.log("OS : " + os.platform() +"release:"+ os.release())
console.log("Uptime"+ (os.uptime())/3600 +" hours") 
console.log("userInfo" + util.inspect(os.userInfo())) 
console.log("Memory "+ os.totalmem()/1000000000 + "Giga byte") 
console.log(" free: "+os.freemem()/1000000000 + "Giga byte") 
console.log("CPU "+ util.inspect(os.cpus())) 
console.log("Network"+ util.inspect(os.networkInterfaces())) 
console.log("programe end")








// HomeWork
const rectangle = require('./Rectangle');
const perimeter=rectangle.Perimeter(5,2);
const area=rectangle.Area(5,2);

console.log("Perimeter of Rectengle is "+perimeter+ " Area of Rectangle is " +area)




