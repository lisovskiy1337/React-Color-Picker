import React, {useState} from 'react'
import Values from 'values.js'
import getRandomColor from '../../utils/getRandomColor';
import ColorGeneratorItem from '../ColorGeneratorItem/ColorGeneratorItem';

const ColorGenerator = ({themeColor}) => {  
    const LS_colorList = JSON.parse(window.localStorage.getItem('colorSearched'));
    const [color, setColor] = useState('');
    const [colorList, setColorList] = useState(LS_colorList ? LS_colorList : new Values(`${getRandomColor()}`).all(10));
    
    const onSubmit = e => {
        e.preventDefault();
        if(!color){
            return
        }
        let colors = new Values(color).all(10);
        setColorList(colors);
        window.localStorage.setItem('colorSearched', JSON.stringify(colors));
        setColor('');
    }

  return (
    <section className='color__generator'> 
        <h2>Color generator</h2>
        <form  className="color__generator-form" onSubmit={onSubmit}>
            <input 
                className="color__generator-input" 
                type="text" 
                placeholder='#fffff'
                value={color}
                onChange={e => setColor(e.target.value)}
                />
            <button type="submit" style={{background: `${themeColor}`}}>Submit</button>
        </form>
        <div className="color__generator-list">
                    {colorList?.map((color, i) => {
                        return (
                            <ColorGeneratorItem key={i} {...color}/>
                        )
                    })}
        </div>
    </section>
  )
}

export default ColorGenerator