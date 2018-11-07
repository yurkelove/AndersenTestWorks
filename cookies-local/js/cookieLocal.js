
	const date = new Date;
	date.setDate(date.getDate() + 1);
	document.cookie = "User = Yura;"
	document.cookie = "Gender = Male;"
	document.cookie = "City = Chernihiv;"
	document.cookie = "Date = " + date;
	document.cookie = "Company = Andersen;"
	
	
	
	

function cookiesToLocalStorage(){

    const cookies = {};
	const cookieStr = document.cookie;

	
	let cookieSplit = cookieStr.split('; ');
	for(let i = 0; i < cookieSplit.length; i++ ){
		let cookieSingle = cookieSplit[i];
		let symbol = cookieSingle.indexOf("=");
		let keyCookie = cookieSingle.substring(0,symbol);
		let valueCookie = cookieSingle.substring(symbol+1);
		valueCookie = decodeURIComponent(valueCookie);
		cookies[keyCookie] = valueCookie;
		localStorage.setItem(keyCookie,valueCookie);
		if(localStorage.getItem(keyCookie) !== undefined && localStorage.getItem(keyCookie) !== null){
			localStorage.setItem(keyCookie,valueCookie);
		}


	}
 

	return cookies;

}

cookiesToLocalStorage();



function localStorageToCookies(){
	const len = localStorage.length;
	for(let i = 0 ; i < len; i++){
		const key = localStorage.key(i);
		const name = localStorage.getItem(key);
		document.cookie = `${key} = ${name}`;
		if(key !== "" && name !== ""){
			document.cookie = `${key} = ${name}`;
		}
		if(localStorage.getItem(key) !== undefined && localStorage.getItem(key) !== null && localStorage.getItem(key) !== ""){
			document.cookie = `${key} = ${name}`;
		}
	}
}

localStorageToCookies();



console.log(document.cookie);



