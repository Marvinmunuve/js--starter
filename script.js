
/*let js = 'amazing';
if (js ==='amazing') alert ('Javascript is FUN');
40 + 8 + 23-10;
console.log (40 + 8 + 23-10);
console.log ("jonas");

let firstName ="jonas";
console.log(firstName);
console.log(firstName);
console.log(firstName);

let myFirstJob="Teacher";
let mySecondJob ="Programmer"
console.log(myFirstJob);




let javascriptIsFun = true;
console.log(javascriptIsFun);
//boolean
console.log(typeof true);
//boolean
console.log(typeof javascriptIsFun);
// 23 is number
console.log(typeof 23);
// jonas is a string  you must always quote a string
console.log(typeof "jonas");

//dynamic typing
javascriptIsFun = 'YES!'; 
console.log(typeof javascriptIsFun);// this now changed to a string
*/
//example of math operator (-)
/*const now = 2030
const ageMarvin = now - 1997;
const ageNdanu = now -1999;
console.log(ageMarvin, ageNdanu);

console.log(ageMarvin * 2, ageNdanu / 10, 2 ** 3);

const firstName = 'MARVIN';
const lastName = 'MWENDWA';
//'' is used to add space
console.log(firstName + ' ' + lastName);

//assignment operator
let x = 10 + 5; // the console should show 15
x += 10; //x = x + 10  answer should show 25
x  *= 4; // x = 25*4 =100 
x ++;
console.log(x);

//comparison operators
console.log(ageMarvin > ageNdanu); // >, <, >=, >=.
console.log(ageNdanu >= 18);
const isFullAge = ageNdanu >= 18;
console.log(now - 1997 > now -1999)*/

//opertor presedence

/*const massMark = 78;
const heightMark =  1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark= massMark / heightMark ** 2;
const BMIJohn = massJohn / (heightJohn * heightJohn);
const markHigherBMI = BMIMark > BMIJohn;
console.log(BMIMark, BMIJohn, markHigherBMI);*/


/*const firstName = 'jonas';
const job = 'teacher';
const birthYear = 1991;
const year = 2037;

const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(jonasNew);*/



//if else statement -controls structure
/*const age = 15;

if(age >=18) {
    console.log( `sarah can start driving license 🚗`);
} else {
    const yearsLeft = 18 - age;
    console.log(`sarah is too young. wait another ${yearsLeft} years`);
}


const birthYear = 2001;
let century;
if (birthYear <= 2000){
    century =20;
} else{
     century = 21;
}
console.log (century);

// coding challenge 2 
//else if control structure

const massMark = 78;
const heightMark =  1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark= massMark / heightMark ** 2;
const BMIJohn = massJohn / (heightJohn * heightJohn);
const markHigherBMI = BMIMark > BMIJohn;

console.log(BMIMark, BMIJohn,);

if (BMIMark >= BMIJohn)
{ 
  console.log(`Mark's BMI is higher than John.s!`);
} else {
    console.log(`John's BMI is higher than Mark's!`);
}

//type  conversion
const inputYear = '1991';
console.log(Number(inputYear ));
console.log(Number(inputYear) + 18);

//type    coercion
console.log( `I am ` + 23 + `years old` );
console.log ('23'+`10`+ 3);

//example
let n = `1` + 1; //11
n = n -1; // 11-1 
console.log(n); //ans =10

//truthy and falsy values
// 5 falsy value are 0, '' ,undefined, null, 
let height = 19;

if (height) {
    console.log (`YAY! Height id defined`);
} else  {
    console.log (`Height is UNDEFINED`)
}*/


//EQUALITY OPERATORS
  
/*const favourite = Number( prompt("what's your favourite number?"));
if (favourite === 286{
    console.log('cool! 26 is an amazing number!')
} else if (favourite === 9 ){ 
    console.log('9 is also a cool number')
}
    else  {console.log (`Number is not 26 or 9`);}


    if(favourite === 26) console.log(`why not 23`);

    //boolean logic, - AND,OR & NOT operators.*/

    /*const hasDriversLicense = true // A
    const hasGoodVision = false // B
    console.log(hasDriversLicense && hasGoodVision);
    console.log(hasDriversLicense || hasGoodVision);*/

const scoreDolphins = (96 + 108 + 89) /3;
const scoreKoalas = (88 + 91 + 110) /3;
console.log (scoreDolphins, scoreKoalas);

if (scoreDolphins > scoreKoalas) {
    console.log(`dolphins win the trophy 🏆`);

} else if (scoreKoalas > scoreDolphins) {console.log (`Koalas win the trophy🏆`);


} else if (scoreDolphins === scoreKoalas){
    console.log(`Both win the trophy🏆`);
}
