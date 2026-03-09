# JavaScript Concepts Explained

## 1. Difference between `var`, `let`, and `const`

- **`var`** — The old way of declaring variables. It has **function scope**, meaning it is accessible anywhere inside the function it was declared in. It can be re-declared and updated. One problem with `var` is that it gets **hoisted** to the top, which can cause unexpected bugs.

- **`let`** — The modern way to declare variables. It has **block scope**, meaning it only exists inside the `{}` block where it was declared (like inside an `if` or `for`). It can be updated but **cannot be re-declared** in the same scope.

- **`const`** — Same as `let` (block scoped), but the value **cannot be changed** after it is assigned. Use `const` when you know the value won't change. Note: if the value is an object or array, you can still modify the contents inside it — you just can't reassign the whole variable.

```js
var name = "Rahat";    // function scoped, can be re-declared
let age = 25;          // block scoped, can be updated
const country = "BD";  // block scoped, cannot be reassigned
```

---

## 2. Spread Operator (`...`)

The spread operator `...` takes an array or object and **spreads out** its items individually. Think of it like unpacking a box — you take everything out and lay it on the table.

```js
const fruits = ["apple", "banana"];
const moreFruits = [...fruits, "mango"];
// moreFruits = ["apple", "banana", "mango"]

const user = { name: "Rahat", age: 25 };
const updatedUser = { ...user, city: "Dhaka" };
// updatedUser = { name: "Rahat", age: 25, city: "Dhaka" }
```

It is commonly used to **copy arrays/objects** or **combine** them together.

---

## 3. Difference between `map()`, `filter()`, and `forEach()`

All three loop through an array, but they do different things:

- **`forEach()`** — Simply **loops** through each item and runs some code. It does **not return** a new array. Use it when you just want to do something (like print or update the DOM).

- **`map()`** — Loops through each item, **transforms** it, and **returns a new array** with the transformed values. The original array stays the same.

- **`filter()`** — Loops through each item, **checks a condition**, and **returns a new array** containing only the items that passed the condition.

```js
const numbers = [1, 2, 3, 4, 5];

// forEach — just prints, returns nothing
numbers.forEach(num => console.log(num));

// map — doubles each number, returns new array
const doubled = numbers.map(num => num * 2);
// doubled = [2, 4, 6, 8, 10]

// filter — keeps only even numbers, returns new array
const evens = numbers.filter(num => num % 2 === 0);
// evens = [2, 4]
```

---

## 4. Arrow Function

An arrow function is a **shorter way** to write a function. Instead of writing the `function` keyword, you use `=>` (which looks like an arrow).

```js
// Regular function
function add(a, b) {
    return a + b;
}

// Arrow function (same thing, shorter)
const add = (a, b) => {
    return a + b;
};

// Even shorter — if it's one line, you can skip the {} and return
const add = (a, b) => a + b;
```

Arrow functions are commonly used inside `map()`, `filter()`, and event listeners to keep the code clean and short.

---

## 5. Template Literals

Template literals let you write strings using **backticks** (`` ` ``) instead of regular quotes. The big advantage is you can **put variables directly inside the string** using `${}` — no more messy string joining with `+`.

```js
const name = "Rahat";
const age = 25;

// Without template literals (old way)
const message = "My name is " + name + " and I am " + age + " years old.";

// With template literals (clean way)
const message = `My name is ${name} and I am ${age} years old.`;
```

Template literals also support **multi-line strings** without needing `\n`:

```js
const html = `
  <div>
    <h1>Hello ${name}</h1>
    <p>Welcome back!</p>
  </div>
`;
```
