

function numbersSort() {
  const arrayLength = Math.floor(Math.random() * (60 - 40)) + 40;
  const result = [...Array(arrayLength)].map(() => {
    const number = Math.random() * 100;
    return Math.round(number * 100) / 100;
  });
  const sortNumbers = result.sort((a, b) => a - b);
  const filtredNumbers = sortNumbers.filter(number => number >= 30);
  const summ = filtredNumbers.reduce((a, b) => a + b, 0);
  const prices = filtredNumbers.map(num => `${num} грн`);
  prices.forEach((price, index) => {
    const table = document.getElementById('myTable');
    const row = table.insertRow(index);
    const cell1 = row.insertCell(0);
    const cell2 = row.insertCell(1);
    cell1.innerHTML = index;
    cell2.innerHTML = price;
    const total = document.getElementById('total__summ');
    total.innerHTML = Math.round(summ*100) / 100;
  });
}


numbersSort();

