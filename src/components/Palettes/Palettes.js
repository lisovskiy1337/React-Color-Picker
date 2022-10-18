import React from 'react'
import PalettesChildren from '../PalettesChildren/PalettesChildren'

const palettesArr = [
    [
        {color: [248, 234, 140], name: 'Yellow'},
        {color: [164, 232, 224], name: 'Tiffany Blue'},
        {color: [76, 215, 208], name: 'Cyan'},
        {color: [225, 195, 64], name: 'Freesia'}
    ],
    [
        {color: [229, 105, 151], name: 'Hot Pink'},
        {color: [189, 151, 203], name: 'Lilac'},
        {color: [251, 199, 64], name: 'Gold'},
        {color: [102, 210, 214], name: 'Cyan'}
    ],
    [
        {color: [61, 85, 12], name: 'Olive Green'},
        {color: [129, 182, 34], name: 'Lime Green'},
        {color: [236, 248, 127], name: 'Yellow Green'},
        {color: [89, 152, 26], name: 'Green'}
    ],
    [
        {color: [246, 212, 210], name: 'Rose Quartz'},
        {color: [161, 106, 232], name: 'Purple'},
        {color: [65, 32, 169], name: 'Blue Iris'},
        {color: [161, 169, 254], name: 'Periwinkle'}
    ],
    [
        {color: [11, 9, 9], name: 'Black'},
        {color: [68, 68, 76], name: 'Ebony'},
        {color: [140, 140, 140], name: 'Gray'},
        {color: [214, 214, 214], name: 'Pewter'}
    ],
    [
        {color: [240, 247, 224], name: 'Mint'},
        {color: [211, 187, 221], name: 'Mauve'},
        {color: [188, 150, 202], name: 'Lilac'},
        {color: [149, 186, 97], name: 'Kelly Green'}
    ]
]
   
const Palettes = () => {
  return (
    <section className='palettes__section'>
        <h2>Palettes combintaions</h2>
        <div className="palettes__wrapper">
            {Object.keys(palettesArr).map(key => {
                return (
                    <div className="palettes__item" key={key}>
                        {palettesArr[key].map((item, i) => {
                            return (
                                <PalettesChildren key={i} {...item}/>
                            )
                        })}
                        
                    </div>
                )
            })}
        </div>
    </section>
  )
}

export default Palettes