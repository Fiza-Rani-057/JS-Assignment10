//  String for numbers 
//  Question 1

 var firstname = prompt("Enter your first name");
 var lastname = prompt("Enter your last name");
 var fullName = firstname + " " + lastname;

    document.write( "<h1>" + "Question 1" + "<br>" + "<br>" + "</h1>");

   document.write("Hello" + " " + fullName  +"<br>" + "<br>");

//  Question 2
 
 var favoritePhone = prompt("What is your favorite Mobile phone Model?");


   document.write( "<h1>" +"Question 2" + "<br>" + "<br>" + "</h1>");

 document.write("My Favorite Mobile phone Model is:"+ favoritePhone +
  "<br>");
  document.write("Length of string is:"  +  favoritePhone.length + "<br>" 
    + "<br>");

//   Question 3

 var word = "Pakistani";
 
 document.write( "<h1>" +"Question 3"  +"<br>" + "<br>" + "</h1>");

 document.write("String:" + " " +  word  + "<br>");
 document.write("Index of String 'n':"+ word.indexOf( "n")+ "<br>" + "<br>");

//   Question 4

 var word2 = "Hello world";

 document.write( "<h1>" + "Question 4" + "<br>" + "<br>" + "</h1>");

 document.write("String:" + " " + word2 + "<br>");
 document.write("Last Index of 'l' is:"  + word2.lastIndexOf("l") 
  +"<br>" + "<br>");

// Question 5

 var word3 = "Pakistani";

 document.write( "<h1>" + "Question 5" + "<br>" + "<br>" + "</h1>");

document.write("String:" + word2 + "<br>");
document.write("Character at Index 3:" + word3.charAt(3) + "<br>" + "<br>" );

//  Question 6

 var firstname = prompt("Enter your first name");
 var lastname = prompt("Enter your last name");
 var fullName = firstname.concat(" " , lastname);

    document.write( "<h1>" + "Question 6" + "<br>" + "<br>" + "</h1>");

   document.write("Hello" + " " + fullName  +"<br>" + "<br>");

// Question 7

var city = "Hyderabad";
var newcity = city.replace("Hyder", "Islam");

 document.write("<h1>" + "Question 7" + "<br>" + "<br>" + "</h1>");

 document.write("City:" + city  +"<br>");
 document.write("After Replacemet: " + newcity + "<br>" + "<br>");

//  Question 8

 var message = "Ali and Sami are best freinds. They play cricket and football together.";
 var newMessage = message.replaceAll("and", "&");

 document.write("<h1>" + "Question 8" + "<br>" + "<br>" + "</h1>");

 document.write("Original Msssage: " + message + "<br>" );
 document.write("Updated Message " + newMessage  + "<br>" + "<br>");

//  Question 9

 var strValue = "472";
 var numValue = Number(strValue);

 document.write("<h1>" + "Question 9" + "<br>" + "<br>" + "</h1>");

 document.write("Value:" + strValue + "<br>");
 document.write("Type: " + typeof(strValue) + "<br>");
 document.write("Value: " + numValue + "<br>");
 document.write("Type: "+  typeof(numValue) + "<br>" + "<br>" );

//  Question 10

 var  userInput = prompt("What is your Farvorite dry fruit?");
 var  upperCase = userInput.toUpperCase();

 document.write("<h1>" + "Question 10" + "<br>" + "<br>" + "</h1>");

 document.write("User Input:" + userInput + "<br>");
 document.write("Upper Case:" + upperCase + "<br>" + "<br>");
 
//    Question 11 

 var inputUser = prompt("What is your favorite programming language?");
 var titleCase = inputUser.charAt(0).toUpperCase() + inputUser.slice(1);

  document.write("<h1>" + "Question 11" + "<br>" + "<br>" + "</h1>");

  document.write("User Input: " + inputUser + "<br>");
  document.write("Title Case:" + titleCase  + "<br>" + "<br>" );

//  Question 12
 
 var num = 35.36;
 var newNum = num.toString();
 var result = newNum.replace(".", "");

 document.write("<h1>" + "Question 12" + "<br>" + "<br>" + "</h1>");
 document.write("Number:" + num + "<br>");
 document.write("Result:" + result + "<br>" + "<br>");

//  Question 13
  
 document.write("<h1>" + "Question 13" + "<br>" + "<br>" + "</h1>");

 var inputFromUser = prompt("Enter your Email");
   var validName = true;

  for(var  i = 0; i < inputFromUser.length; i++){
      var code = inputFromUser.charCodeAt(i);

      if(code === 33 || code === 44 || code === 46 || code ===64 ){
        validName = false;
      }
  }
      if(validName){
        document.write("Valid Email:" +  inputFromUser);

      }
      else{
        document.write("Please Enter a valid Email");
      }

    //   Question 14

  var bakery = ["cake", "apple pie", "cookie", "chips", "patties"];
   var items = prompt( "Welcome to our bakery.What do you want to order?");
     items = items.toLowerCase()

     var found = false;
    
   document.write("<h1>" + "Question 14" + "<br>" + "<br>" + "</h1>");

  for(i = 0;i< bakery.length; i++){
  if(bakery[i]===items){
    found = true;
   document.write(items + "is available at index" + i + "in our bakery");
  }

 }
  if(!found){
    document.write("We are sorry ." + items + "is not available in our bakery");
  }
  
// Question 15

  document.write("<h1>" + "Question 15" + "<br>" + "<br>" + "</h1>");

 var password = prompt("Enter your Password");
 var letter = false;
 var number = false;

 for(i = 0; i < password.length; i++ ){

    var code = password.charCodeAt(i);

    if((code >= 65 && code <= 90) || (code >= 97 && code <= 122)){
    letter = true;
    }
    
    if(code >= 48 && code <= 57){
        number = true;
    }
}
 
if(
    password.length < 6 ||
    password.charCodeAt(0)  >= 48 && password.charCodeAt(0) <= 57 ||
    !letter ||
    !number
) {
    document.write("Please Enter a valid password");
}
 else{
    document.write("Valid Password");
 }
  
//  Question 16

  document.write("<h1>" + "Question 16" + "<br>" + "<br>" + "</h1>");

 var university = "University of Karachi";
  var array = university.split("");

 for(var i =0; i < array.length; i++){
    document.write(array[i] + "<br>");
}
 
// Question 17
 
document.write("<h1>" + "Question 17" + "<br>" + "<br>" + "</h1>");

 var countryName = "Spain";
 var newName  = countryName[countryName.length - 1]

 document.write("User Input:"+ countryName + "<br>");
 document.write("Last Character of input:" + newName);

// Question 18 

document.write("<h1>" + "Question 18" + "<br>" + "<br>" + "</h1>");

 var theText = "The quick brown fox jumps over the lazy dog";
  theText = theText.toLowerCase();

 var textWords = theText.split(" ");

 var totalWords = 0;

 for(var i = 0; i< textWords.length; i++){
    if(textWords[i]== "the"){
        totalWords++;
    }
 }
 document.write("The word  'the' appears in the text" + totalWords + "times");
