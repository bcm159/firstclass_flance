import React from 'react';

const Deliver_price_spain = ({exchange_won,country,volume_up,spain_deliver_price}) => {
    const spain_table = [
        {"kg":0.5,"price":15000,"price2":14400,"price3":14000},
        {"kg":1,"price":19200,"price2":18500,"price3":17900},
        {"kg":1.5,"price":23400,"price2":22500,"price3":21900},
        {"kg":2,"price":27600,"price2":26600,"price3":25800},
        {"kg":2.5,"price":31800,"price2":30600,"price3":29700},
        {"kg":3,"price":36000,"price2":34700,"price3":33700},
        {"kg":3.5,"price":40200,"price2":38700,"price3":37600},
        {"kg":4,"price":44400,"price2":42800,"price3":41500},
        {"kg":4.5,"price":48600,"price2":46800,"price3":45500},
        {"kg":5,"price":52800,"price2":50900,"price3":49400},
        {"kg":5.5,"price":57000,"price2":54900,"price3":53400},
        {"kg":6,"price":61100,"price2":58900,"price3":57200},
        {"kg":6.5,"price":65200,"price2":62800,"price3":61000},
        {"kg":7,"price":69300,"price2":66800,"price3":64900},
        {"kg":7.5,"price":73400,"price2":70700,"price3":68700},
        {"kg":8,"price":77500,"price2":74700,"price3":72500},
        {"kg":8.5,"price":81600,"price2":78600,"price3":76400},
        {"kg":9,"price":85700,"price2":82600,"price3":80200},
        {"kg":9.5,"price":89800,"price2":86500,"price3":84100},
        {"kg":10,"price":93900,"price2":90500,"price3":87900},
        {"kg":10.5,"price":98000,"price2":94400,"price3":91700},
        {"kg":11,"price":102100,"price2":98400,"price3":95600},
        {"kg":11.5,"price":106200,"price2":102300,"price3":99400},
        {"kg":12,"price":110300,"price2":106200,"price3":103200},
        {"kg":12.5,"price":114400,"price2":110200,"price3":107100},
        {"kg":13,"price":118500,"price2":114100,"price3":110900},
        {"kg":13.5,"price":122600,"price2":118100,"price3":114800},
        {"kg":14,"price":126700,"price2":122000,"price3":118600},
        {"kg":14.5,"price":130700,"price2":126000,"price3":122400},
        {"kg":15,"price":134800,"price2":129900,"price3":126300},
        {"kg":15.5,"price":138900,"price2":133900,"price3":130100},
        {"kg":16,"price":143000,"price2":137800,"price3":133900},
        {"kg":16.5,"price":147100,"price2":141800,"price3":137800},
        {"kg":17,"price":151200,"price2":145700,"price3":141600},
        {"kg":17.5,"price":155300,"price2":149700,"price3":145500},
        {"kg":18,"price":159400,"price2":153600,"price3":149300},
        {"kg":18.5,"price":163500,"price2":157600,"price3":153100},
        {"kg":19,"price":167600,"price2":161500,"price3":157000},
        {"kg":19.5,"price":171700,"price2":165500,"price3":160800},
        {"kg":20,"price":175800,"price2":169400,"price3":164600}
    ];

    let handling_fee = 2000;
    let volume_deliv = 0;
    let volume_deliv_won = '0';
    if(country === 'spain'){ 
        for(let i of spain_table){
            if(i['kg'] ===  volume_up){                                     
                //setGermany_volume_price(i['price']);
                volume_deliv_won = String(i['price'] + handling_fee);
                
            } 
        }
    }

    let volume_deliv_won_point = (volume_deliv_won).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    spain_deliver_price(volume_deliv_won);
    return (
        <div className={country === 'spain' ? '':'simple_display'}>
            {/* <p>{volume_deliv_won}원</p> */}
            <p>{volume_deliv_won_point}원</p>
        </div>
    );
};

export default Deliver_price_spain;