import { ethers } from 'ethers';

export function getContract(address, abi, signer) {
  const contract = new ethers.Contract(
    ethers.utils.getAddress(address),
    abi,
    signer
  );
  
  return contract;
}

export async function callContract(provider, abi, call, options) {
  const contract = new ethers.Contract(call[0], abi, provider);
  try {
    const params = call[2] || [];
    return await contract[call[1]](...params, options || {});
  } catch (e) {
    return Promise.reject(e);
  }
}

export default {
  getERC20,
  callContract,
}