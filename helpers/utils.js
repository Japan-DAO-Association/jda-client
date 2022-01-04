import { ethers } from 'ethers';

export function parseUnitsToString(val, unit) {
  return ethers.utils.parseUnits(String(val), unit);
}

export function clone(item) {
  return JSON.parse(JSON.stringify(item));
}

export function sleep(time) {
  return new Promise((resolve) => {
    setTimeout(resolve, time);
  });
}

export default {
  parseUnitsToString,
  clone,
  sleep,
}
