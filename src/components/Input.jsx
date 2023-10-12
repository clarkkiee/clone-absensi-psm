import { MemoryRounded } from "@material-ui/icons";
import axios from "axios";
import React, { useEffect, useMemo, useState } from "react";
import Status from "./Status";


function Input() {
  const [suara, setSuara] = useState("");
  const [fixed, setFixed] = useState([]);
  let selected = null;

  function namaSelected (event) {
    selected = event.target.value;
  }

  function handleSubmit(){
    //cek dan validasi data ke database untuk displaying absen
    axios.post('http://localhost:3000/', { nama :selected})x.finally( window.location.reload())
    // alert(selected)
   
    setFixed([])
  }

  let nama = [];
  function mappingOption(){
    // console.log("duar", fixed)
    return fixed.map((n) => (
      <option key={n}>{n}</option>
    ))
  }

   async function handleSuaraChange(event){
    setSuara(event.target.value);
    const baseUrl = `http://localhost:3000/${event.target.value}`
    await axios.get(baseUrl).then((result) => {
      nama = result.data
      setFixed(nama)
    })
  }


  return (
    <>
      <div className="container w-[50vw] flex flex-col">
        <div className="flex flex-col items-center w-[50%] m-[auto]">
          <label className="w-[100%] ">Suara</label>
          <select className="w-[100%] p-3 border-2 m-1" onChange={handleSuaraChange}>
            <option value={""} hidden></option>
            <option value={"sopran_1"}>Sopran 1</option>
            <option value={"sopran_2"}>Sopran 2</option>
            <option value={"alto_1"}>Alto 1</option>
            <option value={"alto_2"}>Alto 2</option>
            <option value={"tenor_1"}>Tenor 1</option>
            <option value={"tenor_2"}>Tenor 2</option>
            <option value={"bass_1"}>Bass 1</option>
            <option value={"bass_2"}>Bass 2</option>
          </select>
        </div>


        <div className="flex flex-col items-center w-[50%] m-[auto]">
          <label className="w-[100%]">Nama</label>
          <select onChange={namaSelected} className="w-[100%] p-3 border-2 m-1">
            <option value={""} hidden> </option>
            {
              mappingOption()
            }
          </select>
          
        </div>
        <button
          onClick={handleSubmit}
          className="p-4 my-5 m-[auto] bg-green-600 w-[48%] rounded-sm text-white font-bold text-lg hover:bg-green-700 "
          type="submit"
        >
          SUBMIT
        </button>
       
      </div>
    </>
  );
}

export default Input;
