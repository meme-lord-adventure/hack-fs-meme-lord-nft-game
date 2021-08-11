import { FullConfig, JsonRpcRequest, JsonRpcResponse, Provider, SingleOrBatchRequest, SingleOrBatchResponse } from "../types";
import { AlchemySendFunction } from "./alchemySend";
export interface PayloadSender {
    sendPayload: SendPayloadFunction;
    setWriteProvider(writeProvider: Provider | null | undefined): void;
}
export interface SendPayloadFunction {
    (payload: JsonRpcRequest): Promise<JsonRpcResponse>;
    (payload: SingleOrBatchRequest): Promise<SingleOrBatchResponse>;
}
export declare function makePayloadSender(alchemySend: AlchemySendFunction, config: FullConfig): PayloadSender;
