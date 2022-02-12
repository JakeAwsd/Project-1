// var for URL + key
var localStorage = JSON.parse(localStorage.getItem("crypto"));
let randomCryptos = ['ADA', 'ATOM', 'BCH', 'BSV', 'BTC', 'BTG', 'COMP', 'DASH', 'DOGE', 'DOT', 'ETC', ];

var body = document.body;
var h1El = document.createElement("h1");
var imgEl = document.createElement("img");
var divEl = document.createElement("div");
var pEl = document.createElement("p");

var lastPriceEl = document.getElementById('lastPrice');
var bitcoinEl = document.getElementById('bitcoinEl');
var randomcryptoButton = document.getElementById('randocryptoBtn');
var coinNameEl = document.getElementById('coinName');

var nums = [1,2,3,4,5,6,7,8,9,10],
    ranNums = [],
    i = nums.length,
    j = 0;

while (i--) {
    j = Math.floor(Math.random() * (i+1));
    ranNums.push(nums[j]);
    nums.splice(j,1);
}

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

var getCryptoNames = function () {
    var indicesNames = 'https://apiv2.bitcoinaverage.com/info/indices/names';
    fetch(indicesNames)
        
        .then(function (response) {
        return response.json();
        })
        .then(function (data) {
            console.log(data)
            localStorage.setItem("crypto", JSON.stringify(data));
            
        })
        .catch(function (error) {
            console.log(error)
        });

    }

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
          var last = Math.round(result.last);
          var symbol = result.display_symbol;
          console.log(`this is last ${last}`);
          console.log(`this is symbol ${symbol}`);
          lastPriceEl.textContent = "$" + last + " USD";

      })
      .catch(error => console.log('error', error));
}

addCrypto();

//add local storage functionality. Save crypto to local storage.

randomcryptoButton.addEventListener("click", function(event) {
    event.preventDefault();

    getCryptoNames();
    localData();

});

function localData() {
    
    var cryptos = JSON.parse(localStorage.getItem("crypto"));
    var randomNum = Math.floor(Math.random() * 11);
    var myHeaders = new Headers();

    myHeaders.append("x-ba-key", "OGQxMjExMmQ1ZDE3NDM2YTlhNzU5NmM0OTI1MGRhM2I");

    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };

    fetch("https://apiv2.bitcoinaverage.com/indices/crypto/ticker/" + [randomCryptos[randomNum]] + "USDT", requestOptions)
      .then(response => response.json())
      .then(function(result){
        
          console.log(result);
          var last = Math.round(result.last);
          var symbol = result.display_symbol;
          console.log(`this is last ${last}`);
          console.log(`this is symbol ${symbol}`);
          if (cryptos !== null) {
            document.querySelector("#last-crypto").textContent = cryptos.crypto[randomCryptos[randomNum]] + " has a current price of: " + last + " USD"
          }
      })
      .catch(error => console.log('error', error));

}

console.log(randomCryptos[3]);
