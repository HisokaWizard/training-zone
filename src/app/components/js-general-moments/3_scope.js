// Scope - это область видимости, не контекст, т е та область, которая ограничена либо модулем - функцией, либо {}
// Глобальный scope позволяет определять переменные видимые во всех функциях

function fA() {
  const a = 10;
  function fB() {
    const b = 20;
    function fC() {
      const c = 30;
      console.log('c', c, 'b', b, 'a', a);
    }
    fC();
    console.log('b', b, 'a', a);
  }
  fB();
  console.log('a', a);
}

fA();