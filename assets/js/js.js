var priceEl = document.querySelector('#2');

function getApi() {
    var apiUrl = 'https://api.etherscan.io/api?module=stats&action=ethprice&apikey=' + apiKey;
    
    fetch(apiUrl, {
    method: 'GET', //GET is the default.
    credentials: 'same-origin', // include, *same-origin, omit
    redirect: 'follow', // manual, *follow, error
        })
        .then(function (response) {
        return response.json();
        })
        .then(function (data) {
            console.log(data)
        })
        .catch(function (error) {
            console.log(error)
        });
    }
getApi();
