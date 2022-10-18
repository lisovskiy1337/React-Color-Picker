import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import isItTooDark from '../../utils/isItTooDark'
import rgbToHex from '../../utils/rgbToHex';

const PalettesChildren = ({color, name}) => {
    const [copyAlert, setCopyAlert] = useState(false);
    const bcg =  color.join(', ');
    const hex = rgbToHex(...color);

    const handleCopyToClipboard = () => {
      setCopyAlert(true);
      navigator.clipboard.writeText(`${hex}`);
    }
  
    useEffect(() => {
        const timer = setTimeout(() => {
            setCopyAlert(false);
        }, 3000);
        return () => clearTimeout(timer);
    }, [copyAlert])
    
  return (
    <div className="palettes__item-children">
        <div className='palettes__item-color' style={{background: `rgb(${bcg})`}} onClick={handleCopyToClipboard}>
        {copyAlert ? 
            <p className='color__generator-copied' style={{color: `${isItTooDark(bcg)}`}}>Copied to clipboard!</p>
            :
            <p className='color__generator-copy' style={{color: `${isItTooDark(bcg)}`}}>Copy to clipboard</p>
        }
        </div>
        <div className='palettes__item-info'>
            <p className='palettes__item-info-name'>{name}</p>
            <p className='palettes__item-info-color'>{hex}</p>
        </div>
    </div>
  )
}

export default PalettesChildren