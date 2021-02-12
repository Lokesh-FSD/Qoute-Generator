
function Greeting() {
    let Greeting;
    let today = new Date();
    let hourNow = today.getHours();

    if (hourNow >= 20) {
        Greeting = "lets start our night with a New Qoute";
    }
    else if (hourNow >= 16) {
        Greeting = "lets start our Evening with a New Qoute";
    }
    else if (hourNow >= 12) {
        Greeting = "lets start our Afternoon with a New Qoute";
    }
    else if (hourNow >= 0) {
        Greeting = "lets start our Morning with a New Qoute";
    }
    else {
        Greeting = "day";
    }
    return Greeting;
}
document.getElementById("greeting").innerHTML = Greeting();

let quotes = [
    [["- Walt Disney"], ['The Way to Get Started Is To Quit Talking And Begin Doing.']],
    [["- Winston Churchill"], ['The Pessimist Sees Difficulty In Every Opportunity. The Optimist Sees Opportunity In Every Difficulty.']],
    [["- Will Rogers"], ['Don’t Let Yesterday Take Up Too Much Of Today.']],
    [["- Unknown"], ['You Learn More From Failure Than From Success. Don’t Let It Stop You. Failure Builds Character.']],
    [["- Vince Lombardi"], ['It’s Not Whether You Get Knocked Down, It’s Whether You Get Up.']],
    [["- Mahatma Gandhi"], ['Live as if you were to die tomorrow. Learn as if you were to live forever']],
    [["- Albert Einstein"], ['Strive not to be a success, but rather to be of value.']],
    [["- Florence Nightingale"], ['I attribute my success to this: I never gave or took any excuse.']],
    [["- Vince Lombardi"], ['It’s Not Whether You Get Knocked Down, It’s Whether You Get Up.']],
    [["- jaye shetty"], ['The pain you are feeling today will be the strength you will feel tommorow']],
];

let colorArr = [
    ["#be9e2a"],
    ["#cc8d8d"],
    ["#c06c84"],
    ["#1da1a3"],
    ["#6778c5"],
    ["#f67280"],
    ["#6a78b8"],
    ["#ff847c"],
    ["#46b995"],
    ["#1891ac"]
];

//change quote when button is clicked
function generate() {
    let number = Math.floor(Math.random() * quotes.length);

    document.getElementById("quote").innerHTML = quotes[number][1];
    document.getElementById("author").innerHTML = quotes[number][0];

    //change color of container button and quotes when button is clicked

    document.body.style.backgroundColor = colorArr[number];
    document.querySelector("#btn").style.backgroundColor = colorArr[number];
    document.querySelector("#author").style.color = colorArr[number];
    document.querySelector("#quote").style.color = colorArr[number];

}
