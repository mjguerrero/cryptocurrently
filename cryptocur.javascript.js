
// newsapi
let newsApiKey="Ru8s6q0ueCP-5BqBnbs_8QvvfU0cn0_rKsnxBQhdKplRWMzx"

//getting the item from local storage
function responseData (){
let question1 = localStorage.getItem('responseData')
}



//long term stable
document.getElementById("cryptovalues")

fetch('https://api.coingecko.com/api/v3/coins/bitcoin?localization=true&tickers=true&market_data=true&community_data=true&developer_data=true&sparkline=false')
    .then(function (response) {
        console.log(response)
        return response.json()
    })

    .then(function (data) {
        console.log(data)
    });
document.getElementById("cryptovalues")

fetch('https://api.coingecko.com/api/v3/coins/dogecoin?localization=true&tickers=true&market_data=true&community_data=true&developer_data=true&sparkline=false')
    .then(function (response) {
        console.log(response)
        return response.json()
    })

    .then(function (data) {
        console.log(data)
    });
document.getElementById("cryptovalues")

fetch('https://api.coingecko.com/api/v3/coins/ethereum?localization=true&tickers=true&market_data=true&community_data=true&developer_data=true&sparkline=false')
    .then(function (response) {
        console.log(response)
        return response.json()
    })

    .then(function (data) {
        console.log(data)
    });
document.getElementById("cryptovalues")

fetch('https://api.coingecko.com/api/v3/coins/ripple?localization=true&tickers=true&market_data=true&community_data=true&developer_data=true&sparkline=false')
    .then(function (response) {
        console.log(response)
        return response.json()
    })

    .then(function (data) {
        console.log(data)
    });
document.getElementById("cryptovalues")


//cheapest coins

fetch('https://api.coingecko.com/api/v3/coins/cardano?localization=true&tickers=true&market_data=true&community_data=true&developer_data=true&sparkline=false')
    .then(function (response) {
        console.log(response)
        return response.json()
    })

    .then(function (data) {
        console.log(data)
    });
document.getElementById("cryptovalues")

fetch('https://api.coingecko.com/api/v3/coins/iota?localization=true&tickers=true&market_data=true&community_data=true&developer_data=true&sparkline=false')
    .then(function (response) {
        console.log(response)
        return response.json()
    })

    .then(function (data) {
        console.log(data)
    });
document.getElementById("cryptovalues")

//mid range coins
fetch('https://api.coingecko.com/api/v3/coins/bitcoin?localization=true&tickers=true&market_data=true&community_data=true&developer_data=true&sparkline=false')
    .then(function (response) {
        console.log(response)
        return response.json()
    })

    .then(function (data) {
        console.log(data)
    });
document.getElementById("cryptovalues")

fetch('https://api.coingecko.com/api/v3/coins/ripple?localization=true&tickers=true&market_data=true&community_data=true&developer_data=true&sparkline=false')
    .then(function (response) {
        console.log(response)
        return response.json()
    })

    .then(function (data) {
        console.log(data)
    });
document.getElementById("cryptovalues")

//currency exchange rates for crypto
fetch('https://api.coingecko.com/api/v3/exchange_rates')
    .then(function (response) {
        console.log(response)
        return response.json()
    })

    .then(function (data) {
        console.log(data)
    });
//top 7 trending coins from the most searched coins in the past 24 hours
fetch('https://api.coingecko.com/api/v3/search/trending')
    .then(function (response) {
        console.log(response)
        return response.json()
    })

    .then(function (data) {
        console.log(data)
    });


//News API starts here   
let coinName1 = localStorage.getItem('coinName1')
let coinName2 = localStorage.getItem('coinName2')
fetch("https://api.currentsapi.services/v1/search?keywords="+coinName1+"&language=en&apiKey=" + newsApiKey)
    .then(function (response) {
        console.log(response)
        return response.json()
    })

    .then(function (data) {
        $(".news").append ('<div> <h3>'+coinName1+' News</h3></div>');

        for (i=0; i < 2; i++){
            //using <a> tag to make article title clickable 
            $(".news").append ('<p> <a href="'+data.news[i].url+'">'+data.news[i].title+'</a></p>');
        }
        // $('#coinTitle').text(data.news[0].title)
        // $('#coinUrl').text(data.news[0].url)
    });

fetch("https://api.currentsapi.services/v1/search?keywords="+coinName2+"&language=en&apiKey=" + newsApiKey)
    .then(function (response) {
        console.log(response)
        return response.json()
    })

    .then(function (data) {
        $(".news").append ('<div> <h3>'+coinName2+' News</h3></div>');
        for (i=0; i < 2; i++){
            //using <a> tag to make article title clickable 
            $(".news").append ('<p> <a href="'+data.news[i].url+'">'+data.news[i].title+'</a></p>');
        }
        // $('#coinTitle').text(data.news[0].title)
        // $('#coinUrl').text(data.news[0].url)
    });


