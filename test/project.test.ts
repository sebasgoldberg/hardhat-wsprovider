// tslint:disable-next-line no-implicit-dependencies
import { assert } from "chai";

import { useEnvironment } from "./helpers";
import { JsonRpcProvider, WebSocketProvider } from "@ethersproject/providers";

describe("Integration tests examples", function () {

    describe("Hardhat Runtime Environment extension", function () {
        useEnvironment("hardhat-project");

        it("getProvider should return a provider", function () {
            assert.instanceOf(
                this.hre.getProvider(),
                JsonRpcProvider
            );
        });

        it("getProvider should return the same provider as ethers.provider", function () {
            assert.equal(
                this.hre.getProvider(),
                this.hre.ethers.provider
            );
        });

    });

    // describe("WebSocketProvider", function () {
    //     useEnvironment("ws");

    //     it("getProvider should return a web socket provider", function () {
    //         assert.instanceOf(
    //             this.hre.getProvider(),
    //             WebSocketProvider
    //         );
    //     });

    // });

    describe("HTTP without pollingInterval", function () {
        useEnvironment("http");

        it("pollingInterval config should not be defined in network configuration.", function () {
            assert.isUndefined(
                this.hre.network.config.pollingInterval
            );
        });

        it("getProvider should return the same provider as ethers.provider", function () {
            assert.equal(
                this.hre.getProvider(),
                this.hre.ethers.provider
            );
        });

    });

    describe("HTTP with pollingInterval", function () {
        useEnvironment("httpWithPollolingInterval");

        it("pollingInterval config should be defined in network configuration.", function () {
            assert.equal(
                this.hre.network.config.pollingInterval,
                333
            );
        });

        it("pollingInterval should be defined in returned provider.", function () {

            const provider = this.hre.getProvider()
            assert.equal(
                provider.pollingInterval,
                333
            );

        });

    });

});
