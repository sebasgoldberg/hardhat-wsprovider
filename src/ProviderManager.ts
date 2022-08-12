import { WebSocketProvider } from "@ethersproject/providers";

import { HardhatRuntimeEnvironment } from "hardhat/types";
import { URL } from "url";

import { HardhatPluginError } from 'hardhat/plugins';

import { JsonRpcProvider } from "@ethersproject/providers";

export class ProviderManager {

    protected wsProvider: WebSocketProvider|undefined

    constructor(protected hre: HardhatRuntimeEnvironment){
        this.initialize()
    }

    protected initialize(): void {

        if (!(this.hre.network.config as any).url)
            return
    
        const url = new URL((this.hre.network.config as any).url)
    
        switch (url.protocol) {
    
            case "http:":
            case "https:":
                return
    
            case "ws:":
            case "wss:":
                this.wsProvider = new WebSocketProvider(url.href)
                return
    
            default:
                throw new HardhatPluginError('hardhat-ethers-provider', `Network URL not valid: '${url.href}'`);
    
        }
    }

    getProvider(): JsonRpcProvider{

        if (this.wsProvider) 
            return this.wsProvider
        return this.hre.ethers.provider

    }

}
