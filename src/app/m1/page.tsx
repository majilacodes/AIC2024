"use client";
import React, { useState } from "react";
import Image from "next/image";
import G1 from "@/app/assets/g1.png";
import G2 from "@/app/assets/g2.jpeg";
import G3 from "@/app/assets/ligand.png";

const FEATURES = [
  {
    Feature: 192,
    Importance: 0.4922,
    Description: "any ring size 6",
  },
  {
    Feature: 136,
    Importance: 0.0302,
    Description: "2 any ring size 4",
  },
  {
    Feature: 120,
    Importance: 0.0275,
    Description: "1 unsaturated non-aromatic nitrogen-containing ring size 3 ",
  },
  {
    Feature: 58,
    Importance: 0.024,
    Description: "1 Fe",
  },
  {
    Feature: 148,
    Importance: 0.0212,
    Description: "1 unsaturated non-aromatic nitrogen-containing ring size 5",
  },
  {
    Feature: 5,
    Importance: 0.0157,
    Description: "2 Li",
  },
  {
    Feature: 168,
    Importance: 0.0099,
    Description: "4 unsaturated non-aromatic carbon-only ring size 5",
  },
  {
    Feature: 59,
    Importance: 0.0089,
    Description: "1 Co",
  },
  {
    Feature: 18,
    Importance: 0.0088,
    Description: "1 O",
  },
  {
    Feature: 135,
    Importance: 0.0085,
    Description: "1 unsaturated non-aromatic heteroatom-containing ring size 4",
  },
];

const TARGETS = [
  {
    index: 0,
    organism: "Coronavirus",
    pref_name: "Coronavirus",
    score: 17,
  },
  {
    index: 1,
    organism: "Feline coronavirus",
    pref_name: "Feline coronavirus",
    score: 14,
  },
  {
    index: 2,
    organism: "Murine coronavirus",
    pref_name: "Murine coronavirus",
    score: 14,
  },
  {
    index: 3,
    organism: "Canine coronavirus",
    pref_name: "Canine coronavirus",
    score: 14,
  },
  {
    index: 4,
    organism: "Human coronavirus 229E",
    pref_name: "Human coronavirus 229E",
    score: 13,
  },
  {
    index: 5,
    organism: "Human coronavirus OC43",
    pref_name: "Human coronavirus OC43",
    score: 13,
  },
  {
    index: 6,
    organism: "SARS coronavirus",
    pref_name: "SARS coronavirus 3C-like proteinase",
    score: 10,
  },
  {
    index: 7,
    organism: "Middle East respiratory syndrome-related coronavirus",
    pref_name: "Middle East respiratory syndrome-related coronavirus",
    score: 9,
  },
  {
    index: 8,
    organism: "SARS coronavirus",
    pref_name: "Replicase polyprotein 1ab",
    score: 4,
  },
  {
    index: 9,
    organism: "Severe acute respiratory syndrome coronavirus 2",
    pref_name: "Replicase polyprotein 1ab",
    score: 4,
  },
];

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
      <div className="flex items-center gap-3  bg-gradient-to-br to-[#252525] from-[#303030] rounded-full mr-auto px-10 py-3 text-xl font-bold">
        Predict
      </div>
    </div>
    <div className="bg-[#353535] text-white p-6 rounded-lg w-[80em]">
      <p className="text-2xl">Targets</p>
      <table
        border={1}
        style={{ width: "100%", marginTop: "10px", textAlign: "left" }}
        className="border border-gray-600 text-lg"
      >
        <thead>
          <tr className="bg-[#252525]">
            <th className="p-2">Index</th>
            <th className="p-2">Organism</th>
            <th className="p-2">Preferred Name</th>
            <th className="p-2">Score</th>
          </tr>
        </thead>
        <tbody>
          {TARGETS.map((item, index) => (
            <tr key={index} className="border-b border-gray-500">
              <td className="p-2 border-r border-gray-500">{item.index}</td>
              <td className="p-2 border-r border-gray-500">{item.organism}</td>
              <td className="p-2 border-r border-gray-500">{item.pref_name}</td>
              <td className="p-2">{item.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </>
);

const Res = (
  <>
    <div className="flex flex-row gap-5">
      <div className="bg-[#353535] text-white p-6 rounded-lg flex items-center justify-center mr-auto">
        <div className="flex flex-col gap-3 m-auto">
          <p className="text-2xl">Bioactivity Class</p>
          <Image src={G1} height={300} width={2000} />
        </div>
      </div>
      <div className="bg-[#353535] text-white p-6 rounded-lg flex items-center justify-center mr-auto">
        <div className="bg-[#353535] text-white p-6 rounded-lg mr-auto flex">
          <Image src={G2} height={300} width={900} />
        </div>
      </div>
    </div>
    <div className="flex gap-5">
      <div className="bg-[#353535] text-white p-6 rounded-lg w-[80em]">
        <table
          border={1}
          style={{ width: "100%", marginTop: "0px", textAlign: "left" }}
          className="border border-gray-600 text-lg"
        >
          <thead>
            <tr className="bg-[#252525]">
              <th className="p-2">Feature</th>
              <th className="p-2">Importance</th>
              <th className="p-2">Description</th>
            </tr>
          </thead>
          <tbody>
            {FEATURES.map((item, index) => (
              <tr key={index} className="border-b border-gray-500">
                <td className="p-2 border-r border-gray-500">{item.Feature}</td>
                <td className="p-2 border-r border-gray-500">
                  {item.Importance}
                </td>
                <td className="p-2">{item.Description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="bg-[#353535] text-white p-6 rounded-lg mr-auto flex">
        <Image src={G3} height={300} width={600} />
      </div>
    </div>
  </>
);

const Sim = (
  <div>
    <video src="/mol.mp4" autoPlay />
  </div>
);

const Dash = () => {
  const [view, setView] = useState("Input");

  return (
    <div className="container flex flex-row bg-[#252525]">
      <div className="w-[20%] bg-[#353535] px-10 py-10">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center flex flex-col">
            <div className="text-5xl font-bold">
              <a href="/">Pharmora</a>
            </div>
          </div>
        </div>

        <div className="mb-8 flex flex-col gap-3">
          <a
            href="#"
            className={`font-medium text-2xl p-3 bg-gradient-to-br rounded-full px-10 ${view === "Input" ? "to-[#454545] from-[#606060]" : "to-[#252525] from-[#303030]"}`}
            onClick={() => setView("Input")}
          >
            Input
          </a>
          <a
            href="#"
            className={`font-medium text-2xl p-3 bg-gradient-to-br rounded-full px-10 ${view === "Result" ? "to-[#454545] from-[#606060]" : "to-[#252525] from-[#303030]"}`}
            onClick={() => setView("Result")}
          >
            Result
          </a>
          <a
            href="#"
            className={`font-medium text-2xl p-3 bg-gradient-to-br rounded-full px-10 ${view === "Simulation" ? "to-[#454545] from-[#606060]" : "to-[#252525] from-[#303030]"}`}
            onClick={() => setView("Simulation")}
          >
            Simulation
          </a>
        </div>
      </div>

      <div className="mx-auto py-10 ml-10">
        <p className="text-5xl font-bold mb-10">Bio Activity Predictor</p>
        <div className="flex flex-col gap-6">
          {view === "Input" ? Inp : <div />}
          {view === "Result" ? Res : <div />}
          {view === "Simulation" ? Sim : <div />}
        </div>
      </div>
    </div>
  );
};

export default Dash;
