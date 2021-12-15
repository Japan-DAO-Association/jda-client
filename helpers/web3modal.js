// import ethers from 'ethers';
import { ethers } from 'ethers';
import Web3Modal from 'web3modal';
import providerOptions from './providerOptions';

export const getWeb3Modal = () => {
  if (process.browser) {
    const web3Modal = new Web3Modal({
      network: "mainnet",
      cacheProvider: true,
      providerOptions,
    })

    return web3Modal;
  } else {
    return null;
  }
}

async function callWeb3Modal() {
  if (process.browser) {
    const web3Modal = getWeb3Modal();
    const web3ModalProvider = await web3Modal.connect();
    const provider = new ethers.providers.Web3Provider(web3ModalProvider);
    const accounts = await provider.listAccounts();

    return {
      account: accounts[0],
      provider,
    }
  } else {
    return null;
  }
}

export default callWeb3Modal;
