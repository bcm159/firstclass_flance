import React from 'react';

const Deliver_price = ({exchange_won,country,volume_up,germany_deliver_price}) => {
    
    
    const germany_table = [
    {"volume":0.5,"price":9.00},
	{"volume":1,"price":10.00},
	{"volume":1.5,"price":12.10}, 
	{"volume":2,"price":14.20},
	{"volume":2.5,"price":16.30}, 
	{"volume":3,"price":18.40},
	{"volume":3.5,"price":20.50}, 
	{"volume":4,"price":22.60},
	{"volume":4.5,"price":24.70}, 
	{"volume":5,"price":26.80},
	{"volume":5.5,"price":28.90}, 
	{"volume":6,"price":31.00},
	{"volume":6.5,"price":33.10}, 
	{"volume":7,"price":35.20},
	{"volume":7.5,"price":37.30}, 
	{"volume":8,"price":39.40},
	{"volume":8.5,"price":41.50}, 
	{"volume":9,"price":43.60},
	{"volume":9.5,"price":45.70},
	{"volume":10,"price":47.80},
	{"volume":10.5,"price":49.90}, 
	{"volume":11,"price":52.00},
	{"volume":11.5,"price":54.10}, 
	{"volume":12,"price":56.20},
	{"volume":12.5,"price":58.30}, 
	{"volume":13,"price":60.40},
	{"volume":13.5,"price":62.50}, 
	{"volume":14,"price":64.60},
	{"volume":14.5,"price":66.70},
	{"volume":15,"price":68.80},
	{"volume":15.5,"price":70.90}, 
	{"volume":16,"price":73.00},
	{"volume":16.5,"price":75.10}, 
	{"volume":17,"price":77.20},
	{"volume":17.5,"price":79.30}, 
	{"volume":18,"price":81.40},
	{"volume":18.5,"price":83.50}, 
	{"volume":19,"price":85.60},
	{"volume":19.5,"price":87.70}, 
	{"volume":20,"price":89.80},
	{"volume":20.5,"price":91.90}, 
	{"volume":21,"price":94.00},
	{"volume":21.5,"price":96.10}, 
	{"volume":22,"price":98.20},
	{"volume":22.5,"price":100.30},
	{"volume":23,"price":102.40},
	{"volume":23.5,"price":104.50}, 
	{"volume":24,"price":106.60},
	{"volume":24.5,"price":108.70}, 
	{"volume":25,"price":110.80},
	{"volume":25.5,"price":112.90}, 
	{"volume":26,"price":115.00},
	{"volume":26.5,"price":117.10}, 
	{"volume":27,"price":119.20},
	{"volume":27.5,"price":121.30}, 
	{"volume":28,"price":123.40},
	{"volume":28.5,"price":125.50}, 
	{"volume":29,"price":127.60},
	{"volume":29.5,"price":129.70}, 
	{"volume":30,"price":131.80},
	{"volume":30.5,"price":133.90}, 
	{"volume":31,"price":136.00},
	{"volume":31.5,"price":138.10}, 
	{"volume":32,"price":140.20},
	{"volume":32.5,"price":142.30}, 
	{"volume":33,"price":144.40},
	{"volume":33.5,"price":146.50}, 
	{"volume":34,"price":148.60},
	{"volume":34.5,"price":150.70}, 
	{"volume":35,"price":152.80},
	{"volume":35.5,"price":154.90}, 
	{"volume":36,"price":157.00},
	{"volume":36.5,"price":159.10}, 
	{"volume":37,"price":161.20},
	{"volume":37.5,"price":163.30}, 
	{"volume":38,"price":165.40},
	{"volume":38.5,"price":167.50}, 
	{"volume":39,"price":169.60},
	{"volume":39.5,"price":171.70}, 
	{"volume":40,"price":173.80},
	{"volume":40.5,"price":175.90}, 
	{"volume":41,"price":178.00},
	{"volume":41.5,"price":180.10}, 
	{"volume":42,"price":182.20},
	{"volume":42.5,"price":184.30}, 
	{"volume":43,"price":186.40},
	{"volume":43.5,"price":188.50}, 
	{"volume":44,"price":190.60},
	{"volume":44.5,"price":192.70}, 
	{"volume":45,"price":194.80},
	{"volume":45.5,"price":196.90}, 
	{"volume":46,"price":199.00},
	{"volume":46.5,"price":201.10}, 
	{"volume":47,"price":203.20},
	{"volume":47.5,"price":205.30}, 
	{"volume":48,"price":207.40},
	{"volume":48.5,"price":209.50}, 
	{"volume":49,"price":211.60},
	{"volume":49.5,"price":213.70}, 
	{"volume":50,"price":215.80},
	{"volume":50.5,"price":217.90}, 
	{"volume":51,"price":220.00},
	{"volume":51.5,"price":222.10}, 
	{"volume":52,"price":224.20},
	{"volume":52.5,"price":226.30}, 
	{"volume":53,"price":228.40},
	{"volume":53.5,"price":230.50}, 
	{"volume":54,"price":232.60},
	{"volume":54.5,"price":234.70}, 
	{"volume":55,"price":236.80},
	{"volume":55.5,"price":238.90}, 
	{"volume":56,"price":241.00},
	{"volume":56.5,"price":243.10}, 
	{"volume":57,"price":245.20},
	{"volume":57.5,"price":247.30}, 
	{"volume":58,"price":249.40},
	{"volume":58.5,"price":251.50},
	{"volume":59,"price":253.60},
	{"volume":59.5,"price":255.70},
	{"volume":60,"price":257.80}
    
    ]
    let volume_deliv = 0;
    if(country === 'germany'){ 
        for(let i of germany_table){
            if(i['volume'] === volume_up){
                //setGermany_volume_price(i['price']);
                volume_deliv = i['price'];
                
            }
        }
    }
    // else if(country === 'america'){
    //     for(let i of usa_delivery){
    //         // if(i['pound'] )
    //     }
    // }

    let volume_deliv_won = (parseFloat(volume_deliv) * exchange_won).toFixed(2);
	let volume_deliv_won_point = (volume_deliv_won).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    germany_deliver_price(volume_deliv_won);
    return (
        <div className={country === 'germany' ? '':'simple_display'}>
            <p>{volume_deliv}</p>
            <p>{volume_deliv_won_point}원</p>
        </div>
    );
};

export default Deliver_price;