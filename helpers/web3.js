import { ethers } from 'ethers';
import Web3Modal from 'web3modal';
import providerOptions from './providerOptions';

export async function initialize() {
  const isConnected = await this.isConnected();
  if (isConnected.isConnected) {
    return {
      provider: isConnected.provider,
      signer: isConnected.signer,
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

export async function getEnsName(provider, account) {
  const network = await provider.getNetwork();
  let ensName;
  if (network.chainId === 1) {
    ensName = await provider.lookupAddress(account);
  } else {
    ensName = null;
  }
  return ensName;
}

export default {
  initialize,
  isConnected,
  callWeb3Modal,
  getEnsName,
};
