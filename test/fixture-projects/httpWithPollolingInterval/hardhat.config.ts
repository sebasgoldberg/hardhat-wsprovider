// We load the plugin here.
import { HardhatUserConfig } from "hardhat/types";

import "../../../src/index";

const config: HardhatUserConfig = {
  solidity: "0.7.3",
  defaultNetwork: "http",
  networks: {
    http: {
      url: 'http://localhost',
      pollingInterval: 333
    }
  }
};

export default config;
