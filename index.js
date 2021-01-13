'use strict'

// const btn = document.getElementById('btn');

// console.log('script');

// console.log('1');

/*const timeID = */
// setTimeout(() => {
//     console.log('ok');
// }, 0);

//clearTimeout(timeID);   //clear timer

// console.log('2');

// console.log('script end');

// btn.addEventListener('click', handler);

//practice intervals

// console.time("set2");
// logNumbersWithInterval()

// function logNumbersWithInterval() {

//     let i = 1;
//     const intervalID = setInterval(() => {
//         console.log(i);
//         i++;

//         // ex of hard operation
//         for (let j = 0; j < 10000000; j++) {}

//         if (i > 20) {
//             clearInterval(intervalID);
//             console.timeEnd("set2");
//         }
//     }, 100);
// }

// console.time("set1");
// logNumsWithTimeout();

// function logNumsWithTimeout() {
//     let i = 1;
//     const timerID = setTimeout(function run() {

//         console.log(i);
//         i++;
//         const timer2ID = setTimeout(run, 100);
//         if (i > 20) {
//             clearTimeout(timerID);
//             clearTimeout(timer2ID);
//             console.timeEnd("set1");
//         }
//     }, 100);
// }


// Promises

/* const p1 = new Promise((resolve, reject) => {
    reject("RERSOLVED PROMISE");
});

console.log(p1);

p1
    .then(
        (string) => {
            console.log("Then result: ", string);
            return string;
            // return new Promise((resolve, reject) => {
            //     resolve(string);
            // })
        },
        // (err) => {
        //     console.error(err);
        // }
    )
    .then(
        (test) => {
            console.log("Then2 result: ", test)
        },
        // (err) => {
        //     console.error(err);
        // }
    ) */
/*     .catch((err) => {
        console.log("Caught error !", err);
    })
    .finally(() => {
        console.log("finally");
    });


const p5 = new Promise((resolve, reject) => {
    resolve("RERSOLVED PROMISE");
});

const p6 = new Promise((resolve, reject) => {
    resolve("RERSOLVED PROMISE");
});

const p7 = new Promise((resolve, reject) => {
    resolve("RERSOLVED PROMISE");
});

const result = Promise.all([p5, p6, p7]);

result.then((arrOfArguments) => {
    console.log(arrOfArguments);
})

console.log(result); */

// fetch('./user.json')
//     .then((res) => res.json())
//     .then(data => console.table(data))
//     .catch(console.error);