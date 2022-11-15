import React from 'react';

const Deliver_price_france = ({exchange_won,country,volume_up,france_deliver_price}) => {
    const france_table = [
        {"volume":0.5,"price":5.00},
        {"volume":1,"price":5.00},
        {"volume":1.5,"price":7.5}, 
        {"volume":2,"price":10},
        {"volume":2.5,"price":12.50}, 
        {"volume":3,"price":15.0},
        {"volume":3.5,"price":17.50}, 
        {"volume":4,"price":20.0},
        {"volume":4.5,"price":22.50}, 
        {"volume":5,"price":25.0},
        {"volume":5.5,"price":27.50}, 
        {"volume":6,"price":30.00},
        {"volume":6.5,"price":32.5}, 
        {"volume":7,"price":35.0},
        {"volume":7.5,"price":37.50}, 
        {"volume":8,"price":40.0},
        {"volume":8.5,"price":42.50}, 
        {"volume":9,"price":45.0},
        {"volume":9.5,"price":47.50},
        {"volume":10,"price":50.0},
        {"volume":10.5,"price":52.5}, 
        {"volume":11,"price":55.00},
        {"volume":11.5,"price":57.50}, 
        {"volume":12,"price":60.0},
        {"volume":12.5,"price":62.50}, 
        {"volume":13,"price":65.0},
        {"volume":13.5,"price":67.50}, 
        {"volume":14,"price":70.0},
        {"volume":14.5,"price":72.50},
        {"volume":15,"price":75.0},
        {"volume":15.5,"price":77.50}, 
        {"volume":16,"price":80.0},
        {"volume":16.5,"price":82.50}, 
        {"volume":17,"price":85.0},
        {"volume":17.5,"price":87.50}, 
        {"volume":18,"price":90.0},
        {"volume":18.5,"price":92.50}, 
        {"volume":19,"price":95.0},
        {"volume":19.5,"price":97.50}, 
        {"volume":20,"price":100.0}
        
        ]

        let volume_deliv = 0;
    
        if(country === 'france'){ 
            for(let i of france_table){
                if(i['volume'] ===  volume_up){
                    //setGermany_volume_price(i['price']);
                    volume_deliv = i['price'];
                    
                }
            }
        }
        let volume_deliv_won = (parseFloat(volume_deliv) * exchange_won).toFixed(2);
        let volume_deliv_won_point = (volume_deliv_won).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        france_deliver_price(volume_deliv_won);
    return (
        <div className={country === 'france' ? '':'simple_display'}>
            <p>{volume_deliv}</p>
            <p>{volume_deliv_won_point}원</p>
        </div>
    );
};

export default Deliver_price_france;