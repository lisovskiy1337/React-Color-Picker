import React, {useState, useEffect} from 'react'
import isItTooDark from '../../utils/isItTooDark'
import rgbToHex from '../../utils/rgbToHex'

const ColorGeneratorItem = ({rgb, weight}) => {
    const [copyAlert, setCopyAlert] = useState(false);
    const bcg =  rgb.join(', ')
    const hex = rgbToHex(...rgb);

    const handleCopyToClipboard = () => {
        setCopyAlert(true);
        navigator.clipboard.writeText(`${hex}`);
    }
    
    useEffect( () => {
        const timer = setTimeout(() => {
            setCopyAlert(false);
        }, 3000);
        return () => clearTimeout(timer);
    }, [copyAlert])

  return (
    <div 
        className="color__generator-item" 
        style={{ background: `rgb(${bcg})`, color: `${isItTooDark(bcg)}`}}
        onClick={handleCopyToClipboard}  
    >
        <p style={{color: `${isItTooDark(bcg)}`}}>{weight}%</p>
        <p style={{color: `${isItTooDark(bcg)}`}}>{hex}</p>
        {copyAlert ? 
            <p className='color__generator-copied' style={{color: `${isItTooDark(bcg)}`}}>Copied to clipboard!</p>
            :
            <p className='color__generator-copy' style={{color: `${isItTooDark(bcg)}`}}>Copy to clipboard</p>
        }
    </div>
  )
}

export default ColorGeneratorItem