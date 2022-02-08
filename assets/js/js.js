// var ethprice = document.querySelector('#price-container');
var apiUrl = 'https://api.etherscan.io/api?module=stats&action=ethprice&apikey=' + apiKey;
var apiKey = 'YAMMU36XYW1SCRJTKPY8KM9T5EFJC82EX5';

var getApi = function (eth) {

    fetch(apiUrl)
        
        .then(function (response) {
        return response.json();
        })
        .then(function (data) {
            console.log(data)
                const pricedata = data.result.ethusd
                document.getElementById('#price-container').textContent = pricedata + " USD";
        })
        .catch(function (error) {
            console.log(error)
        });

    }

getApi();

