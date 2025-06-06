// ✅ JavaScript Competitive Programming Cheat Sheet (Refactored)

// 🔢 Create number array from 0 to n
const n = 10;
const range = Array.from({ length: n + 1 }, (_, i) => i); // [0, 1, ..., n]

// ──────────────────────────────────────────────
// 📦 Arrays
// ──────────────────────────────────────────────
const arr = [1, 2, 3];

// 🏗️ Creation
const arr = [1, 2, 3];
Array.from({length: 5}, (_, i) => i);  // [0,1,2,3,4]
Array(5).fill(0);                      // [0,0,0,0,0]

const length = 5
const result = Array(length+1).fill(0).map((_, i) => i);
console.log(result); // [0, 1, 2, 3, 4, 5]

const n = 10;
const numbers = Array.from({ length: n + 1 }, (_, i) => i);
console.log(numbers); // [0, 1, 2, 3, ..., 10]

// 🔁 Iteration
arr.forEach(x => console.log(x));      // No return, just iterate\const doubled = arr.map(x => x * 2);    // [2, 4, 6]
const evens = arr.filter(x => x % 2 === 0); // [2]
const sum = arr.reduce((a, b) => a + b, 0); // 6

// 🔍 Search & Check
arr.includes(2);           // true
arr.indexOf(3);            // 2
arr.find(x => x > 1);      // 2
arr.findLast(x => x>1); // 3 (ES2023)
arr.every(x => x > 0);     // true
arr.some(x => x > 2);      // true

// 🛠️ Modify
arr.push(4);               // [1, 2, 3, 4]
arr.pop();                 // [1, 2, 3]
arr.unshift(0);            // [0, 1, 2, 3]
arr.shift();               // [1, 2, 3]
arr.splice(1, 1);          // Remove index 1: [1, 3]
arr.reverse();             // Reverse in place
arr.sort((a, b) => a - b); // Numeric sort

// 📄 Convert
Array.from("abc");              // ['a', 'b', 'c']
[...new Set([1,2,2,3])];         // [1,2,3]
arr.join("-");                   // "1-3"
"1,2,3".split(",");             // ["1", "2", "3"]

// 🏗️ Creation
Array(5).fill(0);               // [0,0,0,0,0]
[...Array(5).keys()];           // [0,1,2,3,4]

// 🔄 Advanced Iteration
arr.flatMap(x => [x, x * 2]);   // Flattened map
arr.findIndex(x => x > 1);     // 1

// 🧮 Math Operations
Math.max(...arr);              // Max element
Math.min(...arr);              // Min element
arr.reduce((a, b) => a * b);   // Product

// 🔀 Rearranging
arr.copyWithin(0, 1, 2);       // In-place copy
arr.toReversed();              // [3,1] (non-mutating, ES2023)
arr.toSorted((a,b) => b - a);  // Descending (non-mutating)

// 🧩 Chunking
const chunk = (arr, size) => Array.from({ length: Math.ceil(arr.length / size) }, (_, i) => arr.slice(i * size, i * size + size));

// ──────────────────────────────────────────────
// 🗺️ Map (key-value)
// ──────────────────────────────────────────────
const map = new Map();
map.set("a", 1);
map.get("a");            // 1
map.has("a");            // true
map.delete("a");         // delete key
map.clear();             // all keys
map.size;                // number of keys

for (const [k,v] of map) console.log(k,v);
[...map.keys()];       // ['b', 'c']
[...map.values()];     // [2,3]

// 📄 Convert Object <=> Map
const obj = { a: 1, b: 2 };
const mapFromObj = new Map(Object.entries(obj));
const objFromMap = Object.fromEntries(mapFromObj);

// Map utilities
const doubledMap = new Map([...map].map(([k, v]) => [k, v * 2]));

// Frequency map
const freq = arr.reduce((m, x) => m.set(x, (m.get(x) || 0) + 1), new Map());

