
// Number 2
console.log("Number 2")
let personname = ("Faizan")
let message = (`Hello ${personname}, would you like to learn some python today?`)
console.log(message)

// Number 3
console.log("Number 3")
//In Uppercase
let personName = ("Khizer")
let inUc= personName.toUpperCase()
console.log(inUc)
//In Lowercase
let inLC = personName.toLowerCase()
console.log(inLC)
// In TITTLE CASE
function toTitleCase(name: string): string {
  return name
    .toLowerCase()
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

const titlecaseName: string = toTitleCase(personName);

// Number 4
console.log("Number 4")
let quote = ('Albert Einstein once said, "A person who never made a mistake never tried anything new."')
console.log(quote)

// Number 5
console.log("Number 5")
let famous_person = ("Albert Einstein")
let quotation = (`${famous_person}` + 'once said, "A person who never made a mistake never tried anything new"')
console.log(quotation)

// Number 6
console.log("Number 6")
let name_in_whitespaces = "\t\n 'Faizan'\t\n"
console.log("Name In White Spaces" , name_in_whitespaces)
let name_without_whitespaces = name_in_whitespaces.trim()
console.log("Name Without WhiteSpaces", name_without_whitespaces)

// Number 7
console.log("Number 7")
// sum
let x1= 6
let y1=2
let sum=(x1+y1)
console.log(sum)
// minus
let x2 = 10
let minus=(x2-y1)
console.log(minus)
// multiply
let x3 = 4
let multiply = x3*y1
console.log(multiply)
// divide
let  x4 = 40
let  y2 = 5
let divide = x4/y2
console.log(divide)

// Number 8
console.log("Number 8")
///same as Number 7///

// Number 9
console.log("Number 9")
let fav_num = 4
let statement = (`this is my fav No. ${fav_num}`)
console.log(statement)

// Number 10
console.log("Number 10")
/// I have add comments in all my assigment//

// Number 11
console.log("Number 11")
let myarray = ["Faizan","Faisal","Hassan","Husnain"]
for(let i = 0; i<myarray.length; i++){
    
console.log(myarray[i])
};
// Number 12
console.log("Number 12")
let mesg = (" Whats your age?");
for(let i = 0; i<myarray.length; i++){
    
    console.log(myarray[i] + mesg)
    };
// Number 13
console.log("Number 13")
let favourite_mode_transportion = ["Honda_Civic","Suzuki_Swift","Bentaly"]
for(let i=0;i<favourite_mode_transportion.length;i++){
let statment = (`I would like to own a ${favourite_mode_transportion[i]}`)

    console.log(statment)
}
// Number 14
console.log("Number 14")
let guest_list = ("Which one would you invite for dinner?")

// if(guest_list === alive){
//     console.log("I would like to invite alive guest")
// }
// else if(guest_list === deceased){
//     console.log("I will send invite letters to deceased people")
// }
// else{
//     console.log("Invalid Key")
// }
let first_priority = ["Khizer","Meysam","Zohaib"]
for(let i=0; i<first_priority.length; i++){
    let invitation_1= (`Hey ${first_priority[i]}, will you like to attend my party?`)
    console.log(invitation_1)
}
// Number  15
console.log("Number 15")
let invite_cancelation = (`Unfortunally! ${first_priority[0]} can't come in my party`)
console.log(invite_cancelation)
console.log("I have removed array first name",first_priority.shift())
console.log(first_priority.unshift("Sohaib"))
console.log(first_priority)
for(let i=0; i<first_priority.length; i++){
  let invitation_2=(`Hey ${first_priority[i]}, I hope you all will join my party`)
  console.log(invitation_2)
}
// Number  16
console.log("Number 16")
for(let i=0;i<4;i++){
let info = (`I found a big table for my party, now I will invite more friends`)
console.log(info)}
        console.log(first_priority.unshift("Arslan"))
        console.log(first_priority.splice(2,0,"Bilal"))
        console.log(first_priority.push("Ahmed"))
        console.log(first_priority)
        for(let i=0;i<6;i++){
          let invitation_3 =(`${first_priority[i]}, finally you all have to come in my party`)
          console.log(invitation_3)
        }
// Number 17
console.log("Number 17")
for(let i=0;i<4;i++){
let shrink_guest_notification = (`I can invite only two people in my party ${first_priority[i]}`)
console.log(shrink_guest_notification)
}let x =
[(first_priority.pop()),
(first_priority.pop()),
(first_priority.pop()),
(first_priority.pop())]
console.log(x)
 console.log(first_priority)

 for(let i =0; i<4; i++){
    let sorrow_message=(`Sorry ${x[i]} I cant invite you in my Party `)
 console.log(sorrow_message)
 }
 for(let i =0; i<2; i++){
 let new_msg = (`Hey Lisson Both of you ${first_priority[i]} are still invited in my party`)
console.log(new_msg)}
console.log("Both of you has been removed",first_priority.shift() , first_priority.pop())
console.log(first_priority)
// Number 18
console.log("Number 18")
let fav_places = ["Canada","Japan","Australia","Turkiye","Italy"]
console.log(fav_places)
let in_alphabatic_order = fav_places.slice().sort() //in alphabatic order
console.log(in_alphabatic_order)
console.log(fav_places)
let in_reverse_alphabatic = fav_places.slice().reverse() //in reverse order
console.log(in_reverse_alphabatic)
console.log(fav_places)
let reverse_favplaces = fav_places.reverse() // reverse
console.log(reverse_favplaces)
let re_reverse = fav_places.reverse()   //rereverse
console.log(re_reverse)
let in_alphabatic = fav_places.sort() //in alphabatic
console.log(in_alphabatic)
let in_reverse = fav_places.reverse() // in reverse
console.log(in_reverse)

// Number 19
console.log("Number 19")
let length_ofguest = first_priority.length
console.log("I am inviting the number of guest in my party,",length_ofguest)
// Number 20
console.log("Number 20")
let fav_country = ["Turkey","Saudia","Dubai","Japan","Australia"]
for (let a of fav_country){
  console.log(a)
}

// Number 21
console.log("Number 21")
interface City {
  name: string;
  country: string;
  population: number;
}

const cities: City[] = [
  {
    name: "New York",
    country: "United States",
    population: 8398748,
  },
  {
    name: "London",
    country: "United Kingdom",
    population: 8982000,
  },
  {
    name: "Tokyo",
    country: "Japan",
    population: 13929286,
  },
  {
    name: "Sydney",
    country: "Australia",
    population: 5312163,
  },
];

// Print information about each city
cities.forEach((city) => {
  console.log(`City: ${city.name}`);
  console.log(`Country: ${city.country}`);
  console.log(`Population: ${city.population}`);
  console.log("----------");
});

// Number 22
console.log("Number 22")
const myArray = [1, 2, 3, 4, 5];
const index = 10; // This index is out of bounds
try {
  const value = myArray[index];
  console.log(`The index no. is:${index} and its value is ${value}`);
} catch (error) {
  console.error("Array index error:", error);
}

if(index >= 0 && 4>=index){
  console.log(`The index number is in myarray and its value is ${myArray[index]}`)
}
else{
  console.log(`The index number ${index} is not in an array`)
}

// Number 23
console.log("Number 23")
console.log("Condition 1")
let car_1: string = "Hustler"
console.log("Is car_1 == Hustler? I predicted true")
console.log(car_1 == "Hustler")
console.log("Condition 2")
let No_1: number = 5
let No_2: number = 6
console.log("is No_2 > No_1, I predicted true")
console.log(No_2>No_1)
console.log("Condition 3")
console.log("IS No_1 == No_2, I predicted false")
console.log(No_1 == No_2)
console.log("Condition 4")
console.log("No_1 != No_2 , I predicted true")
console.log(No_1 != No_2)
console.log("Condition 5")
console.log("is No_2 < No_1, I predicted false")
console.log(No_2<No_1)
console.log("Condition 6")
let No_3 : number = 5
console.log("is No_3 == No_1, I predicted true")
console.log(No_1 == No_3)
console.log("Condition 7")
console.log("is No_3 != No_1, I predicted false")
console.log(No_3!= No_1)
console.log("Condition 8")
console.log("is typeof No_2 = typeof No_1, I predicted true")
console.log(typeof No_2 == typeof No_1)
console.log("Condition 9")
let No_4 : string = "6"
console.log("is typeof No_4 = typeof No_1, I predicted false")
console.log(typeof No_4 == typeof No_1)
console.log("Condition 10")
console.log("is car_1 == No_4, I predicted false")
console.log(car_1 == No_4)

// Number 24//
console.log("Number 24")
// • Tests for equality and inequality with strings
let num_1 = "3"
let num_2 = "4"
console.log("is typeof num_1 = typeof num_2")
console.log(typeof num_1 == typeof num_2)
console.log("is typeof num_1 != typeof num_2")
console.log(typeof num_1 !== typeof num_2)
// • Tests using the lower case function
let nam_1= "Faizan"
let nam_2 = "faizan"
console.log("Is nam_1 != nam_2 in term of lowercase function")
console.log(nam_1 !== nam_2)
console.log("Is nam_1 = nam_2 in term of lowercase function")
console.log(nam_1 == nam_2)

// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
let a1 = 5;
let a2 = 6;
let a3 = 5;
console.log("IS a1<a2")      
console.log(a1<a2 )
console.log("IS a1>a2")     
console.log(a1>a2 )
console.log("IS a1<=a3")      
console.log(a1<=a3 )
console.log("IS a1>=a2")     
console.log(a1>=a2 )
// • Tests using "and" and "or" operators
console.log("IS a1<a2 && a1 == 5")      
console.log(a1<a2 && a1 == 5)
console.log("IS a1>a2 && a1 == 5")     
console.log(a1>a2 && a1 == 5)
console.log("IS a1<a2 || a1 !== 5") 
console.log(a1<a2 || a1 == 5)   
console.log("IS a1>a2 || a1 == 5")    
console.log(a1>a2 || a1 == 5)    
// • Test whether an item is in a array
let new_array = [1,2,3,4,5]
console.log("is 4 is in the array")
console.log(myArray.includes(4))
// • Test whether an item is not in a array
console.log("is 7 is in the array")
console.log(myArray.includes(7))

// Number 25
console.log("Number 25")
let alien_color_1 = "green"
if( alien_color_1 == "green"){
  console.log("You earned 5 points")
}
else{
  console.log("Invalid answer")
}
if( alien_color_1 == "green"){
  console.log("You Pass")
}
//Number 26 //
console.log("Number 26")
let alien_color_2 = "green"
if( alien_color_2 == "green"){
  console.log("You got 5 points")
}
else{
  console.log("You got 10 points")
}
let alien_color_21 = "green"
if( alien_color_21 == "blue"){
  console.log("You got 5 points by hitting green colour")
}
else{
  console.log("You got 10 points by hitting non-green colour")
}
// Number 27//
console.log("Number 27")
let alien = ["green","yellow","red"]
for(let color of alien){
if (color === "green") {
  console.log("You shot a green alien and earned 5 points.");
}if (color === "yellow") {
  console.log("You shot a yellow alien and earned 10 points.");
}
if (color === "red") {
  console.log("You shot a red alien and earned 15 points.");
}
}
// Number 28//
console.log("Number 28")
let age = 2
if(age<2){
  console.log("you are baby")
}
else if(age>=2&&age<4){
  console.log("you are toddler")
}
else if(age>=4&&age<13){
  console.log("you are kid")
}
else if(age>=13&&age<20){
  console.log("you are teenager")
}
else if(age>=20&&age<65){
  console.log("you are adult")
}
else if(age>65){
  console.log("you are elder")
}
else{
  console.log("Enter again")
}
// Number 29 //
console.log("Number 29")
let fav_fruits = ["apple","grapes","mango"]
if(fav_fruits.includes("apple")){
  console.log("You like apples")
}
if(fav_fruits.includes("grapes")){
  console.log("You like grapes")
}
if(fav_fruits.includes("mango")){
  console.log("You like mango")
}
if(fav_fruits.includes("orange")){
  console.log("You like orange")
}
if(fav_fruits.includes("banana")){
  console.log("You like banana")
}
// Number 30 //
console.log("Number 30")
let msg = ["Admin","Zaryab","Abdullah","Hammad","Kamran"]
for(let i=0; i<msg.length; i++){
  
if(msg[i]=="Admin"){
  console.log(`Hello Admin! Would you like to see today report.`)
}
else{
  console.log(`Hello ${msg[i]}! Welcome for comming on our site`)
}
}
// Number 31 //
console.log("Number 31")
let user = []
if (user.length == 0){
  console.log("We need to find some users.")
}
else{
  if(age<2){
    console.log("you are baby")
  }
  else if(age>=2&&age<4){
    console.log("you are toddler")
  }
  else if(age>=4&&age<13){
    console.log("you are kid")
  }
  else if(age>=13&&age<20){
    console.log("you are teenager")
  }
  else if(age>=20&&age<65){
    console.log("you are adult")
  }
  else if(age>65){
    console.log("you are elder")
  }
  else{
    console.log("Enter again")
  }
}
// Number 32//
console.log("Number 32")
let current_users =["Zohaib","Sohaib","Meysam","Khizer","Milo"]
let new_users =["Hamza","Zaryab","Zohaib","Sohaib","Abdullah"]

// const currentUsers: string[] = ["john", "doe", "mary", "jane", "bob"];
// const newUsers: string[] = ["john", "doe", "alice", "peter", "mike"];

for (const newUser of new_users) {
  const newUserLower = newUser.toLowerCase();
  if (current_users.some((user) => user.toLowerCase() === newUserLower)) {
    console.log(`The username ${newUser} is already taken. Please choose a different username.`);
  } else {
    console.log(`The username ${newUser} is available.`);
  }
}
// Number 33//
console.log("Number 33")
let numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (const number of numbers) {
  let ordinalEnding;

  if (number === 1) {
    ordinalEnding = "st";
  } else if (number === 2) {
    ordinalEnding = "nd";
  } else if (number === 3) {
    ordinalEnding = "rd";
  } else {
    ordinalEnding = "th";
  }

  console.log(`${number}${ordinalEnding}`);
}
// Number 34//
console.log("Number 34")
let fav_pizzas = ["Chicken Tikka","Chicken Fajita","Souci Veg"]
for(let pizzas of fav_pizzas){
  console.log(`You like ${pizzas} pizza`)
}
console.log("I like Pizza as much as I want. I ate it oftenly. It is tasty")
// Number 35//
console.log("Number 35")
let fav_animals = ["Dog","Cat","Lion"]
for(let pet of fav_animals){
  // console.log(pet)
  console.log(`I like to take over ${pet}`)
}
console.log("These animals are more likely to be pet. They are cute. Usually they eat meat. But these animals can attack on other animals.")
// Number 36//
console.log("Number 36")
function make_shirt(size: string, message: string){
  console.log(`I'm wearing a shirt of ${size} size. Such a shirt looks '${message}' on me.`);
  
}
make_shirt('large', 'beautiful');
make_shirt('short', 'fit');
// Number 37//
console.log("Number 37")
function make_shirt1(size: string = 'large', message: string = 'I love TypeScript!'): void {
  console.log(`I'm making a ${size} shirt with the message '${message}'.`);
}
make_shirt1();
make_shirt1('medium');
make_shirt1('small', 'I love Python!');
// Number 38//
console.log("Number 38")
function describeCity(city: string, country: string = "a country that I dont know") {
  console.log(`${city} is in ${country}.`);
}

describeCity("Karachi", "Pakistan");
describeCity("New York", "USA");
describeCity("London");
// Number 39//
console.log("Number 39")
function city_country(city: string, country: string): string {
  return `"${city}, ${country}"`;
}
const cityCountryString1 = city_country('Lahore', 'Pakistan'); // 'Lahore, Pakistan'
const cityCountryString2 = city_country('London', 'England'); // 'London, England'
const cityCountryString3 = city_country('Tokyo', 'Japan'); // 'Tokyo, Japan'
console.log(cityCountryString1)
console.log(cityCountryString2)
console.log(cityCountryString3)
// Number 40//
console.log("Number 40")
function make_album(artistName: string, albumTitle: string, numberOfTracks?: number): Record<string, string | number> {
  const album: Record<string, string | number> = {
    artistName,
    albumTitle,
  };
  if (numberOfTracks) {
    album.numberOfTracks = numberOfTracks;
  }
  return album;
}

const album1 = make_album('Arjith', 'Romantic');
const album2 = make_album('Sidhu', 'Gangster');
const album3 = make_album('Bohemia', 'Mashup', 17);
console.log(album1); 
console.log(album2); 
console.log(album3); 
// Number 41//
console.log("Number 41")
const magicians_1 = ['Amir', 'Imran', 'Talha'];


function show_magicians(magicians_1: string[]): void {
  for (const magician of magicians_1) {
    console.log(magician);
  }
}
show_magicians(magicians_1);
// Number 42//
console.log("Number 42")


function makeGreat(magicians: string[]): string[] {
  const greatMagicians: string[] = [];
  for (const magician of magicians) {
  greatMagicians.push(`the Great ${magician}`);
}
return greatMagicians;
}

function showMagicians(magicians: string[]): void {
for (const magician of magicians) {
  console.log(magician);
}
}

const magicians: string[] = ["Alice", "Bob", "Charlie"];
const greatMagicians: string[] = makeGreat(magicians);

console.log("Original Magicians:");
showMagicians(magicians);

console.log("\nGreat Magicians:");
showMagicians(greatMagicians);

// Number 43//
console.log("Number 43")

function makeGreat_(magicians: string[]): string[] {
  const greatMagicians: string[] = [];
  for (const magician of magicians) {
    greatMagicians.push(`the Great ${magician}`);
  }
  return greatMagicians;
}

function showMagicians_(magicians: string[]): void {
  for (const magician of magicians) {
    console.log(magician);
  }
}

const magicianss: string[] = ["Alice", "Bob", "Charlie"];
const copyOfMagicians: string[] = [...magicianss];

const greatMagicians_: string[] = makeGreat(copyOfMagicians);

console.log("Original Magicians:");
showMagicians_(magicianss);

console.log("\nGreat Magicians:");
showMagicians_(greatMagicians);
// Number 44//
console.log("Number 44")
function makeSandwich(...items: string[]): void {
  console.log("Sandwich Summary:");
  if (items.length === 0) {
    console.log("No items in the sandwich.");
  } else {
    console.log("Items in the sandwich:");
    for (const item of items) {
      console.log(`- ${item}`);
    }
  }
  console.log("Enjoy your sandwich!\n");
}

makeSandwich("Ham", "Cheese", "Lettuce", "Tomato");
makeSandwich("Turkey", "Swiss Cheese");
makeSandwich();

// Number 45//
console.log("Number 45")
interface CarInfo {
  manufacturer: string;
  model: string;
  [key: string]: any;
}

function createCar(manufacturer: string, model: string, ...args: [string, any][]): CarInfo {
  const car: CarInfo = {
    manufacturer,
    model,
  };

  for (const [key, value] of args) {
    car[key] = value;
  }

  return car;
}

const myCar = createCar("Toyota", "Camry", ["color", "blue"], ["year", 2022]);
console.log(myCar);
