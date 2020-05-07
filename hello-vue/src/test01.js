// ES6 Modules Practice

let a = 5
let b = 7
let c = 9

function show() {
  console.log('This is a test.')
}

export default {
  a,
  b,
  show
}

export let s1 = 'Hello S1'
export let s2 = 'Hello S2'
export function say() {
  console.log('say something')
}