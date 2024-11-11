// 1-misol

// Array.prototype.last = function() {
//     if (this.length === 0) {
//       return -1;
//     } else {
//       return this[this.length - 1];
//     }
//   };

//   let nums1 = JSON.parse('[null, {}, 3]');
//   let nums2 = JSON.parse('[]');

//   console.log(nums1.last());
//   console.log(nums2.last());

//   2-misol

// function createCounter(n) {
//     return function() {
//       return n++;
//     };
//   }

//   const counter1 = createCounter(10);
//   console.log(counter1());
//   console.log(counter1());
//   console.log(counter1());

//   const counter2 = createCounter(-2);
//   console.log(counter2());
//   console.log(counter2());
//   console.log(counter2());
//   console.log(counter2());
//   console.log(counter2());


//   3-misol

// function sleep(millis) {
//     return new Promise(resolve => setTimeout(resolve, millis));
// }

// let t = Date.now();
// sleep(100).then(() => {
//   console.log(Date.now() - t);
// });

//  t = Date.now();
// sleep(200).then(() => {
//   console.log(Date.now() - t);
// });

// 4-misol

// function reduceArray(nums, fn, init) {
//     let val = init;
//     for (let i = 0; i < nums.length; i++) {
//       val = fn(val, nums[i]);
//     }
//     return val;
//   }

//   let nums1 = [1, 2, 3, 4];
//   let fn1 = function sum(accum, curr) { return accum + curr; };
//   let init1 = 0;
//   console.log(reduceArray(nums1, fn1, init1));

//   let nums2 = [1, 2, 3, 4];
//   let fn2 = function sum(accum, curr) { return accum + curr * curr; };
//   let init2 = 100;
//   console.log(reduceArray(nums2, fn2, init2));

//   let nums3 = [];
//   let fn3 = function sum(accum, curr) { return 0; };
//   let init3 = 25;
//   console.log(reduceArray(nums3, fn3, init3));

// 2-example

// function compose(functions) {
//     return function(x) {
//       return functions.reduceRight((acc, fn) => fn(acc), x);
//     };
//   }

//   let functions1 = [x => x + 1, x => x * x, x => 2 * x];
//   let composedFunction1 = compose(functions1);
//   console.log(composedFunction1(4));

//   let functions2 = [x => 10 * x, x => 10 * x, x => 10 * x];
//   let composedFunction2 = compose(functions2);
//   console.log(composedFunction2(1));

//   let functions3 = [];
//   let composedFunction3 = compose(functions3);
//   console.log(composedFunction3(42));

// 5-misol

// class Shakl {
//     constructor(nom) {
//         this.nom = nom;
//     }

//     yuza() {
//         throw new Error("xatolik yuzada");
//     }

//     perimetr() {
//         throw new Error("xatolik peremetr");
//     }
// }

// class Togri_turtburchak extends Shakl {
//     constructor(eni, boyi) {
//         super("Tog'ri to'rtburchak");
//         this.eni = eni;
//         this.boyi = boyi;
//     }

//     yuza() {
//         return this.eni * this.boyi;
//     }

//     perimetr() {
//         return 2 * (this.eni + this.boyi);
//     }
// }

// class Aylana extends Shakl {
//     constructor(radius) {
//         super("Aylana");
//         this.radius = radius;
//     }

//     yuza() {
//         return Math.PI * this.radius * this.radius;
//     }

//     perimetr() {
//         return 2 * Math.PI * this.radius;
//     }
// }


// const togriTurtburchak = new Togri_turtburchak(5, 10);
// console.log(togriTurtburchak.nom + " yuza: " + togriTurtburchak.yuza());
// console.log(togriTurtburchak.nom + " perimetr: " + togriTurtburchak.perimetr());

// const aylana = new Aylana(7);
// console.log(aylana.nom + " yuza: " + aylana.yuza());
// console.log(aylana.nom + " perimetr: " + aylana.perimetr());

//  6-misol

// function chegirma(foiz) {
//     return function (narx) {
//         return narx - (narx * foiz / 100);
//     };
// }

// const yigirmaFoizChegirma = chegirma(20);


// console.log(yigirmaFoizChegirma(100));
// console.log(yigirmaFoizChegirma(50));
// console.log(yigirmaFoizChegirma(200));

// 7-misol

// function savatcha() {
//     let mahsulotlar = [];

//     return function (mahsulot) {
//         if (mahsulot) {
//             mahsulotlar.push(mahsulot);
//         }
//         return mahsulotlar;
//     };
// }

// const meningSavatcham = savatcha();


// console.log(meningSavatcham("Olma"));
// console.log(meningSavatcham("Banan"));
// console.log(meningSavatcham("Apelsin"));
// console.log(meningSavatcham());             

// 8-misol

// function plusNum(a) {
//     return function(b) {
//         return a + b;
//     };
// }

// const summa = plusNum(5);
// console.log(summa(3)); 

// 9-misol

// function parolTekshiruvchi(parol) {
//     return function (yangiParol) {
//         return yangiParol === parol; 
//     };
// }

// const parolniTekshirish = parolTekshiruvchi("1234");

// console.log(parolniTekshirish("1234")); 
// console.log(parolniTekshirish("qwerty")); 
// console.log(parolniTekshirish("4321")); 

// 10-misol

// function teskariRaqam(raqam) {
//     raqam = raqam.toString();

//     if (raqam.length === 1) {
//         return raqam;
//     }

//     return raqam.charAt(raqam.length - 1) + teskariRaqam(raqam.substring(0, raqam.length - 1));
// }

// console.log(teskariRaqam(1234));  

// 11-misol

// function daraja(base, exponent) {
//     if (exponent === 0) return 1;

//     return base * daraja(base, exponent - 1);
// }

// console.log(daraja(2, 3)); 
// console.log(daraja(5, 4)); 
// console.log(daraja(3, 2)); 
// console.log(daraja(7, 0));

// 12-misol

// function faktoriyal(n) {
//     if (n <= 1) return 1;

//     return n * faktoriyal(n - 1);
// }

// console.log(faktoriyal(5)); 
// console.log(faktoriyal(6)); 
// console.log(faktoriyal(3)); 
// console.log(faktoriyal(1)); 
// console.log(faktoriyal(0)); 

// 13-misol

// const promise1 = new Promise((resolve) => {
//     setTimeout(() => resolve("Natija 1"), 1000);
// });

// const promise2 = new Promise((resolve) => {
//     setTimeout(() => resolve("Natija 2"), 1000);
// });

// const promise3 = new Promise((resolve) => {
//     setTimeout(() => resolve("Natija 3"), 1000);
// });

// Promise.all([promise1, promise2, promise3])
//     .then(results => {
//         console.log("Barcha natijalar:", results);
//     })
//     .catch(error => {
//         console.error("Xato:", error);
//     });

// 14-misol

const promise1 = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Natija 1 (1 soniya)");
    }, 1000);
});

const promise2 = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Natija 2 (2 soniya)");
    }, 2000);
});

const promise3 = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Natija 3 (3 soniya)");
    }, 3000);
});

Promise.race([promise1, promise2, promise3]).then((natija) => {
    console.log(natija);
});
