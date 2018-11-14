

function numbersSort(){

    const diapason = Math.floor(Math.random() * (60 - 40)) + 40;
    const result = Array.apply(null, Array(diapason)).map(function(){ 
        const number = Math.random() * 100 % 100;
        const fixed = number.toFixed(2);
        return Number(fixed);
        // Преобразовать в число
    })

    const sortNumbers = result.sort((a,b) => a - b);

    const filtredNumbers = sortNumbers.filter(number => number >= 30 );

    const summ = filtredNumbers.reduce((a,b) => a + b ,0);


    const valute = filtredNumbers.map(function(num){
        return `${num} ${`грн`}` ;//Использовать шаблоной строки
    })

    valute.forEach(function(price,index) { 
        
        const table = document.getElementById("myTable");
        const row = table.insertRow(index);
        const cell1 = row.insertCell(0);
        const cell2 = row.insertCell(1);

        cell1.innerHTML = index;
        cell2.innerHTML = price;
        const total = document.getElementById('total__summ');
        total.innerHTML = summ.toFixed(2); 

    });




   

}

numbersSort();




