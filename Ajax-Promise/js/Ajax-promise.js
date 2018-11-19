const fetch = require('isomorphic-fetch');
const batman = 'http://127.0.0.1:8080/urls/url_1.html';
const superman = 'http://127.0.0.1:8080/urls/url_2.html';
const vinniPuh = 'http://127.0.0.1:8080/urls/url_3.html';
const mikkyMouse = 'http://127.0.0.1:8080/urls/url_4.html';
const bugsBunny = 'http://127.0.0.1:8080/urls/url_5.html';

const siteUrls = [
  batman,
  superman,
  vinniPuh,
  mikkyMouse,
  bugsBunny,
];

const fetchUrls = url => fetch(url, { credentials: 'include' }).then(urls => urls.text());
const promise_all = siteUrls.map(fetchUrls);
const promise_race = siteUrls.map(fetchUrls);

const promiseAll = () => {
  const returnAll = Promise.all(promise_all).then((results) => {
    console.log(results) 
  }, (error) => {
    console.log(error);
  });
  return returnAll;
}

       
const promiseRace = () => {
  const returnRace = Promise.race(promise_race).then((results) => {
    console.log(results)
  }, (error) => {
    console.log(error);
  });
  return returnRace;      
};


const promiseChain = () => {
  let startChain = Promise.resolve();
  siteUrls.forEach((url) => {
    startChain = startChain
      .then(() => fetch(url))
      .then((results) => {
        console.log(results);
      }, (error) => {
        console.log(error);
      });
  });
};


const timer = () => {
  const promise = new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 5000);
  });
  return promise;
};

timer()
  .then(promiseAll)
  .then(timer)
  .then(promiseRace)
  .then(timer)
  .then(promiseChain);

