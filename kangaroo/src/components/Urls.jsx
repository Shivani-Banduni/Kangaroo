import React, { useState } from 'react'

export const Urls = () => {
    var arr=["http://www.example.org/ants/arch.php",
    "qwikxxt6jvggxzxe2v2fuzro5j7ibgphxmblmri6wkj5vpicdbo2kw...",
    "zlibrary24tuxziyiyfr7zd46yt...axkmxm4o5374ptpc52fad.onion",
    "qwikxxt6jvggxzxe2v2fuzro5j7ibgphxmblmri6wkj5vpicdbo2kw...",
    "qwikxxt6jvggxzxe2v2fuzro5j7ibgphxmblmri6wkj5vpicdbo2kw...</",
    "jumnbnsnya6h3ot563f3p566wuhf...okdlaqzcaub3gf4xlxyd.onion",
    "adsdsnya6h3ot563f3p566wuhf...okdlaqzcaub3gf4xlxyd",
    "kjkdsnya6h3ot563f3p566wuhf...okdlaqzcaub3gf4xlxyd",
    "xcnsnya6h3ot563f3p566wuhf...okdlaqzcaub3gf4xlxyd",
    "ssdnsnya6h3ot563f3p566wuhf...okdlaqzcaub3gf4xlxyd",
    "uiynsnya6h3ot563f3p566wuhf...okdlaqzcaub3gf4xlxydjkn",
    "aewsrdnsnya6h3ot563f3p566wuhf...okdlaqzcaub3gf4xlxydjk",
    "zfddnsnya6h3ot563f3p566wuhf...okdlaqzcaub3gf4xlxjn",
    "mnmndnsnya6h3ot563f3p566wuhf...okdlaqzcaub3gf4xlxydiuyutf",
    "asrdfcgvnsnya6h3ot563f3p566wuhf...okdlaqzcaub3gf4xlxydhgfdcv",
    "trecdnsnya6h3ot563f3p566wuhf...okdlaqzcaub3gf4xlxydjhgfxc",
    "uijkmnsnynma6h3ot563f3p566wuhf...okdlaqzcaub3gf4xlxydnbv",
    "zsadnsnya6h3ot563f3p566wuhf...okdlaqzcaub3gf4xlxydvbn",
    "iokmsnya6h3ot563f3p566wuhf...okdlaqzcaub3gf4xlxyd",
    "mujkmdnsnya6h3ot563f3p566wuhf...okdlaqzcaub3gf4xlxyd",
    "bnmnya6h3ot563f3p566wuhf...okdlaqzcaub3gf4xlxyd",
    "asdfcvnsnya6h3ot563f3p566wuhf...okdlaqzcaub3gf4xlxyd",
    "azsxcvbnsnya6h3ot563f3p566wuhf...okdlaqzcaub3gf4xlxydiufdf"

]
    const [ar,setarr]=useState(arr)

    // var d=document.getElementsByClassName("url-2")

    const handleclick=()=>{
        ar.sort()
// d.innerHtml=''
setarr([...ar])
console.log("ar1",ar)
    }

    const handleclick1=()=>{
        ar.sort().reverse()
        setarr([...ar])
        console.log("ar1",ar)
            }


            const handlenew=()=>{
                setarr(arr)
                console.log("ar1",ar)
                    }

                    const handleold=()=>{
                        // ar.Math.random().sort()
                        arr.reverse()
                        setarr(arr)
                        console.log("ar1",ar)
                            }
  return (

    <div className='url-main'>
        <div className='url-1'>
            <p className='p1'>Sort</p>
            
                <p className='p2' onClick={handleclick}>A-Z</p>
                <p className='p3' onClick={handleclick1}>Z-A</p>
                <p className='p4' onClick={handlenew}>Old-New</p>
                <p className='p5' onClick={handleold}>New-Old</p>


        
        </div>
        <div className='url-2'>
            <div>{ar.map((e,i)=>{
                return(<div style={{border:'1px solid rgb(242,242,242)',backgroundColor:'rgb(242,242,242);'}}>
                <h5 key={i}>{e}</h5>
                </div>)
            })}</div>

      
    </div>

    </div>
  )
}
