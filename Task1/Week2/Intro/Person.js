//when you have a module that exports just the one thing, it’s more common to use module.exports: 
class student { constructor(name, age, email) { this.name = name; this.age = age; this.email = email; } 
getPersonInfo() { return ` Name: ${this.name} Age: ${this.age} Email: ${this.email} `; }} 
module.exports = student;