import React, {useState}from 'react'
import Header from './components/Header/Header';
import Main from './components/Main/Main';

const colorState = [
  '#A16AE8',
  '#2E8BC0',
  '#FF8370',
  '#F8EA8C',
  '#57bd69',
  '#fc4efc'
]

function App() {
  const LS_ThemeColor = window.localStorage.getItem('themeColor');
  const [themeColor, setThemeColor] = useState(LS_ThemeColor ? LS_ThemeColor : colorState[0]);

  return (
    <>
      <Header themeColor={themeColor} setThemeColor={setThemeColor} colorState={colorState} />
      <Main themeColor={themeColor}/>
    </>
  );
}

export default App;
