

function numbersSort(){

    const diapason = Math.floor(Math.random() * (60 - 40)) + 40;
    const result = Array.apply(null, Array(diapason)).map(function(){ 
        const numbers = Math.random() * 100 % 100;
        const fixed = numbers.toFixed(2);
        return Number(fixed);
        // Преобразовать в число
    })
    console.log(result);
    
    const sortNumbers = result.sort(function(a,b){
        return a-b;
    });

    // const filtredNumbers = result.filter(number => number >= 30 );
    const filtredNumbers = sortNumbers.filter(function(number){
     return number >= 30;
    });

    const summ = filtredNumbers.reduce(function(a,b){
        return a + b;
    },0);
    console.log('Сумма :' + ' ' + summ);

    const valute = filtredNumbers.map(function(num){
        return num + ' грн';
    })
    console.log(valute);


    Object.keys(valute).forEach(function eachKey(key) { 
        
        let table = document.getElementById("myTable");
        let row = table.insertRow(key);
        let cell1 = row.insertCell(0);
        let cell2 = row.insertCell(1);

        cell1.innerHTML = key;
        cell2.innerHTML = valute[key];
        let total = document.getElementById('total__summ');
        total.innerHTML = summ.toFixed(2); 

    });




   

}

numbersSort();




