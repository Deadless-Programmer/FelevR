import React from "react";
import "./Spinner.css";
import Lottie from "lottie-react";
import loader from '../../assets/98579-junction-loader.json'
const Spinner = () => {
  return <div className="flex justify-center items-center h-[calc(100vh -64px)]">
  <Lottie className="w-96 h-96" animationData={loader} />;
</div>
};

export default Spinner;
