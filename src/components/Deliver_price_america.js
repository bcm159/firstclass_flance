import React from 'react';

const Deliver_price_america = ({exchange_won,country,volume_up,america_deliver_price}) => {
    const usa_delivery = [
        {"pound":1,"price":8.5,"price2":8.41,"price3":8.33,"price4":8.24,"price5":8.16,"price6":8.07,"price7":6.00},
        {"pound":2,"price":10.2,"price2":10.1,"price3":10,"price4":9.89,"price5":9.79,"price6":9.69,"price7":7.50},
        {"pound":3,"price":11.9,"price2":11.78,"price3":11.66,"price4":11.54,"price5":11.42,"price6":11.31,"price7":9.00},
        {"pound":4,"price":13.6,"price2":13.46,"price3":13.33,"price4":13.19,"price5":13.06,"price6":12.92,"price7":10.50},
        {"pound":5,"price":15.3,"price2":15.15,"price3":14.99,"price4":14.84,"price5":14.69,"price6":14.54,"price7":12.00},
        {"pound":6,"price":17,"price2":16.83,"price3":16.66,"price4":16.49,"price5":16.32,"price6":16.15,"price7":13.50},
        {"pound":7,"price":18.7,"price2":18.51,"price3":18.33,"price4":18.14,"price5":17.95,"price6":17.76,"price7":15.00},
        {"pound":8,"price":20.4,"price2":20.2,"price3":19.99,"price4":19.79,"price5":19.58,"price6":19.38,"price7":16.50},
        {"pound":9,"price":22.1,"price2":21.88,"price3":21.66,"price4":21.44,"price5":21.22,"price6":21,"price7":18.00},
        {"pound":10,"price":23.8,"price2":23.56,"price3":23.32,"price4":23.09,"price5":22.85,"price6":22.61,"price7":19.50},
        {"pound":11,"price":25.5,"price2":25.25,"price3":24.99,"price4":24.74,"price5":24.48,"price6":24.23,"price7":21.00},
        {"pound":12,"price":27.2,"price2":26.93,"price3":26.66,"price4":26.38,"price5":26.11,"price6":25.84,"price7":22.50},
        {"pound":13,"price":28.9,"price2":28.61,"price3":28.32,"price4":28.03,"price5":27.74,"price6":27.46,"price7":24.00},
        {"pound":14,"price":30.6,"price2":30.29,"price3":29.99,"price4":29.68,"price5":29.38,"price6":29.07,"price7":25.50},
        {"pound":15,"price":32.3,"price2":31.98,"price3":31.65,"price4":31.33,"price5":31.01,"price6":30.68,"price7":27.00},
        {"pound":16,"price":34,"price2":33.66,"price3":33.32,"price4":32.98,"price5":32.64,"price6":32.3,"price7":28.50},
        {"pound":17,"price":35.7,"price2":35.34,"price3":34.99,"price4":34.63,"price5":34.27,"price6":33.92,"price7":30.00},
        {"pound":18,"price":37.4,"price2":37.03,"price3":36.65,"price4":36.28,"price5":35.9,"price6":35.53,"price7":31.50},
        {"pound":19,"price":39.1,"price2":38.71,"price3":38.32,"price4":37.93,"price5":37.54,"price6":37.14,"price7":33.00},
        {"pound":20,"price":40.8,"price2":40.39,"price3":39.98,"price4":39.58,"price5":39.17,"price6":38.76,"price7":34.50},
        {"pound":21,"price":42.5,"price2":42.08,"price3":41.65,"price4":41.23,"price5":40.8,"price6":40.38,"price7":36.00},
        {"pound":22,"price":44.2,"price2":43.76,"price3":43.32,"price4":42.87,"price5":42.43,"price6":41.99,"price7":37.50},
        {"pound":23,"price":45.9,"price2":45.44,"price3":44.98,"price4":44.52,"price5":44.06,"price6":43.61,"price7":39.00},
        {"pound":24,"price":47.6,"price2":47.12,"price3":46.65,"price4":46.17,"price5":45.7,"price6":45.22,"price7":40.50},
        {"pound":25,"price":49.3,"price2":48.81,"price3":48.31,"price4":47.82,"price5":47.33,"price6":46.83,"price7":42.00},
        {"pound":26,"price":51,"price2":50.49,"price3":49.98,"price4":49.47,"price5":48.96,"price6":48.45,"price7":43.50},
        {"pound":27,"price":52.7,"price2":52.17,"price3":51.65,"price4":51.12,"price5":50.59,"price6":50.06,"price7":45.00},
        {"pound":28,"price":54.4,"price2":53.86,"price3":53.31,"price4":52.77,"price5":52.22,"price6":51.68,"price7":46.50},
        {"pound":29,"price":56.1,"price2":55.54,"price3":54.98,"price4":54.42,"price5":53.86,"price6":53.3,"price7":48.00},
        {"pound":30,"price":57.8,"price2":57.22,"price3":56.64,"price4":56.07,"price5":55.49,"price6":54.91,"price7":49.50},
        {"pound":31,"price":59.5,"price2":58.91,"price3":58.31,"price4":57.72,"price5":57.12,"price6":56.53,"price7":51.00},
        {"pound":32,"price":61.2,"price2":60.59,"price3":59.98,"price4":59.36,"price5":58.75,"price6":58.14,"price7":52.50},
        {"pound":33,"price":62.9,"price2":62.27,"price3":61.64,"price4":61.01,"price5":60.38,"price6":59.76,"price7":54.00},
        {"pound":34,"price":64.6,"price2":63.95,"price3":63.31,"price4":62.66,"price5":62.02,"price6":61.37,"price7":55.50},
        {"pound":35,"price":66.3,"price2":65.64,"price3":64.97,"price4":64.31,"price5":63.65,"price6":62.98,"price7":57.00},
        {"pound":36,"price":68,"price2":67.32,"price3":66.64,"price4":65.96,"price5":65.28,"price6":64.6,"price7":58.50},
        {"pound":37,"price":69.7,"price2":69,"price3":68.31,"price4":67.61,"price5":66.91,"price6":66.21,"price7":60.00},
        {"pound":38,"price":71.4,"price2":70.69,"price3":69.97,"price4":69.26,"price5":68.54,"price6":67.83,"price7":61.50},
        {"pound":39,"price":73.1,"price2":72.37,"price3":71.64,"price4":70.91,"price5":70.18,"price6":69.44,"price7":63.00},
        {"pound":40,"price":74.8,"price2":74.05,"price3":73.3,"price4":72.56,"price5":71.81,"price6":71.06,"price7":64.50},
        {"pound":41,"price":76.5,"price2":75.74,"price3":74.97,"price4":74.21,"price5":73.44,"price6":72.68,"price7":66.00},
        {"pound":42,"price":78.2,"price2":77.42,"price3":76.64,"price4":75.85,"price5":75.07,"price6":74.29,"price7":67.50},
        {"pound":43,"price":79.9,"price2":79.1,"price3":78.3,"price4":77.5,"price5":76.7,"price6":75.9,"price7":69.00},
        {"pound":44,"price":81.6,"price2":80.78,"price3":79.97,"price4":79.15,"price5":78.34,"price6":77.52,"price7":70.50},
        {"pound":45,"price":83.3,"price2":82.47,"price3":81.63,"price4":80.8,"price5":79.97,"price6":79.13,"price7":72.00},
        {"pound":46,"price":85,"price2":84.15,"price3":83.3,"price4":82.45,"price5":81.6,"price6":80.75,"price7":73.50},
        {"pound":47,"price":86.7,"price2":85.83,"price3":84.97,"price4":84.1,"price5":83.23,"price6":82.37,"price7":75.00},
        {"pound":48,"price":88.4,"price2":87.52,"price3":86.63,"price4":85.75,"price5":84.86,"price6":83.98,"price7":76.50},
        {"pound":49,"price":90.1,"price2":89.2,"price3":88.3,"price4":87.4,"price5":86.5,"price6":85.59,"price7":78.00},
        {"pound":50,"price":91.8,"price2":90.88,"price3":89.96,"price4":89.05,"price5":88.13,"price6":87.21,"price7":79.50},
        {"pound":51,"price":93.5,"price2":92.57,"price3":91.63,"price4":90.7,"price5":89.76,"price6":88.83,"price7":81.00},
        {"pound":52,"price":95.2,"price2":94.25,"price3":93.3,"price4":92.34,"price5":91.39,"price6":90.44,"price7":82.50},
        {"pound":53,"price":96.9,"price2":95.93,"price3":94.96,"price4":93.99,"price5":93.02,"price6":92.06,"price7":84.00},
        {"pound":54,"price":98.6,"price2":97.61,"price3":96.63,"price4":95.64,"price5":94.66,"price6":93.67,"price7":85.50},
        {"pound":55,"price":100.3,"price2":99.3,"price3":98.29,"price4":97.29,"price5":96.29,"price6":95.29,"price7":87.00},
        {"pound":56,"price":102,"price2":100.98,"price3":99.96,"price4":98.94,"price5":97.92,"price6":96.9,"price7":88.50},
        {"pound":57,"price":103.7,"price2":102.66,"price3":101.63,"price4":100.59,"price5":99.55,"price6":98.52,"price7":90.00},
        {"pound":58,"price":105.4,"price2":104.35,"price3":103.29,"price4":102.24,"price5":101.18,"price6":100.13,"price7":91.50},
        {"pound":59,"price":107.1,"price2":106.03,"price3":104.96,"price4":103.89,"price5":102.82,"price6":101.74,"price7":93.00},
        {"pound":60,"price":108.8,"price2":107.71,"price3":106.62,"price4":105.54,"price5":104.45,"price6":103.36,"price7":94.50},
        {"pound":61,"price":110.5,"price2":109.4,"price3":108.29,"price4":107.19,"price5":106.08,"price6":104.98,"price7":96.00},
        {"pound":62,"price":112.2,"price2":111.08,"price3":109.96,"price4":108.83,"price5":107.71,"price6":106.59,"price7":97.50},
        {"pound":63,"price":113.9,"price2":112.76,"price3":111.62,"price4":110.48,"price5":109.34,"price6":108.2,"price7":99.00},
        {"pound":64,"price":115.6,"price2":114.44,"price3":113.29,"price4":112.13,"price5":110.98,"price6":109.82,"price7":100.50},
        {"pound":65,"price":117.3,"price2":116.13,"price3":114.95,"price4":113.78,"price5":112.61,"price6":111.43,"price7":102.00},
        {"pound":66,"price":119,"price2":117.81,"price3":116.62,"price4":115.43,"price5":114.24,"price6":113.05,"price7":103.50},
        {"pound":67,"price":120.7,"price2":119.49,"price3":118.29,"price4":117.08,"price5":115.87,"price6":114.67,"price7":105.00},
        {"pound":68,"price":122.4,"price2":121.18,"price3":119.95,"price4":118.73,"price5":117.5,"price6":116.28,"price7":106.50},
        {"pound":69,"price":124.1,"price2":122.86,"price3":121.62,"price4":120.38,"price5":119.14,"price6":117.9,"price7":108.00},
        {"pound":70,"price":125.8,"price2":124.54,"price3":123.28,"price4":122.03,"price5":120.77,"price6":119.51,"price7":109.50},
        {"pound":71,"price":127.5,"price2":126.23,"price3":124.95,"price4":123.68,"price5":122.4,"price6":121.13,"price7":111.00},
        {"pound":72,"price":129.2,"price2":127.91,"price3":126.62,"price4":125.32,"price5":124.03,"price6":122.74,"price7":112.50},
        {"pound":73,"price":130.9,"price2":129.59,"price3":128.28,"price4":126.97,"price5":125.66,"price6":124.35,"price7":114.00},
        {"pound":74,"price":132.6,"price2":131.27,"price3":129.95,"price4":128.62,"price5":127.3,"price6":125.97,"price7":115.50},
        {"pound":75,"price":134.3,"price2":132.96,"price3":131.61,"price4":130.27,"price5":128.93,"price6":127.59,"price7":117.00},
        {"pound":76,"price":136,"price2":134.64,"price3":133.28,"price4":131.92,"price5":130.56,"price6":129.2,"price7":118.50},
        {"pound":77,"price":137.7,"price2":136.32,"price3":134.95,"price4":133.57,"price5":132.19,"price6":130.81,"price7":120.00},
        {"pound":78,"price":139.4,"price2":138.01,"price3":136.61,"price4":135.22,"price5":133.82,"price6":132.43,"price7":121.50},
        {"pound":79,"price":141.1,"price2":139.69,"price3":138.28,"price4":136.87,"price5":135.46,"price6":134.04,"price7":123.00},
        {"pound":80,"price":142.8,"price2":141.37,"price3":139.94,"price4":138.52,"price5":137.09,"price6":135.66,"price7":124.50},
        {"pound":81,"price":144.5,"price2":143.06,"price3":141.61,"price4":140.17,"price5":138.72,"price6":137.28,"price7":126.00},
        {"pound":82,"price":146.2,"price2":144.74,"price3":143.28,"price4":141.81,"price5":140.35,"price6":138.89,"price7":127.50},
        {"pound":83,"price":147.9,"price2":146.42,"price3":144.94,"price4":143.46,"price5":141.98,"price6":140.51,"price7":129.00},
        {"pound":84,"price":149.6,"price2":148.1,"price3":146.61,"price4":145.11,"price5":143.62,"price6":142.12,"price7":130.50},
        {"pound":85,"price":151.3,"price2":149.79,"price3":148.27,"price4":146.76,"price5":145.25,"price6":143.73,"price7":132.00},
        {"pound":86,"price":153,"price2":151.47,"price3":149.94,"price4":148.41,"price5":146.88,"price6":145.35,"price7":133.50},
        {"pound":87,"price":154.7,"price2":153.15,"price3":151.61,"price4":150.06,"price5":148.51,"price6":146.96,"price7":135.00},
        {"pound":88,"price":156.4,"price2":154.84,"price3":153.27,"price4":151.71,"price5":150.14,"price6":148.58,"price7":136.50},
        {"pound":89,"price":158.1,"price2":156.52,"price3":154.94,"price4":153.36,"price5":151.78,"price6":150.2,"price7":138.00},
        {"pound":90,"price":159.8,"price2":158.2,"price3":156.6,"price4":155.01,"price5":153.41,"price6":151.81,"price7":139.50},
        {"pound":91,"price":161.5,"price2":159.89,"price3":158.27,"price4":156.66,"price5":155.04,"price6":153.42,"price7":141.00},
        {"pound":92,"price":163.2,"price2":161.57,"price3":159.94,"price4":158.3,"price5":156.67,"price6":155.04,"price7":142.50},
        {"pound":93,"price":164.9,"price2":163.25,"price3":161.6,"price4":159.95,"price5":158.3,"price6":156.66,"price7":144.00},
        {"pound":94,"price":166.6,"price2":164.93,"price3":163.27,"price4":161.6,"price5":159.94,"price6":158.27,"price7":145.50},
        {"pound":95,"price":168.3,"price2":166.62,"price3":164.93,"price4":163.25,"price5":161.57,"price6":159.88,"price7":147.00},
        {"pound":96,"price":170,"price2":168.3,"price3":166.6,"price4":164.9,"price5":163.2,"price6":161.5,"price7":148.50},
        {"pound":97,"price":171.7,"price2":169.98,"price3":168.27,"price4":166.55,"price5":164.83,"price6":163.11,"price7":150.00},
        {"pound":98,"price":173.4,"price2":171.67,"price3":169.93,"price4":168.2,"price5":166.46,"price6":164.73,"price7":151.50},
        {"pound":99,"price":175.1,"price2":173.35,"price3":171.6,"price4":169.85,"price5":168.1,"price6":166.35,"price7":153.00},
        {"pound":100,"price":176.8,"price2":175.03,"price3":173.26,"price4":171.5,"price5":169.73,"price6":167.96,"price7":154.50},
        {"pound":101,"price":178.5,"price2":176.72,"price3":174.93,"price4":173.15,"price5":171.36,"price6":169.58,"price7":156.00},
        {"pound":102,"price":180.2,"price2":178.4,"price3":176.6,"price4":174.79,"price5":172.99,"price6":171.19,"price7":157.50},
        {"pound":103,"price":181.9,"price2":180.08,"price3":178.26,"price4":176.44,"price5":174.62,"price6":172.81,"price7":159.00},
        {"pound":104,"price":183.6,"price2":181.76,"price3":179.93,"price4":178.09,"price5":176.26,"price6":174.42,"price7":160.50},
        {"pound":105,"price":185.3,"price2":183.45,"price3":181.59,"price4":179.74,"price5":177.89,"price6":176.03,"price7":162.00},
        {"pound":106,"price":187,"price2":185.13,"price3":183.26,"price4":181.39,"price5":179.52,"price6":177.65,"price7":163.50},
        {"pound":107,"price":188.7,"price2":186.81,"price3":184.93,"price4":183.04,"price5":181.15,"price6":179.27,"price7":165.00},
        {"pound":108,"price":190.4,"price2":188.5,"price3":186.59,"price4":184.69,"price5":182.78,"price6":180.88,"price7":166.50},
        {"pound":109,"price":192.1,"price2":190.18,"price3":188.26,"price4":186.34,"price5":184.42,"price6":182.49,"price7":168.00},
        {"pound":110,"price":193.8,"price2":191.86,"price3":189.92,"price4":187.99,"price5":186.05,"price6":184.11,"price7":169.50},
        {"pound":111,"price":195.5,"price2":193.55,"price3":191.59,"price4":189.64,"price5":187.68,"price6":185.73,"price7":171.00},
        {"pound":112,"price":197.2,"price2":195.23,"price3":193.26,"price4":191.28,"price5":189.31,"price6":187.34,"price7":172.50},
        {"pound":113,"price":198.9,"price2":196.91,"price3":194.92,"price4":192.93,"price5":190.94,"price6":188.96,"price7":174.00},
        {"pound":114,"price":200.6,"price2":198.59,"price3":196.59,"price4":194.58,"price5":192.58,"price6":190.57,"price7":175.50},
        {"pound":115,"price":202.3,"price2":200.28,"price3":198.25,"price4":196.23,"price5":194.21,"price6":192.18,"price7":177.00},
        {"pound":116,"price":204,"price2":201.96,"price3":199.92,"price4":197.88,"price5":195.84,"price6":193.8,"price7":178.50},
        {"pound":117,"price":205.7,"price2":203.64,"price3":201.59,"price4":199.53,"price5":197.47,"price6":195.42,"price7":180.00},
        {"pound":118,"price":207.4,"price2":205.33,"price3":203.25,"price4":201.18,"price5":199.1,"price6":197.03,"price7":181.50},
        {"pound":119,"price":209.1,"price2":207.01,"price3":204.92,"price4":202.83,"price5":200.74,"price6":198.65,"price7":183.00},
        {"pound":120,"price":210.8,"price2":208.69,"price3":206.58,"price4":204.48,"price5":202.37,"price6":200.26,"price7":184.50},
        {"pound":121,"price":212.5,"price2":210.38,"price3":208.25,"price4":206.13,"price5":204,"price6":201.88,"price7":186.00},
        {"pound":122,"price":214.2,"price2":212.06,"price3":209.92,"price4":207.77,"price5":205.63,"price6":203.49,"price7":187.50},
        {"pound":123,"price":215.9,"price2":213.74,"price3":211.58,"price4":209.42,"price5":207.26,"price6":205.11,"price7":189.00},
        {"pound":124,"price":217.6,"price2":215.42,"price3":213.25,"price4":211.07,"price5":208.9,"price6":206.72,"price7":190.50},
        {"pound":125,"price":219.3,"price2":217.11,"price3":214.91,"price4":212.72,"price5":210.53,"price6":208.33,"price7":192.00},
        {"pound":126,"price":221,"price2":218.79,"price3":216.58,"price4":214.37,"price5":212.16,"price6":209.95,"price7":193.50},
        {"pound":127,"price":222.7,"price2":220.47,"price3":218.25,"price4":216.02,"price5":213.79,"price6":211.56,"price7":195.00},
        {"pound":128,"price":224.4,"price2":222.16,"price3":219.91,"price4":217.67,"price5":215.42,"price6":213.18,"price7":196.50},
        {"pound":129,"price":226.1,"price2":223.84,"price3":221.58,"price4":219.32,"price5":217.06,"price6":214.8,"price7":198.00},
        {"pound":130,"price":227.8,"price2":225.52,"price3":223.24,"price4":220.97,"price5":218.69,"price6":216.41,"price7":199.50},
        {"pound":131,"price":229.5,"price2":227.21,"price3":224.91,"price4":222.61,"price5":220.32,"price6":218.02,"price7":201.00},
        {"pound":132,"price":231.2,"price2":228.89,"price3":226.58,"price4":224.26,"price5":221.95,"price6":219.64,"price7":202.50},
        {"pound":133,"price":232.9,"price2":230.57,"price3":228.24,"price4":225.91,"price5":223.58,"price6":221.26,"price7":204.00},
        {"pound":134,"price":234.6,"price2":232.25,"price3":229.91,"price4":227.56,"price5":225.22,"price6":222.87,"price7":205.50},
        {"pound":135,"price":236.3,"price2":233.94,"price3":231.57,"price4":229.21,"price5":226.85,"price6":224.49,"price7":207.00},
        {"pound":136,"price":238,"price2":235.62,"price3":233.24,"price4":230.86,"price5":228.48,"price6":226.1,"price7":208.50},
        {"pound":137,"price":239.7,"price2":237.3,"price3":234.91,"price4":232.51,"price5":230.11,"price6":227.71,"price7":210.00},
        {"pound":138,"price":241.4,"price2":238.99,"price3":236.57,"price4":234.16,"price5":231.74,"price6":229.33,"price7":211.50},
        {"pound":139,"price":243.1,"price2":240.67,"price3":238.24,"price4":235.81,"price5":233.38,"price6":230.95,"price7":213.00},
        {"pound":140,"price":244.8,"price2":242.35,"price3":239.9,"price4":237.46,"price5":235.01,"price6":232.56,"price7":214.50},
        {"pound":141,"price":246.5,"price2":244.04,"price3":241.57,"price4":239.11,"price5":236.64,"price6":234.18,"price7":216.00},
        {"pound":142,"price":248.2,"price2":245.72,"price3":243.24,"price4":240.75,"price5":238.27,"price6":235.79,"price7":217.50},
        {"pound":143,"price":249.9,"price2":247.4,"price3":244.9,"price4":242.4,"price5":239.9,"price6":237.41,"price7":219.00},
        {"pound":144,"price":251.6,"price2":249.08,"price3":246.57,"price4":244.05,"price5":241.54,"price6":239.02,"price7":220.50},
        {"pound":145,"price":253.3,"price2":250.77,"price3":248.23,"price4":245.7,"price5":243.17,"price6":240.63,"price7":222.00},
        {"pound":146,"price":255,"price2":252.45,"price3":249.9,"price4":247.35,"price5":244.8,"price6":242.25,"price7":223.50},
        {"pound":147,"price":256.7,"price2":254.13,"price3":251.57,"price4":249,"price5":246.43,"price6":243.86,"price7":225.00},
        {"pound":148,"price":258.4,"price2":255.82,"price3":253.23,"price4":250.65,"price5":248.06,"price6":245.48,"price7":226.50},
        {"pound":149,"price":260.1,"price2":257.5,"price3":254.9,"price4":252.3,"price5":249.7,"price6":247.1,"price7":228.00},
        {"pound":150,"price":261.8,"price2":259.18,"price3":256.56,"price4":253.95,"price5":251.33,"price6":248.71,"price7":229.50}
        ]

        const two_usa_delivery = [ 
            {"pound":1,"price":7.80},
            {"pound":2,"price":7.80},
            {"pound":3,"price":9.40},
            {"pound":4,"price":11.00},
            {"pound":5,"price":12.60},
            {"pound":6,"price":14.20},
            {"pound":7,"price":15.80},
            {"pound":8,"price":17.40},
            {"pound":9,"price":19.00},
            {"pound":10,"price":20.60},
            {"pound":11,"price":22.20},
            {"pound":12,"price":23.80},
            {"pound":13,"price":25.40},
            {"pound":14,"price":27.00},
            {"pound":15,"price":28.60},
            {"pound":16,"price":30.20},
            {"pound":17,"price":31.80},
            {"pound":18,"price":33.40},
            {"pound":19,"price":35.00},
            {"pound":20,"price":36.60},
            {"pound":21,"price":38.20},
            {"pound":22,"price":39.80},
            {"pound":23,"price":41.40},
            {"pound":24,"price":43.00},
            {"pound":25,"price":44.60},
            {"pound":26,"price":46.20},
            {"pound":27,"price":47.80},
            {"pound":28,"price":49.40},
            {"pound":29,"price":51.00},
            {"pound":30,"price":52.60},
            {"pound":31,"price":54.20},
            {"pound":32,"price":55.80},
            {"pound":33,"price":57.40},
            {"pound":34,"price":59.00},
            {"pound":35,"price":60.60},
            {"pound":36,"price":62.20},
            {"pound":37,"price":63.80},
            {"pound":38,"price":65.40},
            {"pound":39,"price":67.00},
            {"pound":40,"price":68.60},
            {"pound":41,"price":70.20},
            {"pound":42,"price":71.80},
            {"pound":43,"price":73.40},
            {"pound":44,"price":75.00},
            {"pound":45,"price":76.60},
            {"pound":46,"price":78.20},
            {"pound":47,"price":79.80},
            {"pound":48,"price":81.40},
            {"pound":49,"price":83.00},
            {"pound":50,"price":84.60},
            {"pound":51,"price":86.20},
            {"pound":52,"price":87.80},
            {"pound":53,"price":89.40},
            {"pound":54,"price":91.00},
            {"pound":55,"price":92.60},
            {"pound":56,"price":94.20},
            {"pound":57,"price":95.80},
            {"pound":58,"price":97.40},
            {"pound":59,"price":99.00},
            {"pound":60,"price":100.60},
            {"pound":61,"price":102.20},
            {"pound":62,"price":103.80},
            {"pound":63,"price":105.40},
            {"pound":64,"price":107.00},
            {"pound":65,"price":108.60},
            {"pound":66,"price":110.20},
            {"pound":67,"price":111.80},
            {"pound":68,"price":113.40},
            {"pound":69,"price":115.00},
            {"pound":70,"price":116.60},
            {"pound":71,"price":118.20},
            {"pound":72,"price":119.80},
            {"pound":73,"price":121.40},
            {"pound":74,"price":123.00},
            {"pound":75,"price":124.60},
            {"pound":76,"price":126.20},
            {"pound":77,"price":127.80},
            {"pound":78,"price":129.40},
            {"pound":79,"price":131.00},
            {"pound":80,"price":132.60},
            {"pound":81,"price":134.20},
            {"pound":82,"price":135.80},
            {"pound":83,"price":137.40},
            {"pound":84,"price":139.00},
            {"pound":85,"price":140.60},
            {"pound":86,"price":142.20},
            {"pound":87,"price":143.80},
            {"pound":88,"price":145.40},
            {"pound":89,"price":147.00},
            {"pound":90,"price":148.60},
            {"pound":91,"price":150.20},
            {"pound":92,"price":151.80},
            {"pound":93,"price":153.40},
            {"pound":94,"price":155.00},
            {"pound":95,"price":156.60},
            {"pound":96,"price":158.20},
            {"pound":97,"price":159.80},
            {"pound":98,"price":161.40},
            {"pound":99,"price":163.00},
            {"pound":100,"price":164.60}];
        let volume_deliv = 0;
    
        if(country === 'america'){ 
            for(let i of two_usa_delivery){
                if(i['pound'] ===  volume_up){                                     
                    //setGermany_volume_price(i['price']);
                    volume_deliv = i['price'];
                    
                }
            }
        }
        let volume_deliv_won = (parseFloat(volume_deliv) * exchange_won).toFixed(2);
        let volume_deliv_won_point = (volume_deliv_won).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        america_deliver_price(volume_deliv_won);
    
    return (    
        <div className={country === 'america' ? '':'simple_display'}>
            <p>{volume_deliv}달러</p>
            <p>{volume_deliv_won_point}원</p>
        </div>
    );
};

export default Deliver_price_america;