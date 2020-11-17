const sum = require('./sum')
const { test, expect } = require('@jest/globals')

test('adding two numbers', () => {
  expect(
      sum(1, 2)
  ).toBe(3)
})