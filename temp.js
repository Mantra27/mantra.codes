let data = [];
        let finalValue = 180;
        let k = 1;

        // n = 10000,
        // a = 180,
        // b = 1.1;

        // for (var k = 0; k < n; k++) {
        //     data.push({x: 0.01 * k, y: a * Math.pow(b, -0.006 * k)});
        // }

        // n = 10000

        while(finalValue >= 1){
            finalValue = 100 * Math.pow(0.99996, k)
            data.push({y: finalValue+80});
            k++;
        };

        let counter = 0;
        
        while(data[counter] != undefined){
            console.log(data[counter]);
            counter++
        }
        console.log(data.length)