// var for URL + key

var lastPriceEl = document.getElementById('lastPrice');
var bitcoinEl = document.getElementById('bitcoinEl');
var randomcryptoButton = document.querySelector('#randocryptoBtn');

var getEtherApi = function () {
    var etcscanApiUrl = 'https://api.etherscan.io/api?module=stats&action=ethprice&apikey=' + apiKey;
    var apiKey = 'YAMMU36XYW1SCRJTKPY8KM9T5EFJC82EX5';
    fetch(etcscanApiUrl)
        
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

getEtherApi();

// var getbitcoinaverageApi = function () {
//     var bitcoinaverageUrl = 'https://apiv2.bitcoinaverage.com';

//     fetch(bitcoinaverageUrl, {
//         method: 'GET', //GET is the default.
//         credentials: 'same-origin', // include, *same-origin, omit
//         redirect: 'follow', // manual, *follow, error
//         headers: {
//             "x-ba-key": "OGQxMjExMmQ1ZDE3NDM2YTlhNzU5NmM0OTI1MGRhM2I",
//         }
//     })
//     .then(function (response) {
//     return response.json();
//     })
//     .then(function (data) {
//         console.log(data)
//             // const pricedata = data.result.ethusd
//             // document.getElementById('#price-container').textContent = pricedata + " USD";
//     })
//     .catch(function (error) {
//         console.log(error)
//     });
// }
// getbitcoinaverageApi();
var buttonClickHandler = function (){}

var addCrypto = function () {
    lastPriceEl.textContent = "";
    var myHeaders = new Headers();
    
    myHeaders.append("x-ba-key", "OGQxMjExMmQ1ZDE3NDM2YTlhNzU5NmM0OTI1MGRhM2I");
    
    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };
    
    fetch("https://apiv2.bitcoinaverage.com/indices/crypto/ticker/BTCUSDC", requestOptions)
      .then(response => response.json())
      .then(function(result){
        
          console.log(result);
          var last = result.last;
          var symbol = result.display_symbol;
          console.log(`this is last ${last}`);
          console.log(`this is symbol ${symbol}`);
          lastPriceEl.textContent = last;

      })
      .catch(error => console.log('error', error));
}

addCrypto();

// randomcryptoButton.addEventListener('click', buttonClickHandler);