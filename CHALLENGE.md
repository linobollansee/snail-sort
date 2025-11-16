# 🐌 Snail Sort

Given an `n x n` array, return the elements arranged from the **outermost layer to the center**, traveling **clockwise**.

## 🔁 Description

Write a function `snail(array)` that takes a 2D square array and returns a 1D array of values in “snail order”:

- Top row → right column → bottom row (reversed) → left column (upward) → repeat inward

## 🧪 Test Data

```javascript
snail([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]);
// [1, 2, 3, 6, 9, 8, 7, 4, 5]

snail([
  [1, 2],
  [3, 4],
]);
// [1, 2, 4, 3]

snail([[1]]);
// [1]

snail([
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
]);
// [1, 2, 3, 4, 8, 12, 16, 15, 14, 13, 9, 5, 6, 7, 11, 10]
```
