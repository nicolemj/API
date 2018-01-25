$(() => {


    $('#button1').click(() => {  
        $.ajax({
            method: 'GET',
            url: "https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,XRP,ZRX,TNT,GVT,PPT,LTC&tsyms=USD"
        }).done((res) => { 
       
         console.log(res)
        let btc = res.BTC.USD
        let ltc = res.LTC.USD
        let xrp = res.XRP.USD
        let zrx = res.ZRX.USD  

        let gvt = res.GVT.USD 
        let ppt = res.PPT.USD   

        console.log(btc)
        console.log(ltc)
        let btcContainer=(`<td>${btc}</td>`)
        $('#btcContainer').append(btcContainer)
        let ltcContainer=(`<td>${ltc}</td>`)
        $('#ltcContainer').append(ltcContainer)
        let  xrpContainer=(`<td>${xrp}</td>`)  
        $('#xrpContainer').append(xrpContainer)
        let zrxContainer=(`<td>${zrx}</td>`)
        $('#zrxContainer').append(zrxContainer)
        let gvtContainer=(`<td>${gvt}</td>`)  
        $('#gvtContainer').append(gvtContainer)
        let pptContainer=(`<td>${ppt}</td>`)
        $('#pptContainer').append(pptContainer)
        })

        })

        
$(document).ready(function(){
    $("#button1").click(function(){
      $('#style').toggle();
    });
});
       
    })


 
   