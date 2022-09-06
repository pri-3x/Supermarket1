import { useState } from "react";
import { ethers } from "ethers";
import ErrorMessage from "./ErrorMessage.js";
import TxList from "./TxList.js";
import logo from './2.png';
import './item.css';
import Navbar from "../components/Navbar.js";

import Footer1 from "../components/Footer1.js";


const startPayment = async ({ setError, setTxs, ether, addr }) => {
  try {
    if (!window.ethereum)
      throw new Error("No crypto wallet found. Please install it.");

    await window.ethereum.send("eth_requestAccounts");
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    ethers.utils.getAddress(addr);
    const tx = await signer.sendTransaction({
      to: addr,
      value: ethers.utils.parseEther(ether)
    });
    console.log({ ether, addr });
    console.log("tx", tx);
    setTxs([tx]);
  } catch (err) {
    setError(err.message);
  }
};

export default function Item1() {
  const [error, setError] = useState();
  const [txs, setTxs] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // const data = new FormData(e.target);
    setError();
    await startPayment({
      setError,
      setTxs,
      ether: "0.02",
      addr: "0x0fA03204c999cAfA21dE7a5EB61117C8d6cFf530"
    });
  };

  return (

    <><form className="m-4" onSubmit={handleSubmit}>
      {/* <div className="main "> */}
      <Navbar />
      <div className="div">
        <div className=" image">
          <img className="image2" src={logo} alt="Item"></img>
        </div>



        <div className="child">
          <h1> NEW HALLOWEN DRIPPY <br />
            ROUND NECK TSHIRT </h1>
          <h4>We are driven by our passion for adventure. We are<br />
            aviators, patriots, adrenaline seekers, and
            travellers who<br />
            bring to you a great collection of products to celebrate<br />
            this passion.</h4>

          <ul>
            <li>100% Cotton Super Soft T-Shirts</li>
            <li>Guranteed Color Fastness</li>
            <li>Sustainable and Organic</li>
            <li>7-Days Easy Return Exchange</li>

          </ul>
          <br /> <br /> <br />



<div className="row1">
          <select className="bt-1">
            <option>Size</option>
            <option> S</option>
            <option>M</option>
            <option> L</option>
            <option> XL</option>
            <option> XXL</option>
          </select>



          <button
            type="submit"
            className="bt-1"
          >
            0.02 Matic
          </button>
          </div>

        </div>


      </div>

      
    </form><Footer1 /></>
    
  );
}

