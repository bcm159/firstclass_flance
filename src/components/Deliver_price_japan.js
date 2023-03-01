import React from 'react';

const Deliver_price_japan = ({exchange_jp_won,country,volume_up,japan_deliver_price}) => {
    const japan_table = [
        {"kg":0.5,"price":990,"price2":970,"price3":950,"price4":931,"price5":911,"price6":891},
{"kg":1.0,"price":1290,"price2":1264,"price3":1238,"price4":1213,"price5":1187,"price6":1161},
{"kg":1.5,"price":1540,"price2":1509,"price3":1478,"price4":1448,"price5":1417,"price6":1386},
{"kg":2.0,"price":1750,"price2":1715,"price3":1680,"price4":1645,"price5":1610,"price6":1575},
{"kg":2.5,"price":1950,"price2":1911,"price3":1872,"price4":1833,"price5":1794,"price6":1755},
{"kg":3.0,"price":2140,"price2":2097,"price3":2054,"price4":2012,"price5":1969,"price6":1926},
{"kg":3.5,"price":2320,"price2":2274,"price3":2227,"price4":2181,"price5":2134,"price6":2088},
{"kg":4.0,"price":2500,"price2":2450,"price3":2400,"price4":2350,"price5":2300,"price6":2250},
{"kg":4.5,"price":2690,"price2":2636,"price3":2582,"price4":2529,"price5":2475,"price6":2421},
{"kg":5.0,"price":2880,"price2":2822,"price3":2765,"price4":2707,"price5":2650,"price6":2592},
{"kg":5.5,"price":3070,"price2":3009,"price3":2947,"price4":2886,"price5":2824,"price6":2763},
{"kg":6.0,"price":3250,"price2":3185,"price3":3120,"price4":3055,"price5":2990,"price6":2925},
{"kg":6.5,"price":3430,"price2":3361,"price3":3293,"price4":3224,"price5":3156,"price6":3087},
{"kg":7.0,"price":3610,"price2":3538,"price3":3466,"price4":3393,"price5":3321,"price6":3249},
{"kg":7.5,"price":3790,"price2":3714,"price3":3638,"price4":3563,"price5":3487,"price6":3411},
{"kg":8.0,"price":3970,"price2":3891,"price3":3811,"price4":3732,"price5":3652,"price6":3573},
{"kg":8.5,"price":4150,"price2":4067,"price3":3984,"price4":3901,"price5":3818,"price6":3735},
{"kg":9.0,"price":4330,"price2":4243,"price3":4157,"price4":4070,"price5":3984,"price6":3897},
{"kg":9.5,"price":4510,"price2":4420,"price3":4330,"price4":4239,"price5":4149,"price6":4059},
{"kg":10.0,"price":4700,"price2":4606,"price3":4512,"price4":4418,"price5":4324,"price6":4230},
{"kg":10.5,"price":4890,"price2":4792,"price3":4694,"price4":4597,"price5":4499,"price6":4401},
{"kg":11.0,"price":5090,"price2":4988,"price3":4886,"price4":4785,"price5":4683,"price6":4581},
{"kg":11.5,"price":5280,"price2":5174,"price3":5069,"price4":4963,"price5":4858,"price6":4752},
{"kg":12.0,"price":5470,"price2":5361,"price3":5251,"price4":5142,"price5":5032,"price6":4923},
{"kg":12.5,"price":5650,"price2":5537,"price3":5424,"price4":5311,"price5":5198,"price6":5085},
{"kg":13.0,"price":5830,"price2":5713,"price3":5597,"price4":5480,"price5":5364,"price6":5247},
{"kg":13.5,"price":6010,"price2":5890,"price3":5770,"price4":5649,"price5":5529,"price6":5409},
{"kg":14.0,"price":6190,"price2":6066,"price3":5942,"price4":5819,"price5":5695,"price6":5571},
{"kg":14.5,"price":6370,"price2":6243,"price3":6115,"price4":5988,"price5":5860,"price6":5733},
{"kg":15.0,"price":6550,"price2":6419,"price3":6288,"price4":6157,"price5":6026,"price6":5895},
{"kg":15.5,"price":6730,"price2":6595,"price3":6461,"price4":6326,"price5":6192,"price6":6057},
{"kg":16.0,"price":6910,"price2":6772,"price3":6634,"price4":6495,"price5":6357,"price6":6219},
{"kg":16.5,"price":7100,"price2":6958,"price3":6816,"price4":6674,"price5":6532,"price6":6390},
{"kg":17.0,"price":7290,"price2":7144,"price3":6998,"price4":6853,"price5":6707,"price6":6561},
{"kg":17.5,"price":7480,"price2":7330,"price3":7181,"price4":7031,"price5":6882,"price6":6732},
{"kg":18.0,"price":7670,"price2":7517,"price3":7363,"price4":7210,"price5":7056,"price6":6903},
{"kg":18.5,"price":7860,"price2":7703,"price3":7546,"price4":7388,"price5":7231,"price6":7074},
{"kg":19.0,"price":8050,"price2":7889,"price3":7728,"price4":7567,"price5":7406,"price6":7245},
{"kg":19.5,"price":8230,"price2":8065,"price3":7901,"price4":7736,"price5":7572,"price6":7407},
{"kg":20.0,"price":8400,"price2":8232,"price3":8064,"price4":7896,"price5":7728,"price6":7560},
{"kg":20.5,"price":8570,"price2":8399,"price3":8227,"price4":8056,"price5":7884,"price6":7713},
{"kg":21.0,"price":8730,"price2":8555,"price3":8381,"price4":8206,"price5":8032,"price6":7857},
{"kg":21.5,"price":8890,"price2":8712,"price3":8534,"price4":8357,"price5":8179,"price6":8001},
{"kg":22.0,"price":9050,"price2":8869,"price3":8688,"price4":8507,"price5":8326,"price6":8145},
{"kg":22.5,"price":9210,"price2":9026,"price3":8842,"price4":8657,"price5":8473,"price6":8289},
{"kg":23.0,"price":9380,"price2":9192,"price3":9005,"price4":8817,"price5":8630,"price6":8442},
{"kg":23.5,"price":9540,"price2":9349,"price3":9158,"price4":8968,"price5":8777,"price6":8586},
{"kg":24.0,"price":9710,"price2":9516,"price3":9322,"price4":9127,"price5":8933,"price6":8739},
{"kg":24.5,"price":9880,"price2":9682,"price3":9485,"price4":9287,"price5":9090,"price6":8892},
{"kg":25.0,"price":10030,"price2":9829,"price3":9629,"price4":9428,"price5":9228,"price6":9027}
    ]

    let volume_deliv = "0";
    
        if(country === 'japan'){ 
            for(let i of japan_table){
                if(i['kg'] ===  volume_up){                                     
                    //setGermany_volume_price(i['price']);
                    volume_deliv = String(i['price']);
                }
            }
        }
        let volume_deliv_won = (parseFloat(volume_deliv) * exchange_jp_won).toFixed(2);
       
        let volume_deliv_won_point = (volume_deliv_won).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        japan_deliver_price(volume_deliv_won);
    
    return (
        <div className={country === 'japan' ? '':'simple_display'}>
            {/* <p>{volume_deliv_won}원</p> */}
            <p>{volume_deliv_won_point}원</p>
        </div>
    );
};

export default Deliver_price_japan;