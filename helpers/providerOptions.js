import WalletConnectProvider from '@walletconnect/web3-provider';
// import Torus from "@toruslabs/torus-embed";
import Fortmatic from 'fortmatic';
import Portis from "@portis/web3";
import Authereum from "authereum";
import ethProvider from 'eth-provider';

const providerOptions = {
  injected: {
    package: null
  },
  // Example with WalletConnect provider
  walletconnect: {
    package: WalletConnectProvider,
    options: {
      infuraId: "INFURA_ID" // required
    }
  },
  // torus: {
  //   package: Torus,
  //   options: {
  //     networkParams: {
  //       host: "https://localhost:8545", // optional
  //       chainId: 1337, // optional
  //       networkId: 1337 // optional
  //     },
  //     config: {
  //       buildEnv: "development" // optional
  //     }
  //   }
  // },
  fortmatic: {
    package: Fortmatic,
    options: {
      key: "FORTMATIC_KEY" // required
    }
  },
  portis: {
    package: Portis,
    options: {
      id: "PORTIS_ID" // required
    }
  },
  authereum: {
    package: Authereum
  },
  frame: {
    package: ethProvider
  },
};

export default providerOptions;