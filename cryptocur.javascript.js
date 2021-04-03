// newsapi
let newsApiKey="Ru8s6q0ueCP-5BqBnbs_8QvvfU0cn0_rKsnxBQhdKplRWMzx"

//getting the item from local storage 
function responseData (){
let question1 = localStorage.getItem('responseData')
}

let coinInfo1 = localStorage.getItem("coinInfo1")
fetch("https://api.coingecko.com/api/v3/coins/"+coinInfo1+"?localization=true&tickers=true&market_data=true&community_data=true&developer_data=true&sparkline=false")
    .then(function (response) {
        console.log(response)
        return response.json()
    })

    .then(function (data) {
        console.log(data)
        $(".longterm").append ('<div> <h3> Name: '+data.name+'</h3><h4> USD: '+data.market_data.ath.usd+'</h4><p>'+data.description.en+'</p></div>');
        // $('.longterm').text(data.name)
        // $('.longterm').text(data.description.en)
    });
//long term stable

let termCoin1 = localStorage.getItem('termCoin1')
let termCoin2 = localStorage.getItem('termCoin2')
let termCoin3 = localStorage.getItem('termCoin3')

fetch("https://api.coingecko.com/api/v3/coins/"+termCoin1+"?localization=true&tickers=true&market_data=true&community_data=true&developer_data=true&sparkline=false")
    .then(function (response) {
        console.log(response)
        return response.json()
    })

    .then(function (data) {
        console.log(data)
        $(".longterm").append ('<div> <h3> Name: '+data.name+'</h3><h4> USD: '+data.market_data.ath.usd+'</h4><p>'+data.description.en+'</p></div>');
        // $('.longterm').text(data.name)
        // $('.longterm').text(data.description.en)
    });



fetch("https://api.coingecko.com/api/v3/coins/"+termCoin2+"?localization=true&tickers=true&market_data=true&community_data=true&developer_data=true&sparkline=false")
    .then(function (response) {
        console.log(response)
        return response.json()
    })

    .then(function (data) {
        console.log(data)
        $(".longterm").append ('<div> <h3> Name: '+data.name+'</h3><h4> USD: '+data.market_data.ath.usd+'</h4><p>'+data.description.en+'</p></div>');
        // $('.longterm').text(data.name)
        // $('.longterm').text(data.description.en)
    });


fetch("https://api.coingecko.com/api/v3/coins/"+termCoin3+"?localization=true&tickers=true&market_data=true&community_data=true&developer_data=true&sparkline=false")
    .then(function (response) {
        console.log(response)
        return response.json()
    })

    .then(function (data) {
        console.log(data)
        $(".longterm").append ('<div> <h3> Name: '+data.name+'</h3><h4> USD: '+data.market_data.ath.usd+'</h4><p>'+data.description.en+'</p></div>');
        // $('.longterm').text(data.name)
        // $('.longterm').text(data.description.en)
    });


//News API starts here   
let coinNews1 = localStorage.getItem('coinNews1')
let coinNews2 = localStorage.getItem('coinNews2')
fetch("https://api.currentsapi.services/v1/search?keywords="+coinNews1+"&language=en&apiKey=" + newsApiKey)
    .then(function (response) {
        console.log(response)
        return response.json()
    })

    .then(function (data) {
        console.log(data)
        $(".news").append ('<div> <h3>'+coinNews1+' News</h3></div>');

        for (i=0; i < 2; i++){
            //using <a> tag to make article title clickable 
            $(".news").append ('<p> <a href="'+data.news[i].url+'">'+data.news[i].title+'</a></p>');
        }
        // $('#coinTitle').text(data.news[0].title)
        // $('#coinUrl').text(data.news[0].url)
    });

