// import ethers from 'ethers';
import Web3 from 'web3';
import Web3Modal from 'web3modal';
import providerOptions from './providerOptions';

async function callWeb3Modal() {
  if (process.browser) {
    const web3Modal = new Web3Modal({
      network: "mainnet",
      cacheProvider: true,
      providerOptions,
    });
    const provider = await web3Modal.connect();
    const web3 = new Web3(provider);
    console.log(web3);
  }
}

export default callWeb3Modal;
