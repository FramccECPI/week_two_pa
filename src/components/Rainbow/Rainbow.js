import React from "react";
import './Rainbow.css';
import rainbow from './rainbow.svg';

export default function Rainbow() {
        return (
            <div className="rainbow">
                <img alt="rainbow img" src={rainbow} />
               <p>this is a picture of a rainbow</p> 
                
        
            </div>
        );
}
