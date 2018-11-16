

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

const promiseAll = siteUrls.map(fetchUrls);
  Promise.all(promiseAll).then(results => {
      console.log(results);
});

const promiseRace = siteUrls.map(fetchUrls);
  Promise.race(promiseRace).then(results => {
    console.log(results);
});

let startChain = Promise.resolve();
const results = [];

siteUrls.forEach(url => {
 startChain = startChain
  .then(() => fetch(url))
  .then(result => {
    results.push(result);
  });
});

startChain.then(() => {
  console.log(results);
})
