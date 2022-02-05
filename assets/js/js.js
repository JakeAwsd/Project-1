function getApi() {
    var apiKey = 'YAMMU36XYW1SCRJTKPY8KM9T5EFJC82EX5'
    var apiUrl = 'https://api.etherscan.io/api?module=stats&action=ethprice&apikey=' + apiKey;

    fetch(apiUrl, {
    method: 'post', //GET is the default.
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
