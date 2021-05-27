import React, { useState } from 'react';
import "./style.scss"
import Commission from '../Commission'
import Basesituation from '../Basesituation'
export default function DataKanban(){

    const [count,setCount] = useState()
    const [show] = useState(true)
    return(
        <div id="dataKanban">
            {
                show?<div className="dataKanban_top">
                <div className={count ===1?"item acitve":"item"} onClick={()=>setCount(1)}>留置场所</div>
                <div className={count ===0?"item acitve":"item"} onClick={()=>setCount(0)}>留置区</div>
                </div>:null
            }
            <div className="dataKanban_content">
                {
                    count===0?<Commission/>:null
                }
                {
                    count===1?<Basesituation/>:null
                }
            </div>
        </div>
    )
}