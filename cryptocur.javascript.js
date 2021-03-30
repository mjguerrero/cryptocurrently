//long term - stable
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

fetch('https://api.coingecko.com/api/v3/coins/litecoin?localization=true&tickers=true&market_data=true&community_data=true&developer_data=true&sparkline=false')
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

fetch('https://api.coingecko.com/api/v3/coins/stellar?localization=true&tickers=true&market_data=true&community_data=true&developer_data=true&sparkline=false')
    .then(function (response) {
        console.log(response)
        return response.json()
    })

    .then(function (data) {
        console.log(data)
    });
document.getElementById("cryptovalues")


fetch('https://api.coingecko.com/api/v3/coins/tron?localization=true&tickers=true&market_data=true&community_data=true&developer_data=true&sparkline=false')
    .then(function (response) {
        console.log(response)
        return response.json()
    })

    .then(function (data) {
        console.log(data)
    });
document.getElementById("cryptovalues")

fetch('https://api.coingecko.com/api/v3/coins/verge?localization=true&tickers=true&market_data=true&community_data=true&developer_data=true&sparkline=false')
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
