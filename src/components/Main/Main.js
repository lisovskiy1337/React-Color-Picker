import React from 'react'
import hexToRGBA from '../../utils/hexToRGBA';
import ColorGenerator from '../ColorGenerator/ColorGenerator'
import GuessColor from '../GuessColor/GuessColor';
import Palettes from '../Palettes/Palettes';

const Main = ({themeColor}) => {
  return (
    <main style={{background: `${hexToRGBA(themeColor, 0.1)}`}}>
        <ColorGenerator themeColor={themeColor}/>
        <GuessColor themeColor={themeColor}/>
        <Palettes/>
    </main>
  )
}

export default Main