// Q 1 Task 1 
//  Install Node.js, TypeScript and VS Code on your computer.
//  Ans
// Node.js , typeScript, and . vs code , ko install kar dia hy
// Q 2 Task 2 
// Personal Message: Store a person’s name in a variable, and print a message to that person.
//  Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?”
// Ans
//   let personName ="bilal";
//   console.log(`Hello ${personName}, would you like to learn some python today?`); 
// Q 3 Task 3 
// Name Cases: Store a person’s name in a variable, and then print that person’s name in 
// lowercase, uppercase,and titlecase.
//  Ans
//   let personName ="Muhammad Bilal Khan";
//   console.log("lowercase:", personName. toLowerCase());
//   console.log("uppercase:", personName. toUpperCase());
//   console.log("titlecase:", personName. replace(/\b\w/g,c=> c.toLowerCase()));
//   Q 4 Task 4 
//  Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author.
//  Your output should look something like the following, including the quotation marks:
//  Albert Einstein once said, “A person who never made a mistake never tried anything new.”
// Ans
// let quote: string ="A person who never made a mistake never tried anything new";
// let auther: string ="Albert Eintein";
// console.log(`${auther} once said,"${quote}"`);
//   Q 5 Task 5 
//  Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person.
// Then compose your message and store it in a new variable called message. Print your message.
// Ans 
// let famous_person: string = "Albert Eintein";
// let message:string = `$(famous_person) once said,"$(quote)"`;
// console.log(message);
// Q 6 Task 6
// Stripping Names: Store a person’s name, and include some whitespace characters at the beginning
//  and end of the name. Make sure you use each character combination, "\t" and "\n", at least once.
// Print the name once, so the whitespace around the name is displayed. Then print the name after striping
//  the white spaces.
// Ans
// let personName:string = "\t\n Muhammad Bilal Khan   \n\t" ;
// console.log("Original:",personName);
// console.log("Stripped:",personName.trim());
// Q 7 Task 7 
// Number Eight: Write addition, subtraction, multiplication, and division operations that 
//  each result in the number 8. Be sure to enclose your operations in print statements to see the results.
// Ans
// console.log(5+3);
// console.log(10-2);
// console.log(4*2);
// console.log(16/2);
// Q 8 Task 8 
// You should create four lines that look like this:
// console.log(5 + 3)
// Your output should simply be four lines with the number 8 appearing once on each line.
// Ans
// console.log(5+3);
// console.log(10-2);
// console.log(4*2);
// console.log(16/2);
// Q 9 Task 9 
//  Favorite Number: Store your favorite number in a variable. Then, using that variable, create a message
//  that reveals your favorite number. Print that message.
// Ans
// let favouriteNumber: number = 7;
// console.log(`My favourite number is ${favouriteNumber}.`);
// Q 10 Task 10 
// Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each.
//  If you don’t have anything specific to write because your programs are too simple at this point, 
//  just add your name and the current date at the top of each program file.
// Then write one sentence describing what the program does.
// Ans
// author:[Bilal khan]
// date:[ monday , feburary 17 , 2024]
// task 9: printing my faverite number 
// let favouriteNumber: number = 7;
// reveling my favourte number is message.
// console.log(`My favourite number is ${favouriteNumber}.`);
// Q 11 Task 11 
// Names: Store the names of a few of your friends in a array called names. 
// Print each person’s name by accessing each element in the list, one at a time.
// Ans
// let names : string [] = ["ali","adam","akbar","masood"];
// console.log(names[0]);
// console.log(names[1]);
// console.log(names[2]);
// console.log(names[3]);
//  Q 12 Task 12 
// Greetings: Start with the array you used in Exercise 11, but instead of just printing
//  each person’s name, print a message to them. The text of each message should be the same,
// but each message should be personalized with the person’s name.
//  Ans 
// let names : string [] = ["ali","adam","akbar","masood"];
// let message : string ="Do you like to play football"
// console.log(names[0] +"  "+ message);
// console.log(names[1] +"  "+ message);
// console.log(names[2] +"  "+ message);
// console.log(names[3] +"  "+ message);
// Q 13 Task 13 
// Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car,
//  and make a list that stores several examples. Use your list to print a series of statements 
//  about these items, such as “I would like to own a Honda motorcycle.”
// Ans
// let transpotation : string [] = ["honda motocyle","Audi","honda City"];
// transpotation.map((items) => console.log(`I would like to own a ${items}`));
// Q 14 Task 14 
// Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? 
// Make a list that includes at least three people you’d like to invite to dinner. 
// Then use your list to print a message to each person, inviting them to dinner.
// Ans
// let guestarr : string [] = ["Adam","akbar","masood"];
// guestarr.map((items) => (console.log(`Dear ${items}, you are invited to the dinner`)));
//  Q 15 Task 15 
// Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need
//  to send out a new set of invitations. You’ll have to think of someone else to invite.
// • Start with your program from Exercise 14. Add a print statement at the end of your program
//  stating the name of the guest who can’t make it.
// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person 
// you are inviting.
// • Print a second set of invitation messages, one for each person who is still in your list.
// Ans
//     let guestarr : string[] = ["ali","adam","akbar","masood"];
//     let caNotAttend : string = "ali";
//     console.log(caNotAttend + "", "can not attend the dinner");
//    let newGuest : string = "bilal";
//    guestarr [guestarr.indexOf(caNotAttend)] = newGuest;
//    console.log(guestarr)
//     guestarr.map((items) =>
//    console.log(`Dear ${items}, you are invited to the diner`));
//  Q 16 Task 16 
// More Guests: You just found a bigger dinner table, so now more space is available. 
// Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people
// that you found a bigger dinner table.
// • Add one new guest to the beginning of your array.
//  • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. 
//  • Print a new set of invitation messages, one for each person in your list.
// Ans
//    let guestarr : string[] = ["alishba","haseeb","ali","hamza"];
//    let caNotAttend : string = "ali";
//    let newGuest : string = "wajahat";
//    guestarr[guestarr.indexOf(caNotAttend)] = newGuest;
//    console.log(guestarr);
//    guestarr.map((items) => 
//    console.log(`Dear ${items},I found a bigger dinner table so i am invited more peoples,`));
//  let guestbeg : string ="muizz";
//  guestarr.unshift(guestbeg);
//  console.log(guestarr);
//  let middleGuest : string = "Fatima";
//  let middleIndex = guestarr.length/3
//  guestarr.splice(middleIndex,0,middleGuest)
//  console.log(guestarr)
//  guestarr.push("zeeshan");
//  console.log(guestarr);
//  guestarr.map((items) =>
//  console.log(`Dear ${items}, you are invited in the more people list on dinner`));
//  Q 17 Task 17
//       Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner,
//       and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that 
// you can invite only two people for dinner.
// • Remove guests from your list one at a time until only two names remain in your list.
//  Each time you pop a name from your list, print a message to that person letting them know you’re sorry
//   you can’t invite them to dinner.
// • Print a message to each of the two people still on your list, letting them know they’re still invited.
// • Remove the last two names from your list, so you have an empty list.
//  Print your list to make sure you actually have an empty list at the end of your program.
//  Ans
// let guests : string [] = ["Ali","bilal","carry","imran","humza"];
// console.log("Due to limited space, only two people can be invited for dinner.");
// while (guests.length > 2){
//     const removedguest = guests.pop();
//     console.log(`Sorry, ${removedguest}. you're no longer invited to dinner.`);}
//     // // let guests : string = ["ali","bilal"];
// guests.forEach((guests) =>{
//     console.log(`Dear ${guests}, You're still invited to dinner.`)
// });
// Q 18 Task 18
// Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.
// • Print your array in its original order.
// • Print your array in alphabetical order without modifying the actual list.
// • Show that your array is still in its original order by printing it.
// • Print your array in reverse alphabetical order without changing the order of the original list.
// • Show that your array is still in its original order by printing it again.
// • Reverse the order of your list. Print the array to show that its order has changed.
// • Reverse the order of your list again. Print the list to show it’s back to its original order.
// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its
//  order has changed.
// Ans
// let placestovisit: string[] = ["tokyo","pakistan","america","china","japan"];
// console.log("Original order:", placestovisit);
// console.log("Alphabetical order:", [...placestovisit].sort());
// console.log("Original order after sorting:", placestovisit);
// console.log("Reverse alphabetical order:", [...placestovisit].sort().reverse());
// console.log("Original order after reverse sorting:", placestovisit);
// placestovisit.reverse();
// console.log("Reversed order:", placestovisit);
// placestovisit.reverse();
// console.log("Back to original order:", placestovisit);
// placestovisit.sort();
// console.log("sorted in alphabetical order:",placestovisit);
// placestovisit.sort((a, b) => b.localeCompare(a));
// console.log("Sorted in reverse alphabetical order:", placestovisit);
// Q 19 Task 19
//  Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating
//  the number of people you are inviting to dinner.
// Ans
var invitations = ["ali", "bilal"];
var count_invitations = invitations.length;
console.log("".concat(count_invitations, " people will come to the dinner"));
//  Q 20 Task 20 Ans
// let country: string[] = ["pakistan","india","Newyork","japan","china"];
// console.log("List of country:");
// console.log(country);
// Q 21 Task 21 Ans
//  let person : {name: string, fname: string , age: number} = {name:"Bial", fname: "male", age: 26};
//  console.log(person);
//  Q 22 Task 22 Ans
// const days : string[] =["monday","tuesday","wednesday","thursday","friday","saturday","sunday"];
// console.log({7});
// console.log([6]);
// Q 23 Task 23 Ans
// let car = "subaru";
// console.log("is car == 'subaru'? predict true");
// console.log(car == 'subaru');
// console.log("is car != 'honda city'? predict true");
// console.log(car != 'hounda city');
// console.log("is car == 'subaru'? predict false");
// console.log(car == 'subaru');
// console.log("is car == 'SUBARU'? predict false");
// console.log(car == 'SUBARU');
// console.log("is car.length == 6? predict true");
// console.log(car.length == 6);
// console.log("is car.length != 10? predict true");
// console.log(car.length != 10);
// console.log("is 10 > 45 ? predict false");
// console.log(10 > 45);
// console.log("is 3 <= 2 ? predict false");
// console.log(3 <= 2);
// console.log("is 72 >= 83 ? predict false");
// console.log(72 >= 83);
// console.log("is car == 'subaru' && car.length == 6? predict true");
// console.log(car == 'subaru' && car.length == 6);
// Q 24 Task 24 Ans
// let name_1 : string ="bilal";
// let name_2 : string ="Muhammad Bilal";
// let name_3 : string ="Muhammad Bilal Khan";
// if(name_1 == name_3){
//   console.log("name are equal")
// } else{
//   console.log("name is not equal")
// }
// if(name_1 != name_2){
//   console.log("name are equal")
// }
// if(name_1 != name_3){
//   console.log("name are equal")
// }
// let age_1 : number = 18  ;
// let age_2 : number = 22 ;
// if (age_1 == 22){
//   console.log("Eligible for vote")
// }
// if (age_1 != 22){
//   console.log("Eligible for vote in older category")
// }
// if (age_1 <= age_2){
//   console.log("youngar")
// }
// if (age_2 >= age_1){
//   console.log("older")
// }
// if (age_1 == 18 && age_2 == 22){
//   console.log("person is eligible for vote")
// }
// if (age_1 == 18 || age_2 != 22){
//   console.log("person is eligible not for vote")
//  }
// let country : string[] = ["pakistan","india","japan","china"];
// if(country.includes("pakistan")){
//   console.log("pakistan is in country list")
// }
// if (!country.includes("america")){
//   console.log("america is not include in an array")
// }
// Q 25 Task 25 Ans
// let alien_color = "green";
// if (alien_color == "green")
//   console.log("you earn 5 points");
// let alien_color : string = "red"
// if (alien_color == "green")
// console.log("no output");
// Q 26 Task 26 Ans
//  let alien_color = "green";
//  if (alien_color == "green"){
//    console.log("plaayer just earned 5 points for shooting the alien")
//  }else{
//   console.log("player just earned 10 points")
//  };
//  let alien_color = "red";
//  if (alien_color == "green"){
//    console.log("plaayer just earned 5 points for shooting the alien")
//  }else{
//   console.log("player just earned 10 points")
//  };
// Q 27 Task 27 Ans
//   let alien_color = "green";
//   if (alien_color == "green"){
//     console.log("5 point")
//   }else if (alien_color == "yellow") {
//     console.log("10 points")
//   } else{
//  console.log("15 points")
//   }
// Q 28 Task 28 Ans
//     let age : number = 18 ;
//     if(age < 2) {
//       console.log("you are a baby")
//     }else if(age < 4) {
//       console.log("you are a toddler")
//     }
//   else if(age < 13) {
//     console.log("you are a kid")
//   }
//   else if(age < 20) {
//   console.log("you are a teenager")
// }
// else if(age < 65) {
//   console.log("you are a adult")
// }else{
//   console.log("you are older")
// }
//  Q 29 Task 29 Ans
// let favourte_frults : string [] = ["kivi","orange","apples","berry","peach"];
// if (favourte_frults.includes("kivi")){
//   console.log("kivi")
// }
// if(favourte_frults.includes("orange")){
//   console.log("orange")
// }
// if(favourte_frults.includes("apples")){
//   console.log("apples")
// }
// if(favourte_frults.includes("peach")){
//   console.log("you really like bananas")
// }
// if(favourte_frults.includes("berry")){
//   console.log("you really like bananas")
// }
// Q 30 Task 30 Ans
// let users : string [] = ["admin","ali","bilal","eric","fatma"]
// for(let user of users) {
//   if (user === "admin"){
//     console.log("Helo admin, would you like to see a status report?")
//   } else{
//     console.log(` Hello ${user}, thank you for logging in again`)
//   }
// }
//  Q 31 Task 31 Ans
// let users : string [] = ["admin","ali","bilal","eric","fatma"]
// users = []
// if(users.length === 0){
//   console.log("we need to find some users")
// }
// Q 32 Task 32 Ans
// let current_user : string [] = ["admin","Eric","Ali","Humza","fatima"]
// let new_users : string [] = ["admin","fatima","Aliza","Haseeb","Noor"]
// let current_user_lower : string [] =current_user.map(user => user.toLowerCase())
// for (let new_user of new_users){
//   if (current_user_lower.includes(new_user.toLowerCase())){
//     console.log(`Sorry ${new_user}, that name is taken`)
//   } else{
//     console.log(`Yes ${new_user} it still in avaliable listSS`)
//   }
// }
// Q 33 Task 33 Ans
// let numbers : number [] = [1,2,3,4,5,6,7,8,9,]
// for(let number of numbers){
// if(number ===1){
//   console.log(`${number}st`)
// }else if (number === 2) {
//   console.log(`${number}nd`)
// }else if (number === 3) {
//   console.log(`${number}rd`)
// }else{
//   console.log(`${number}th`)
// }
// }
// Q 34 Task Ans
// let favourite_pizza : string [] = ["pepperon","chicken","veg"]
// for (let pizza of favourite_pizza){
//   console.log(pizza)
// }
// console.log("\n")
// for(let pizza of favourite_pizza){
//   console.log(`I really like ${pizza}pizza!`)
// }
// console.log("\nI really love pizza")
// Q 35 Task 35 Ans
// let animals : string [] = ["cat","dog","lion"]
// for (let animal of animals){
//   console.log(animal)
// }
// console.log("\n")
// for (let animal of animals){
//   console.log(`A ${animal} has a tail`)
// }
// console.log("\n all of thesee are great pets! but i Love cats more")
// Q 36 Task 36 Ans
// function makeShirt(size : string, text: string): void {
//   console.log(`\n You order a ${size} shirt that says ${text}`)
// }
// makeShirt(`large`,'"i love typescript"')
// makeShirt(`medium`,'"i need a big shirt"')
// Q 37 Task 37 Ans
// function makeShirt(size: string =`large`,text: string = `I love typescript`): void {
// console.log(`you have order a ${size},shirt that says ${text}`)
// }
// makeShirt();
// makeShirt(`medium`)
// makeShirt(`small`,`I need a big shirt wear`)
// Q 38 Task 38 Ans
// function describe_city(city: string, country: string = "pakistan"): void {
//   console.log(`${city} is in ${country}`)
// }
// describe_city(`karachi`)
// describe_city(`france`, `europe`)
// describe_city(`lahore`, `punjab`)
// Q 39 Task 39 Ans
// function cityCountry(city: string, country: string): string{
//   return `${city}, ${country}`
// }
// let c1 = cityCountry(`lahore`, 'pakistan')
// let c2 = cityCountry(`tokyo`,'japan')
// let c3 = cityCountry(`paris`, 'france')
// console.log(c1)
// console.log(c2)
// console.log(c3)
// Q 40 Task 40 Ans
// function makeAlbum(artist: string, title: string) : {artist: string; title: string}{
//   const dictionaries = {
//     artist: artist.charAt(0).toUpperCase() + artist.slice(1),
//     title: artist.charAt(0).toUpperCase() + title.slice(1)
//   };
//    return dictionaries
//   }
// let album = makeAlbum("ali","light")
// console.log(album)
//  album = makeAlbum("bilal","Red wave")
// console.log(album)
//  album = makeAlbum("humza","seenbreez")
// console.log(album)
// Q 41 Task 41 Ans
// function show_magicians(magicians: string[]): void{
//   for(const magician of magicians) {
//     console.log(magician.charAt(0).toUpperCase() + magician.slice(1));
//   }
// }
// const magician: string[] = ["bilal","ali","humza"];
// show_magicians(magician)
// Q 42 Task 42 Ans
//  function show_magicians(magicians: string[]): void{
//   for(const magician of magicians) {
//     console.log(magician.charAt(0).toUpperCase() + magician.slice(1));
//   }}
// function make_great(magicians: string[]):void{
//   for (let i = 0; i < magicians.length; i++){
//     magicians[i] = magicians[i] + ` the great `
//   }
// }
// const magicians2: string[] = ["usman","haseeb","wajahat"];
// make_great(magicians2)
// show_magicians(magicians2)
// Q 43 Task 43 Ans
// function make_great2(magicians: string[]): string[]{
//   const greatMagicians: string[] = [];
//   for (let i = 0; i < magicians.length; i++) {
//   greatMagicians.push(magicians[i] + ` the great `)
// }
// }
// const magicians3: string[] = ["usman","haseeb","wajahat"];
// const greatMagicians2: string[] = make_great2(magicians3);
// show_magicians(magicians3);
// show_magicians(greatMagicians2);
// Q 44 Task 44 Ans 
// function sandwich(...items: string[]): void {
//   console.log("sandwich order:")
//   for (let i = 0; i < items.length; i++){
//     console.log(` _ ${items[i]}`)
//   }
// }
// console.log("enjoy your sanwich bilal khan")
//     sandwich(`capsicum` , `tomato`, `chicken`)
//     sandwich(`beef`,`cheese`)
//     sandwich(`garlic chicken`,`mayo sauce`)
// Q 45 Task 45 Ans
// type car ={
//   manufacture: string
//   model: string
//   [key: string]: any;
// }
// function createCar(manufacture: string, model: string, optional: Record<string, any>):car {
//   return{
//     manufacture,
//     model,
//     ...optional
//   }
// }
//   const mycar: car = createCar("toyota","corolla",{color: "silver" ,year: "2024"})
//   console.log(mycar)
