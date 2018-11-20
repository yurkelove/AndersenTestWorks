
const date = new Date;
date.setDate(date.getDate() + 1);
document.cookie = 'User = Yura;';
document.cookie = 'Gender = Male;';
document.cookie = 'City = Chernihiv;';
document.cookie = 'Date = ' + date;
document.cookie = 'Company = Andersen;';
document.cookie = 'Greet = Hello,today is monday';


function cookiesToLocalStorage(){

  const cookieStr = document.cookie;
  const cookieSplit = cookieStr.split('; ');
  for (let i = 0; i < cookieSplit.length; i++) {
    const cookieSingle = cookieSplit[i];
    const symbol = cookieSingle.indexOf('=');
    const keyCookie = cookieSingle.substring(0, symbol);
    let valueCookie = cookieSingle.substring(symbol + 1);
    valueCookie = decodeURIComponent(valueCookie);
    const lGet = localStorage.getItem(keyCookie);
    if (lGet === undefined || lGet === null) {
      localStorage.setItem(keyCookie, valueCookie);
    }
  }
}

cookiesToLocalStorage();


function getCookie(name) {
  let matches = document.cookie.match(new RegExp(
    '(?:^|; )' + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + '=([^;]*)'
  ));
  return matches ? decodeURIComponent(matches[1]) : undefined;
}


function localStorageToCookies() {
  const len = localStorage.length;
  for (let i = 0; i < len; i++) {
    const key = localStorage.key(i);
    const name = localStorage.getItem(key);
    if (getCookie(key) !== undefined) {
      document.cookie = `${key} = ${name}`;
    }
  }
}

localStorageToCookies();
