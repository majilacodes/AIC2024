"use client";
import React from "react";
import Image from "next/image";
import G1 from "@/app/assets/g3.png";

const Inp = (
  <>
    <div className="bg-[#353535] text-white p-6 rounded-lg w-[80em] flex flex-col gap-5">
      <div className="flex items-center gap-3  bg-gradient-to-br to-[#252525] from-[#303030] rounded-full mr-auto px-2 py-2 pl-6">
        <p className="text-xl">Target Name:</p>
        <input
          className="w-[20em] rounded-full mr-auto font-medium text-xl p-2 bg-[#454545] pl-6"
          value="CoronaVirus"
        />
      </div>
      <div className="flex items-center gap-3  bg-gradient-to-br to-[#252525] from-[#303030] rounded-full mr-auto px-2 py-2 pl-6">
        <p className="text-xl">Target Index:</p>
        <input
          className="w-[20em] rounded-full mr-auto font-medium text-xl p-2 bg-[#454545] pl-6"
          value="6"
        />
      </div>
      <div className="flex items-center gap-3  bg-gradient-to-br to-[#252525] from-[#303030] rounded-full mr-auto px-10 py-3 text-xl">
        Search
      </div>
    </div>
  </>
);

const Dash2 = () => {
  return (
    <div className="container flex flex-row">
      <div className="w-[20%] bg-[#353535] px-10 py-10">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center flex flex-col">
            <div className="text-5xl font-bold">
              <a href="/">Pharmora</a>
            </div>
          </div>
        </div>

        <div className="mb-8 flex flex-col gap-3">
          <p className="text-2xl">Protein Sequence</p>
          <p className="p-5 rounded-lg bg-[#252525] text-wrap">
            MGSSHHHHHSSGLVPRGSHRMGPNP TAASLEAAGPTVRSFTVSRPSGYAG
            TVYYPTNAGGTVGAIAVPGYFARQS SIKWIWECNASHGEIYTILGTKLKD
            RQAENSSQWMAALIQQVASANGTSS SPYVGKVDTARMGVWGMSMGGGGSL
            LSAANWSPLCAAAAPAWDSSTNFSS VTVPTLIFACENDSHAPVNASSLNN
            DWWGNSKNRGNQKLTMMDNTRYSTF ACENPNSTRVSDFRTANCSEDPAAA NKARKEAELAATAEQ
          </p>
        </div>
      </div>

      <div className="py-10 ml-10 h-screen">
        <p className="text-5xl font-bold mb-10">Protein Structure Predictor</p>
        <div className="flex gap-6">
          <div className="bg-[#353535] text-white p-6 rounded-lg flex items-center justify-center mr-auto">
            <div className="flex flex-col gap-3">
              <Image src={G1} height={300} width={1000} />
            </div>
          </div>
          <div className="">
            <div className="bg-[#353535] text-white p-6 rounded-lg flex items-center justify-center text-2xl mb-auto w-[14em] mb-5">
              plDDT Value: 0.8871
            </div>
            <div className="border-2 border-[#353535] text-white p-6 rounded-lg flex items-center justify-center text-2xl mb-auto w-[14em]">
              Download PDB
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dash2;
