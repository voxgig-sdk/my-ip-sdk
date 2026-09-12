import { MyIpEntityBase } from '../MyIpEntityBase';
import type { MyIpSDK } from '../MyIpSDK';
import type { Control } from '../types';
import type { GetIpInfo, GetIpInfoLoadMatch } from '../MyIpTypes';
declare class GetIpInfoEntity extends MyIpEntityBase<GetIpInfo> {
    constructor(client: MyIpSDK, entopts: any);
    make(this: GetIpInfoEntity): GetIpInfoEntity;
    load(this: any, reqmatch?: GetIpInfoLoadMatch, ctrl?: Control): Promise<GetIpInfoEntity>;
}
export { GetIpInfoEntity };
