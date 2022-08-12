import "@nomiclabs/hardhat-ethers"

import "./type-extensions";
import { ProviderManager } from "./ProviderManager";

import { extendEnvironment } from "hardhat/config";


extendEnvironment((hre) => {

    const providerManager = new ProviderManager(hre)

    hre.getProvider = () => providerManager.getProvider()

});

