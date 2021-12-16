import { ethers } from 'ethers';

const ERC20ABI = [
  "function balanceOf(address owner) view returns (uint256)",
  "function decimals() view returns (uint8)",
  "function symbol() view returns (stirng)",
  "function allowance(address to, uint amount) returns (boolean)",
  "function transfer(address to, uint amount) returns (boolean)",
  "function approve(address spender, uint256 amount) returns (boolean)",
  "event Transfer(address indexed from, address indexed to, uint amount)"
];

export function getERC20(address, signer) {
  const ERC20Contract = new ethers.Contract(
    ethers.utils.getAddress(address),
    ERC20ABI,
    signer
  );
  
  return ERC20Contract;
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