const a = [17, 1, 3, 0, 4, 9];
const b = [1, 3, 4, 5, 6, 7];

function first(massOne, massTwo) {
  const newMass = [];
  massOne.forEach((num) => {
    if (massTwo.indexOf(num) === -1) {
      newMass.push(num);
    }
  });
  return newMass;
}

console.log(first(a, b));


function second(massOne, massTwo) {
  const newMass = [];
  massOne.forEach((num) => {
    if (massTwo.indexOf(num) !== -1) {
      newMass.push(num);
    }
  });
  return newMass;
}

console.log(second(a, b));


const firstMass = ['1','3','b',4,'k','d','p',6,6,6];
const secondMass = ['1',3,'b',4,'k','p',6,12,5,'o'];


function third(massOne, massTwo) {
  const newMass = [];
  massOne.forEach((num) => {
    if (massTwo.indexOf(num) !== -1) {
      newMass.push(num);
    }
  });
  // value - значение элемента массива. index - числовой индекс, elem - требуемый элемент
  const unique = newMass.filter((value,index,elem) => elem.indexOf(value) === index);
  // Set позволяют вам сохранять уникальные значения любого типа
  let uniqueItems = Array.from(new Set(newMass));
  console.log(uniqueItems);

  return unique;
}

console.log(third(firstMass, secondMass));

