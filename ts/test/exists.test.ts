
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { MyIpSDK } from '..'


describe('exists', async () => {

  test('test-mode', async () => {
    const testsdk = await MyIpSDK.test()
    equal(null !== testsdk, true)
  })

})
