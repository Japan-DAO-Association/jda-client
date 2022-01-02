import { ethers } from 'ethers';
import Web3Modal from 'web3modal';
import providerOptions from './providerOptions';

const _getWeb3Modal = () => {
  const network = process.env.NODE_ENV === 'development' ? 'mumbai' : 'polygon';
  const web3Modal = new Web3Modal({
    network,
    cacheProvider: true,
    providerOptions,
  })

  return web3Modal;
}

async function callWeb3Modal() {
  const web3Modal = _getWeb3Modal();
  const web3ModalProvider = await web3Modal.connect();
  const provider = new ethers.providers.Web3Provider(web3ModalProvider);
  const accounts = await provider.listAccounts();

  return {
    account: accounts[0],
    provider,
  }
}

export default callWeb3Modal;
