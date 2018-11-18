

let batman = 'http://127.0.0.1:8080/urls/url_1.html';
let superman = 'http://127.0.0.1:8080/urls/url_2.html';
let vinniPuh = 'http://127.0.0.1:8080/urls/url_3.html';
let mikkyMouse = 'http://127.0.0.1:8080/urls/url_4.html';
let bugsBunny = 'http://127.0.0.1:8080/urls/url_5.html';

const siteUrls = [
  batman,
  superman,
  vinniPuh,
  mikkyMouse,
  bugsBunny
] 

const fetchUrls = url => fetch(url,{credentials: 'include'}).then(urls => urls.text());
const promise_all = siteUrls.map(fetchUrls);
const promise_race = siteUrls.map(fetchUrls);

const promiseAll = function(){
        const returnAll = Promise.all(promise_all).then(results => {
              console.log(results); 
        },error => {
                console.log(error)
        });
        return returnAll;
}

       
const promiseRace = function(){
        const returnRace = Promise.race(promise_race).then(results => {
                console.log( results );
        },error => {
                console.log(error);
        });
        return returnRace;      
}


const promiseChain = function(){
        let startChain = Promise.resolve();
        siteUrls.forEach(url => {
        startChain = startChain
        .then(() => fetch(url))
        .then(results => {
                console.log(results);
        },error => {
                console.log(error);
        })
        });
}



promiseAll() 
        .then(promiseRace)
        .then(promiseChain)
      


