// Первое задание

// + Функции не нужен вызов с empty args на конце, для возвращения результата
// + Фильтрует NaN аргументы
// - Возвращаемый результат, при вызове функции, приходится приводить к number

function sum(a) {
  if (typeof a !== 'number') a = 0;
  let result = a;
  const carry = b => {
    if (typeof b !== 'number') b = 0;
    result += b;
    return carry;
  };
  carry.valueOf = function () {
    return result;
  };
  return carry;
}

console.log(+sum(2)(3)(5)); // => 10
console.log(+sum()(1)(undefined)(3)('asda')(7)()(10)(4)); // => 25
console.log(+sum()); // => 0
console.log(+sum(7)(-20)()); // => -13

// ----------------------------------------

// Второе задание

// Вариант 1

function toList1(str) {
  const result = {};
  let list = result;
  const array = str.split('.');

  array.forEach(item => {
    list = list[item] = {};
  });

  return result;
}

// Вариант 2

function toList2(str) {
  const array = str.split('.').reverse();
  return array.reduce((acum, item) => {
    return { [item]: acum };
  }, {});
}

console.log(toList2('one.two.three.four.five'));
console.log(toList2('one.two.three.four.five.six.seven'));
