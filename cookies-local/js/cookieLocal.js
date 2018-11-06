function cookiesToLocalStorage(){

let	date = new Date;
date.setDate(date.getDate() + 1);
document.cookie = "User = Yura;"
document.cookie = "City = Chernihiv;"
document.cookie = "Date = " + date;

let cookies = {};
let cookieStr = document.cookie;

	
let cookieSplit = cookieStr.split('; ');
for(let i = 0; i < cookieSplit.length; i++ ){
	let cookieSingle = cookieSplit[i];
	let symbol = cookieSingle.indexOf("=");
	let nameCookie = cookieSingle.substring(0,symbol);
	let valueCookie = cookieSingle.substring(symbol+1);
	valueCookie = decodeURIComponent(valueCookie);
	let result = cookies[nameCookie] = valueCookie;
	console.log(result);
	
} 

localStorage.setItem("BioInfo",JSON.stringify(cookies)); // Получил в LocalStorage

return cookies;

}


cookiesToLocalStorage();



function localStorageToCookies(){

localStorage.setItem('Name','Yura');
localStorage.setItem('Age',23);

// Пример
let productPrice = {
	apple : 10 + ' грн',
	bread : 40 + ' грн',
	meat : 90 + ' грн',
	fish : 45 + ' грн'
};

localStorage.setItem("ProductPrice", JSON.stringify(productPrice));
let savedPrice = JSON.parse(localStorage.getItem("ProductPrice"));
console.log(savedPrice);

let localToString = JSON.parse(localStorage.getItem("BioInfo"));
console.log(localToString);


}

localStorageToCookies();