// ──────────────────────────────────────────────
// 🧺 Set (unique values)
// ──────────────────────────────────────────────
const set = new Set();
set.add(1);
set.has(1);
set.delete(1);
set.clear();
set.size;

// Convert
[...set];
const uniq = new Set([1,2,2,3]);

// Set math
const union = new Set([...set1, ...set2]);
const intersection = new Set([...set1].filter(x => set2.has(x)));
const difference = new Set([...set1].filter(x => !set2.has(x)));

// ──────────────────────────────────────────────
// 🥞 Stack
// ──────────────────────────────────────────────
const stack = [];
stack.push(1);
stack.pop();
stack[stack.length - 1];
stack.length === 0;

class Stack {
  constructor() { this.items = []; }
  push(v) { this.items.push(v); }
  pop() { return this.items.pop(); }
  peek() { return this.items[this.items.length - 1]; }
  isEmpty() { return this.items.length === 0; }
  size() { return this.items.length; }
  clear() { this.items = []; }
}

// ──────────────────────────────────────────────
// 🚶 Queue
// ──────────────────────────────────────────────
const queue = [];
queue.push(1);
queue.shift();

class Queue {
  constructor() {
    this.items = {}; this.front = 0; this.rear = 0;
  }
  enqueue(v) { this.items[this.rear++] = v; }
  dequeue() {
    const v = this.items[this.front];
    delete this.items[this.front++];
    return v;
  }
  peek() { return this.items[this.front]; }
  size() { return this.rear - this.front; }
}

// ──────────────────────────────────────────────
// 🔠 Strings
// ──────────────────────────────────────────────
const str = "hello";
str.includes("ell");   // true
str.startsWith("he");
str.endsWith("lo");
str.indexOf("l");    // 2
str.lastIndexOf("l");  // 3
str.repeat(2);

// ✂️ Slicing
str.slice(1, 4);     // "ell"
str.substring(1,4);    // "ell"

// 🛠️ Modification
str.split("").reverse().join(""); // "olleh"
str.replace(/l/g, "L");          // "heLLo"

// 🔢 Conversion
"a".charCodeAt(0);           // 97
String.fromCharCode(97);     // "a"

// ──────────────────────────────────────────────
// 🧮 Math + Random
// ──────────────────────────────────────────────
Math.clz32(5);            // Count leading zeros
Number.isInteger(5.5);    // false
(5).toString(2);          // binary "101"
parseInt("101", 2);       // 5
Math.floor(Math.random() * 100);
const randRange = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

// ⚡ Bitwise Ops
5 & 3;   // 1 (AND)
5 | 3;   // 7 (OR)
5 ^ 3;   // 6 (XOR)
~5;      // -6 (NOT)
5 << 1;  // 10 (left shift)
5 >> 1;  // 2 (right shift)

// ──────────────────────────────────────────────
// 🔁 Algorithms
// ──────────────────────────────────────────────

// Sliding Window
function maxSubarray(arr, k) {
  let max = 0, sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    if (i >= k - 1) {
      max = Math.max(max, sum);
      sum -= arr[i - (k - 1)];
    }
  }
  return max;
}

// Two Pointers
function pairSum(arr, target) {
  let l = 0, r = arr.length - 1;
  while (l < r) {
    const sum = arr[l] + arr[r];
    if (sum === target) return [l, r];
    sum < target ? l++ : r--;
  }
  return [-1, -1];
}

// Prefix Sum
const prefixSum = arr.reduce((a, c, i) => {
  a.push(i > 0 ? a[i - 1] + c : c);
  return a;
}, []);

// ──────────────────────────────────────────────
// ⚡ Optimization Tips
// ──────────────────────────────────────────────

// Use for/while loops when performance matters
for (let i = 0; i < arr.length; i++) {}

// Typed Arrays for memory efficiency
const typed = new Int32Array(1000);


// Memoization with Map
const memo = new Map();
function fib(n) {
  if (memo.has(n)) return memo.get(n);
  if (n <= 1) return n;
  memo.set(n, fib(n - 1) + fib(n - 2));
  return memo.get(n);
}
