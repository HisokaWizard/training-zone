// closures
const counter = () => {
  let count = 0;
  return () => count++
}

const counterDog = counter();
const counterCat = counter();

for (let index = 0; index < 3; index++) {
  console.log(counterDog());
}

for (let index = 0; index < 5; index++) {
  console.log(counterCat());
}

//
// const promise = new Promise((resolve, reject) => {
//   const result = fetch('https://jsonplaceholder.typicode.com/todos/14');
//   result.then(result => {
//     if(result.status === 404) throw new Error(result.status);
//     resolve(result.json());
//   }).catch(error => {
//     reject(new Error('Bad request ' + error));
//   })
// });

// promise.then(result => {
//   console.log(result);
// }).catch(error => {
//   console.log(error);
// });

// const foo = async () => {
//   try {
//     const result = await promise;
//     console.log(result);
//     const result2 = await promise;
//     console.log(result2);
//     const result3 = await promise;
//     console.log(result3);
//     const result4 = await promise;
//     console.log(result4);
//   } catch (e) {
//     console.log(error);
//   }
// }

// foo();

const arr = [{
  price: 100,
  name: 'Petr',
}, {
  price: 123,
  name: 'Dima',
}, {
  price: 90,
  name: 'Vadim',
}]

const newArr = arr.sort((val1, val2) => {
  return val2.price - val1.price;
});

console.log(newArr);




