function Person(first, last) {
  this.first = first;
  this.last = last;
};
Person.prototype.show = ()=>{
   console.log(this.first + this.last + 'Person');
}
Person.prototype.updatePerson = () =>{
  this.first = 'random';
  this.last = 'random';
  console.log(this.first + this.last)
}
function Teacher(first,last,subject){
  Person.call(this,first,last);
  this.subject = subject;
}
function Student(first,last,semester){
   Person.call(this,first,last);
   this.sem = semester
}

Teacher.prototype = Object.create(Person.prototype);
Student.prototype = Object.create(Person.prototype);
Teacher.prototype.show = function()  {
  console.log(this.first + this.last + 'Teacher')
}
Student.prototype.show = function()  {
  console.log(this.first + this.last + 'Student')
}
p1 = new Person('shashank','uniyal');
t1 = new Teacher('sunita','uniyal','Maths');
s1 = new Student('Mayank','Uniyal','2');
t1.show();