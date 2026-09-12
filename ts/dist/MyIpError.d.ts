import { Context } from './Context';
declare class MyIpError extends Error {
    isMyIpError: boolean;
    sdk: string;
    code: string;
    ctx: Context;
    status: number;
    get notFound(): boolean;
    constructor(code: string, msg: string, ctx: Context);
}
export { MyIpError };
