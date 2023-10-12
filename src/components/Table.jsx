import axios from 'axios';
import React, { useEffect, useState } from 'react'

function Table() {

  let [fix, setFix] = useState([])
  
  function GetDatas() { 
        let temp = []
        useEffect(() => {
          axios.get('http://localhost:3000/').then((result) => {
            temp = result.data
            setFix(temp)
          })
        }, [temp])
      return fix.map((n, index) => (

          <tr style={{height: "20px"}} className={index % 2 == 0 ? 'bg-zinc-100' : 'bg-white'} key={n.id}>
            <td className=' p-2 border-[1px] border-slate-200'>{n.nama}</td>
            <td className=' pl-4 border-[1px] border-slate-200' >{n.waktu_absen}</td>
            <td className=' pl-4 border-[1px] border-slate-200'>{n.waktu_telat}</td>
          </tr>
      ))
  }
  

  return (
    <> 
        <table className='my-32' style={{width:"40vw", height: "max-content"}}>
            <thead>
              <tr className='bg-green-700 text-left'>
                <th className='border-[1px] p-3 text-white border-slate-200'>Nama</th>
                <th className='border-[1px] p-3 text-white border-slate-200'>Kehadiran</th>
                <th className='border-[1px] p-3 text-white border-slate-200'>Terlambat</th>
              </tr>
            </thead>
            <tbody className=''>
              {
                GetDatas()
              }
            </tbody>
        </table>
    </>
  )
}

export default Table