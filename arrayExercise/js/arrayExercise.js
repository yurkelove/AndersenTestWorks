const a = [17, 1, 3, 0, 4, 9];
const b = [1, 3, 4, 5, 6, 7];


function difference(massOne, massTwo) {
  return massOne.reduce((result, current) => {
    if (!massTwo.includes(current)) {
      result.push(current);
    }
    return result;
  }, []);
}


console.log(difference(a, b));


function union(massOne, massTwo) {
  return massOne.reduce((result, current) => {
    if (massTwo.includes(current)) {
      result.push(current);
    }
    return result;
  }, []);
}

console.log(union(a, b));


const firstMass = ['1', '3', 'b', 4, 'k', 'd', 'p', 6, 6, 6, 6, 7, 31, 3, 5];
const secondMass = ['1', 3, 'b', 4, 'k', 'p', 6, 12, 5, 'o'];


function intersection(massOne, massTwo) {
  return massOne.reduce((result, current) => {
    if (massTwo.includes(current)) {
      result.push(current);
    }
    return result.filter((value, index, elem) => elem.indexOf(value) === index);
  }, []);
}


console.log(intersection(firstMass, secondMass));
