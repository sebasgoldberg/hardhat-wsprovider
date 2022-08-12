// tslint:disable-next-line no-implicit-dependencies
import { assert } from "chai";

import { useEnvironment } from "./helpers";
import { JsonRpcProvider } from "@ethersproject/providers";

describe("Integration tests examples", function () {
    describe("Hardhat Runtime Environment extension", function () {
        useEnvironment("hardhat-project");

        it("getProvider should return a provider", function () {
            assert.instanceOf(
                this.hre.getProvider(),
                JsonRpcProvider
            );
        });

    });

});
