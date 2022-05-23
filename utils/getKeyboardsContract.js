import { ethers } from "ethers";

import abi from "../utils/Keyboards.json"

const contractAddress = '0xBcC56fb81e2A97Dd5789c7Fa4FD5bCb2cAD6783d';
const contractABI = abi.abi;

export default function getKeyboardsContract(ethereum) {
  if(ethereum) {
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    return new ethers.Contract(contractAddress, contractABI, signer);
  } else {
    return undefined;
  }
}
