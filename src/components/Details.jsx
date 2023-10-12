import React, { useEffect, useState } from 'react'

function Details() {

    const [time, setTime] = useState(new Date());
    const HH_MM_SS = {hour: '2-digit', minute: '2-digit', second: '2-digit', hourCycle: 'h23' }

    useEffect(() => {
        let timer = setInterval(() => setTime(new Date()), 1000);
        return function cleanup() {
          clearInterval(timer);
        };
    });
    

  return (
   <>
        <div className=' text-center pb-4'>
            <h1 className="mt-36 font-bold text-[36px]">PRESENSI</h1>
            <p className="font-bold">18 September - Sesi 1</p>
            <p>Mulai : 7:00:00</p>
            <p>Sekarang : {time.toLocaleTimeString('en-US', HH_MM_SS).replace(/AM|PM/,'') }</p>
        </div>
   </>
  )
}

export default Details