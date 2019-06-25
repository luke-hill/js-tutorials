## JS Koan #2 - Triangles

This is a direct copy of the Ruby Koan Triangle

We need to find a way to define a triangle using the length of the 3 sides (a, b, c)

Triangles with all sides equal should be marked as `:equilateral`

Triangles with 2 sides equal should be marked as `:isosceles`

All other valid triangles are by default `:scalene`

Any invalid Triangles should throw an error

Examples:

```js
// It returns ...
// triangle(2, 2, 2) // :equilateral
// triangle(2, 6, 6) // :isosceles
// triangle(2, 5, 6) // :scalene
```
