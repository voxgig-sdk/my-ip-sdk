
import { Context } from './Context'


class MyIpError extends Error {

  isMyIpError = true

  sdk = 'MyIp'

  code: string
  ctx: Context

  constructor(code: string, msg: string, ctx: Context) {
    super(msg)
    this.code = code
    this.ctx = ctx
  }

}

export {
  MyIpError
}

