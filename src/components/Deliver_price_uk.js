import React from 'react';

const Deliver_price_uk = ({exchange_won,country,volume_up,uk_deliver_price,input_price_sum}) => {

    const uk_table=[
        {"kg":0.5,"price":10700,"price2":10400,"price3":9900},
        {"kg":1,"price":13900,"price2":13500,"price3":12800},
        {"kg":1.5,"price":16900,"price2":16400,"price3":15600},
        {"kg":2,"price":20000,"price2":19500,"price3":18500},
        {"kg":2.5,"price":23100,"price2":22400,"price3":21300},
        {"kg":3,"price":26200,"price2":25500,"price3":24200},
        {"kg":3.5,"price":29200,"price2":28400,"price3":27000},
        {"kg":4,"price":32300,"price2":31400,"price3":29900},
        {"kg":4.5,"price":35400,"price2":34400,"price3":32700},
        {"kg":5,"price":38700,"price2":37100,"price3":35500},
        {"kg":5.5,"price":42900,"price2":41100,"price3":39300},
        {"kg":6,"price":45900,"price2":44000,"price3":42100},
        {"kg":6.5,"price":48900,"price2":46800,"price3":44800},
        {"kg":7,"price":51900,"price2":49700,"price3":47600},
        {"kg":7.5,"price":54900,"price2":52600,"price3":50300},
        {"kg":8,"price":57900,"price2":55500,"price3":53100},
        {"kg":8.5,"price":60900,"price2":58300,"price3":55800},
        {"kg":9,"price":63900,"price2":61200,"price3":58600},
        {"kg":9.5,"price":66900,"price2":64100,"price3":61300},
        {"kg":10,"price":69900,"price2":67000,"price3":64100},
        {"kg":10.5,"price":76500,"price2":73300,"price3":70100},
        {"kg":11,"price":79500,"price2":76200,"price3":72900},
        {"kg":11.5,"price":82500,"price2":79000,"price3":75600},
        {"kg":12,"price":85500,"price2":81900,"price3":78400},
        {"kg":12.5,"price":88500,"price2":84800,"price3":81100},
        {"kg":13,"price":91500,"price2":87700,"price3":83900},
        {"kg":13.5,"price":94500,"price2":90500,"price3":86600},
        {"kg":14,"price":97500,"price2":93400,"price3":89400},
        {"kg":14.5,"price":100500,"price2":96300,"price3":92100},
        {"kg":15,"price":103500,"price2":99200,"price3":94900},
        {"kg":15.5,"price":106500,"price2":102000,"price3":97600},
        {"kg":16,"price":109500,"price2":104900,"price3":100400},
        {"kg":16.5,"price":112500,"price2":107800,"price3":103100},
        {"kg":17,"price":115500,"price2":110700,"price3":105900},
        {"kg":17.5,"price":118500,"price2":113500,"price3":108600},
        {"kg":18,"price":121500,"price2":116400,"price3":111400},
        {"kg":18.5,"price":124500,"price2":119300,"price3":114100},
        {"kg":19,"price":127500,"price2":122200,"price3":116900},
        {"kg":19.5,"price":130500,"price2":125000,"price3":119600},
        {"kg":20,"price":133500,"price2":127900,"price3":122400}
    ]
    const uk_urolife_table = [
        {"kg":0.5,"price":9450},
        {"kg":1.0,"price":11970},
        {"kg":1.5,"price":14500},
        {"kg":2.0,"price":16920},
        {"kg":2.5,"price":20340},
        {"kg":3.0,"price":23760},
        {"kg":3.5,"price":27120},
        {"kg":4.0,"price":30090},
        {"kg":4.5,"price":33260},
        {"kg":5.0,"price":35930},
        {"kg":6.0,"price":43160},
        {"kg":7.0,"price":49400},
        {"kg":8.0,"price":55630},
        {"kg":9.0,"price":61870},
        {"kg":10.0,"price":68700},
        {"kg":11.0,"price":77020},
        {"kg":12.0,"price":83350},
        {"kg":13.0,"price":89690},
        {"kg":14.0,"price":96030},
        {"kg":15.0,"price":102360},
        {"kg":16.0,"price":108700},
        {"kg":17.0,"price":115030},
        {"kg":18.0,"price":121370},
        {"kg":19.0,"price":127710},
        {"kg":20.0,"price":134040},
        {"kg":21.0,"price":142360},
        {"kg":22.0,"price":148690},
        {"kg":23.0,"price":155030},
        {"kg":24.0,"price":161370},
        {"kg":25.0,"price":167700},
        {"kg":26.0,"price":174040},
        {"kg":27.0,"price":180370},
        {"kg":28.0,"price":186710},
        {"kg":29.0,"price":193050},
        {"kg":30.0,"price":199380}
    ]
    let uk_fee = 0;
    if(input_price_sum < 30){
        uk_fee = 4000;
    } else if(input_price_sum <50 && input_price_sum >= 30){
        uk_fee = 6000;
    } else{
        uk_fee = 8000;
    }

    let volume_deliv = 0;
    let volume_deliv_won = '0';
    if(country === 'uk'){ 
        for(let i of uk_urolife_table){
            if(i['kg'] ===  volume_up){    
                volume_deliv = i['price'];    
                volume_deliv_won = String(i['price'] + uk_fee);
            } 
        }
    }
    
    //let volume_deliv_won = (parseFloat(volume_deliv) * exchange_won).toFixed(2);
    let volume_deliv_won_point = (volume_deliv_won).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    uk_deliver_price(volume_deliv_won);
    return (
        <div className={country === 'uk' ? '':'simple_display'}>
            {/* <p>{volume_deliv_won}원</p> */}
            <p>{volume_deliv_won_point}원 (배송비 : {volume_deliv}, 수수료 : {uk_fee})</p>
        </div>
    );
};

export default Deliver_price_uk;