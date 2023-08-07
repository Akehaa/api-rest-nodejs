import { expect, test } from 'vitest'

test('the user is able to create a new transaction', () => {
  const responseStatusCode = 201

  expect(responseStatusCode).toEqual(201)
})
