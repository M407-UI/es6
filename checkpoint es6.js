var pets = [
  { name: "Max", type: "dog", bornOn: 2018 },
  { name: "Angel", type: "cat", bornOn: 2015 },
  { name: "Jasper", type: "dog", bornOn: 2016 }
];

const getAge =pet=> new Date() .getFullYear() -  pet.bornOn;
const petswithAge =[... pets] ;
petswithAge.forEach ( pet => pet.age _ getAge (pet)) ;
console.log ( petswithAge) ;
const dogs = pets.filter(dog => dog.type ==="dog");
 console.log(dogs);
 const Jasper =pets.find(pet => pet.name ==="jasper");
 console.log(jasper is $(jasper.age)years.old);

