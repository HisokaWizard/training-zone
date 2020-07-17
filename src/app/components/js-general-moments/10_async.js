const first = () => console.log('First');
const second = () => console.log('Second');
const third = () => console.log('Third');

// Synchronic calls
first();
second();
third();

// Asynchronous calls: В JS один поток, но при этом есть возможность работать в асинхронном режиме за счет концепции event loop (событийный цикл)
// Event Loop - бесконечный цикл, который просматривает наличие методов в callback queue (очередь отложенных вызовов), и запускает их на выполнение
// после отработки синхронных вызовов из callstack, разумеется все отложенные вызовы также итерационно кладутся и выполняются в callstack.
// Отложенные функции попадаю в callback queue через web apis. В Wep Apis хранятся методы promise & callback, которые ожидают события (клика, движженияб чего-то что их будет инициировать)
// после чего (инициации) метод пперемещается в callback queue и callstack,  такой цикл работает для каждого открытого браурезного окна
first();
setTimeout(second, 0);
third();

var tt = 10;
console.log(tt);

// код промиса запускается автоматически, а resolve и reject это callbacks которые вызываются при позитивном или негативном результатах 
// (resolve, reject) => {} executor function has autorun
// результат может быть отложенный, но в этом и смысл промисов, возращать результат после того как он будт через resolve & reject
// Исполнитель(executor) по итогу переводит promise в одно из двух состояний: state: "fulfilled" + result: value | state: "rejected" + result: error
const promise = new Promise((resolve, reject) => {   
  tt = 20;
  console.log(tt);
  resolve();
  setTimeout(() => {
    tt = 30;
    console.log(tt);
  }, 0);
}).then(() => {
  tt = 50;
  console.log(tt);
});

promise.then(() => {
  tt = 60;
  console.log(tt);
})

tt = 40;
console.log(tt);

// 10
// 20
// 40
// 50 // micro tasks
// 60 // micro tasks
// 30 // macro tasks


var pp = 100;
console.log(pp);
const promise2 = new Promise((resolve, reject) => {
  pp = 200;
  console.log(pp);
  let sum = 0;
  for (let i = 0; i < 1000000; i++) {
    sum += i;
  }
  pp = 300;
  console.log(pp);
  resolve(sum);
});

pp = 400;
console.log(pp);

promise2.then(value => console.log(value));

pp = 500;
console.log(pp);

// 100
// 200
// 300
// 400
// 500
// big value
