'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
  //   countriesContainer.style.opacity = 1;
};

const renderCountry = function (data, className = '') {
  const html = `<article class="country ${className}">
       <img class="country__img" src="${data.flag}" />
      <div class="country__data">
        <h3 class="country__name">${data.name}</h3>
        <h4 class="country__region">${data.region}</h4>
        <p class="country__row"><span>👫</span>${(
          +data.population / 1000000
        ).toFixed(1)}</p>
        <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
        <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
      </div>
    </article>`;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  //   countriesContainer.style.opacity = 1;
};

///////////////////////////////////////

// ASYNCHRONOUS - coordinating behavior of a program over period of time

// synchronous code - code executed line by line
// asynchronous - the code will run in the background without preventing the main code from executing; code is executed after a task that runs in the background finishes
// need callback function like setTimeout/ interval, but callback function alone does not make the code asynchronous

// AJAX - ASYNCHRONOUS JAVASCRIPT AND XML - allows us to communicate with remote servers in an asynchronous way. With AJAX call we can request data from web server dynamically

// API - APPLICATION PROGRAMMING INTERFACE - piece of a software that can be used by another piece of a software, in order to allow applications to talk to each other
// types: DOM API, Geolocation API, Own Class API, ONLINE API(application running on a server, that receives request for data and sends data back as response)

// DOING AJAX CALL

// old one
// const getCountryData = country => {
//   const request = new XMLHttpRequest();
//   request.open(
//     'GET',
//     `https://countries-api-836d.onrender.com/countries/${country}`
//   );
//   request.send();

//   request.addEventListener('load', function () {
//     //   console.log(this.responseText);

//     const [data] = JSON.parse(this.responseText);
//     console.log(data);

//     const html = `<article class="country">
//   <img class="country__img" src="${data.flag}" />
//   <div class="country__data">
//     <h3 class="country__name">${data.name}</h3>
//     <h4 class="country__region">${data.region}</h4>
//     <p class="country__row"><span>👫</span>${(
//       +data.population / 1000000
//     ).toFixed(1)}</p>
//     <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
//     <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
//   </div>
// </article>`;
//     countriesContainer.insertAdjacentHTML('beforeend', html);
//     countriesContainer.style.opacity = 1;
//   });
// };

// getCountryData('portugal');

// CALLBACK HELL - when we have a lot of nested callbacks in order to execute asynchronous tasks in sequense

// const getCountryAndNeighbour = country => {
// AJAX call country 1
//   const request = new XMLHttpRequest();
//   request.open(
//     'GET',
//     `https://countries-api-836d.onrender.com/countries/${country}`
//   );
//   request.send();

//   request.addEventListener('load', function () {
//   console.log(this.responseText);
// const [data] = JSON.parse(this.responseText);
// console.log(data);

// Render country
// renderCountry(data);

// Get neighbour country
// const neighbour = data.borders?.[0];

// AJAX call country 2
//     const request2 = new XMLHttpRequest();
//     request2.open(
//       'GET',
//       `https://countries-api-836d.onrender.com/countries/alpha/${neighbour}`
//     );
//     request2.send();

//     request2.addEventListener('load', function () {
//       const data2 = JSON.parse(this.responseText);
//       console.log(data2);

//       renderCountry(data2, 'neighbour');
//     });
//   });
// };

// getCountryAndNeighbour('usa');

// PROMISES AND FETCH API

// how we used to do it
// const request = new XMLHttpRequest();
// request.open(
//   'GET',
//   `https://countries-api-836d.onrender.com/countries/${country}`
// );

// modern way

// PROMISE - is an object that is used as a placeholder for the future result of an asynchronous operation(less formal - a container for an asynchronously delivered value)(less formal - a container for a future value(response from AJAX call))
// By using promises we no longer need to rely on events and callbacks passed into asynchronous functions to handle asynchronous results
// Instead of nesting callbacks, we can CHAIN PROMISES for a sequence of asynchronous operations; ESCAPING CALLBACK HELL
// The promise lifecycle - pending(waiting before the future value is available) => async task => settled(asynchronous task has finished, settled only once => result > fulfilled(success! The value is now available) / rejected(an error happened))
// First build a promise (fetch api will do it) then consume a promise - to get a result

const request = fetch(
  'https://countries-api-836d.onrender.com/countries/portugal'
);
console.log(request);

const getJSON = function (url, errorMsg = 'Something went wrong') {
  fetch(url).then(response => {
    // throwing errors manually
    if (!response.ok) throw new Error(`${errorMsg} ${response.status}`);

    return response.json();
  });
};

// const getCountryData = function (country) {
// to handle fulfilled state use then
// flat chain of promises
//   fetch(`https://countries-api-836d.onrender.com/countries/${country}`)
//     .then(
//       response => {
//         console.log(response);
//       }
// to be able to read data from the body call json method(asynchronous function that will also return a new promise)
// we need to handle it with another then
//     )
//     .then(function (data) {
//       console.log(data);
//       renderCountry(data[0]);

//       const neighbour = data[0].borders?.[0];

// Country 2
//       fetch(
//         `https://countries-api-836d.onrender.com/countries/alpha/${neighbour}`
//       );
//     })
//     .then(response => response.json())
//     .then(data => renderCountry(data, 'neighbour'))
// for errors
//     .catch(err => {
//       console.error(`${err}`);
//       renderError(`Something went wrong ${err.message}`);
//     })
// no matter if promise is fulfilled or rejected this will always happen
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };

const getCountryData = function (country) {
  // Country 1
  getJSON(
    `https://countries-api-836d.onrender.com/countries/${country}`,
    'Country not found'
  )
    // to handle fulfilled state use then
    // flat chain of promises
    .then(function (data) {
      console.log(data);
      renderCountry(data[0]);

      const neighbour = data[0].borders?.[0];
      if (!neighbour) throw new Error('No neighbour found!');

      // Country 2
      getJSON(
        `https://countries-api-836d.onrender.com/countries/alpha/${neighbour}`,
        'Country not found'
      );
    })
    .then(data => renderCountry(data, 'neighbour'))
    // for errors
    .catch(err => {
      console.error(`${err}`);
      renderError(`Something went wrong ${err.message}`);
    })
    // no matter if promise is fulfilled or rejected this will always happen
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};
// HANDLING REJECTED PROMISES - happen only when user loose internet connection
btn.addEventListener('click', function () {
  getCountryData('usa');
});
