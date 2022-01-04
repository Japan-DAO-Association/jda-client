import { ethers } from 'ethers';
import Web3Modal from 'web3modal';
import providerOptions from './providerOptions';

export async function initialize(propsProvider, propsSigner, fn) {
  const isConnected = await this.isConnected();
  if (isConnected.isConnected) {
    propsProvider = isConnected.provider;
    propsSigner = isConnected.signer;
    if (fn) {
      await fn();
    }
  }
}

export function isConnected() {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();
  return {
    isConnected: !!provider.connection,
    provider,
    signer,
  };
}

const _getWeb3Modal = () => {
  // const network = process.env.NODE_ENV === 'development' ? 'mumbai' : 'polygon';
  const web3Modal = new Web3Modal({
    network: 'polygon',
    cacheProvider: true,
    providerOptions,
  })

  return web3Modal;
}

export async function callWeb3Modal() {
  const web3Modal = _getWeb3Modal();
  const web3ModalProvider = await web3Modal.connect();
  const provider = new ethers.providers.Web3Provider(web3ModalProvider);
  const accounts = await provider.listAccounts();

  return {
    account: accounts[0],
    provider,
  }
}

export default {
  initialize,
  isConnected,
  callWeb3Modal,
};
