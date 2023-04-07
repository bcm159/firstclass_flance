import React from 'react';

const Deliver_price_veit = ({exchange_won,country,volume_up,vietnam_deliver_price}) => {
    const viet_btob=[
        {"kg":0.5,"price":11330},
        {"kg":1,"price":13430},
        {"kg":1.5,"price":16370},
        {"kg":2,"price":19200},
        {"kg":2.5,"price":24450},
        {"kg":3,"price":28130},
        {"kg":3.5,"price":31280},
        {"kg":4,"price":34430},
        {"kg":4.5,"price":37580},
        {"kg":5,"price":40730},
        {"kg":5.5,"price":43880},
        {"kg":6,"price":47030},
        {"kg":6.5,"price":50180},
        {"kg":7,"price":52280},
        {"kg":7.5,"price":55430},
        {"kg":8,"price":58580},
        {"kg":8.5,"price":61730},
        {"kg":9,"price":64880},
        {"kg":9.5,"price":68030},
        {"kg":10,"price":71180},
        {"kg":10.5,"price":74330},
        {"kg":11,"price":77480},
        {"kg":11.5,"price":80630},
        {"kg":12,"price":83780},
        {"kg":12.5,"price":86930},
        {"kg":13,"price":90080},
        {"kg":13.5,"price":93230},
        {"kg":14,"price":96380},
        {"kg":14.5,"price":99530},
        {"kg":15,"price":102680},
        {"kg":15.5,"price":105830},
        {"kg":16,"price":108980},
        {"kg":16.5,"price":112130},
        {"kg":17,"price":115280},
        {"kg":17.5,"price":118430},
        {"kg":18,"price":121580},
        {"kg":18.5,"price":124730},
        {"kg":19,"price":127880},
        {"kg":19.5,"price":131030},
        {"kg":20,"price":134180},
        {"kg":20.5,"price":137330},
        {"kg":21,"price":140480},
        {"kg":21.5,"price":143630},
        {"kg":22,"price":146780},
        {"kg":22.5,"price":146780},
        {"kg":23,"price":153080},
        {"kg":23.5,"price":156230},
        {"kg":24,"price":159380},
        {"kg":24.5,"price":162530},
        {"kg":25,"price":165680},
        {"kg":25.5,"price":168830},
        {"kg":26,"price":171980},
        {"kg":26.5,"price":175130},
        {"kg":27,"price":178280},
        {"kg":27.5,"price":181430},
        {"kg":28,"price":184580},
        {"kg":28.5,"price":187730},
        {"kg":29,"price":190880},
        {"kg":29.5,"price":194030},
        {"kg":30,"price":197180}
    ]

    let volume_deliv_won = '0';
    if(country === 'vietnam'){ 
        for(let i of viet_btob){
            if(i['kg'] ===  volume_up){                                     
                //setGermany_volume_price(i['price']);
                volume_deliv_won = String(i['price']);
                
            } 
        }
    }
    let volume_deliv_won_point = (volume_deliv_won).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    vietnam_deliver_price(volume_deliv_won);
    return (
        <div className={country === 'vietnam' ? '':'simple_display'}>
            {/* <p>{volume_deliv_won}원</p> */}
            <p>{volume_deliv_won_point}원</p>
        </div>
    );
};

export default Deliver_price_veit;