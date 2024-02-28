export {};

// This comparison appears to be unintentional because the types 'X' and 'Y' have no overlap

// EXAMPLE 1 - Comparing two values of a different type with strict equality

const num = 30;
const str = '30';

if (num === Number(str)) {
  console.log('success');
}

// ---------------------------------------------------

// // EXAMPLE 2 - Mixing up the logical AND (&&) and logical OR (||) operators

// const str = 'bobby';

// if (str === 'bobby' || str === 'hadz') {
//   console.log('success'); // 👉️ this runs
// }

// ---------------------------------------------------

// // EXAMPLE 3 - Using the logical NOT (!) operator incorrectly

// const str1 = 'bobby';

// const str2 = Math.random() > 0.5 ? 'bobby' : 'hadz';

// // ✅ wrapped the expression in parentheses
// if (str1 === 'bobby' && !(str1 !== str2)) {
//   console.log('success');
// }

// ---------------------------------------------------

// // EXAMPLE 4 - Use a type assertion to solve the error

// export enum Sizes {
//   Small = 'S',
//   Medium = 'M',
//   Large = 'L',
// }

// let size: Sizes = Sizes.Medium;

// [1, 2].forEach((_) => {
//   size = Sizes.Large;
// });

// console.log(size); // 👉️ "L"

// // ✅ Use type assertion
// if ((size as Sizes) === Sizes.Large) {
//   console.log('success'); // 👉️ this runs
// }

// ---------------------------------------------------

// // EXAMPLE 5 - Forgetting to access a Property on an Object

// if (process.env.NODE_ENV === 'production') {
//   console.log('prod');
// } else if (process.env.NODE_ENV === 'development') {
//   console.log('dev');
// } else {
//   console.log(process.env.NODE_ENV);
// }
