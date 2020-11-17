const subtract = require('./subtract')
const { test, expect } = require('@jest/globals')

test('subtracting two numbers', () => {
  expect(
      subtract(1, 2)
  ).toBe(-1)
})