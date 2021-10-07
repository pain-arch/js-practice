// ** Write a JavaScript code to read temperature in centigrade and display a suitable message according to temperature state **



const  tempMessage = (temp) => {
    const temperature = temp;

    if(temperature < 0){
        console.log("Freezing weather");
    }
    if (temperature >= 0 && temperature <= 10 ) {
        console.log("Very Cold weather");
    }
    if (temperature > 10 && temperature <= 20 ) {
        console.log("Cold weather");
    }
    if (temperature > 20 && temperature <= 30 ) {
        console.log("Normal in Temp");
    }
    if (temperature > 30 && temperature <= 40 ) {
        console.log("Its Hot");
    }
    else if (temperature >= 40) {
        console.log("Its Very Hot");
    }
    else{
        console.log("input some valid value");
    }
};

tempMessage();   //<= input value here




// ** Write a JS code to check a triangle valid or not **


const validTriangle = (a, b, c) =>{

    const A = a ; const B = b ; const C = c ;

    if (A + B > C && B + C > A && C + A > B) {
        console.log("the triangle is valid");
    }
    else{
        console.log("the triangle is not valid");
    }
}; 

validTriangle();     //<= input value here




//** Take 2 amount first one is product buying price and second one is sell price. Now calculate profit or loss **


const profitORLoss = (buy, sell) =>{

    const profitorLoss = buy - sell ; 

    if (profitorLoss == 0) {
        console.log("you didn't got any profit or loss");
    }
    if (profitorLoss > 0) {
        console.log("Profit is ",profitorLoss,"tk");
    }
    if (profitorLoss < 0) {
        console.log("Loss is ",profitorLoss,"tk");
    }
    else{
        console.log("input some valid value");
    }
};

profitORLoss();      //<= input value here
