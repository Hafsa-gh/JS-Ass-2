// Changing case


// TASK 1
// var inp = prompt("Enter Your Name");
// inp = inp.toUpperCase();
// alert(inp);


// TASK 2
// var inp = prompt("Enter Your Name");
// inp = inp.toLowerCase();
// alert(inp);


// Strings: measuring length and extracting parts

// TASK 1
// var inp = prompt("Enter Your Favourite Mobile Model");
// inp = inp.toUpperCase();
// document.write("My favourite mobile phone model is : " + inp.bold() + "<br/>" + "Length of string is : " + inp.length);

// TASK 2




// Strings: finding segments


// TASK 1
// var name = "Pakistani";
// document.write(name  + "<br/>" + "Index of <b> n </b> is : " + name.indexOf("n"));


// TASK 2
// var userName = prompt("Enter your user name");
// for (var index = 0; index < userName.length; index++) {
//     if (userName[index].charCodeAt() === 33 || userName[index].charCodeAt() === 44 || userName[index].charCodeAt() === 46 || userName[index].charCodeAt() === 64) {
//         alert(" Please Enter Valid User Name");
//     }
// }


// TASK 3
// var text = "The quick brown fox jumps over the lazy dog";
// var count = 0;
// for (var index = 0; index < text.length; index++) {
//     if (text.slice(index, index+3) === "The" || text.slice(index, index+3) === "the" ) {
//         count++;
//     }   
// }
// document.write("Text : " + text + "<br> There are " + count + " Occurences of word 'the'");


// Strings: finding a character at a location


// TASK 1
// var name = "Pakistani";
// document.write(name  + "<br/>" + "Index of <b> i </b> is : " + name.indexOf("i"));


// Strings: replacing characters

// TASK 1
// var name = "Hyderabad";
// var replaced =  name.replace("Hyder" , "Islam");
// document.write("City : " + name + "<br> After Replacement : "+ replaced );


// TASK 2
// var message = "Ali and Sami are best friends. They play cricket and football together.";
// var replaced = message.replace(/and/g , "&");
// document.write("Before Replacement : ".bold() + message + "<br/>" + "<br/>" + " After Replacement : ".bold() + replaced );



// Rounding numbers


// TASK 1
// var num = +prompt("Enter a positive Number");
// var sign = Math.sign(num);
// if (sign == 1 ){
//     document.write(" Number : " + num);
//     document.write(" <br> Round off Value : " + Math.round(num));
//     document.write(" <br> Floor Value : " + Math.floor(num));
//     document.write(" <br> Ceil Value : " + Math.ceil(num));
// }
// else{
//     document.write("Enter Positive Number Only");    
// }


// TASK 2
// var num=+prompt("Enter a negative Number");
// var sign = Math.sign(num);
// if (sign == -1){
//     document.write(" Number : " + num);
//     document.write(" <br> Round off Value : " +  Math.round(num));
//     document.write(" <br> Floor Value : " + Math.floor(num));
//     document.write(" <br> Ceil Value : " + Math.ceil(num));
// }
// else{
//     document.write("Enter Negative Number Only");

// }


// Generating random numbers


// TASK 1
// var rollDIce = Math.floor((Math.random()*6)+1);
// document.write("Random Dice Value  " +  rollDIce);




// TASK 2
// var rollDice = Math.floor((Math.random()*2)+1);
// if (rollDice === 2) {
//     document.write(rollDice+"<br> Random Coin Value  Heads ");
// }
// else{
//     document.write(rollDice+"<br> Random Coin Value  Tails ");
// }



// TASK 3
// var secNum = Math.floor((Math.random()*10)+1);
// var num = +prompt("Enter Number to guess");
// if (secNum === num) {
//     document.write("Congratulations You Win the Game");

// }
// else{
//     document.write("Try Again !");
// }




// Converting strings to integers and decimals


// TASK 1
// var weight = prompt("Enter Your Weight");
// var pars = parseFloat(weight);
// document.write("The weight of user is : " + pars + " kilograms");



// Converting strings to numbers, numbers to strings

// TASK 1
// var num = 472;
// var number = num.toString();
// document.write(typeOf.number);


// Controlling the length of decimals

// TASK 1 
// var percentage = 30 / 45 * 100;
// var length = percentage.toFixed(2);
// document.write(length)