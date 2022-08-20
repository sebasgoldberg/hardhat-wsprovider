import { WebSocketProvider, JsonRpcProvider } from "@ethersproject/providers";

import { HardhatRuntimeEnvironment, HttpNetworkUserConfig } from "hardhat/types";
import { URL } from "url";

import { HardhatPluginError } from 'hardhat/plugins';

export class ProviderManager {

    protected provider: JsonRpcProvider|undefined

    constructor(protected hre: HardhatRuntimeEnvironment){
        this.initialize()
    }

    protected initialize(): void {

        if (!(this.hre.network.config as any).url)
            return
    
        const url = new URL((this.hre.network.config as any).url)
    
        switch (url.protocol) {
    
            case "ws:":
            case "wss:":
                this.provider = new WebSocketProvider(url.href)
                return
    
            case "http:":
            case "https:":

                const pollingInterval = (this.hre.network.config as HttpNetworkUserConfig).pollingInterval
                if (pollingInterval){
                    this.provider = new JsonRpcProvider(url.href)
                    this.provider.pollingInterval = pollingInterval
                }
                return
    
        }
    }

    getProvider(): JsonRpcProvider{

        if (this.provider) 
            return this.provider
        return this.hre.ethers.provider

    }

}
