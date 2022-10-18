import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import getRandomColor from '../../utils/getRandomColor'

const GuessColor = ({themeColor}) => {

  const [colorToGuess, setColorToGuess] = useState('')
  const [answers, setAnswers] = useState([]);
  const [isCorrectAnswer, setIsCorrectAnswer] = useState(null);

  const resetColors = () => {
    const correctColor = getRandomColor();
    setColorToGuess(correctColor);
    setAnswers([correctColor, getRandomColor(), getRandomColor()].sort(
      () => 0.5 - Math.random()
    ));
  };

  useEffect(() => {
    resetColors();
  }, []);

  const handleClickAnswer = (ans) => {
    if (ans === colorToGuess) {
      setIsCorrectAnswer(true);
    } else {
      setIsCorrectAnswer(false);
    }
    setTimeout(() => {
      resetColors();
    }, 1000)
   
  }

  useEffect(() => {
  const t = setTimeout(() => {
    setIsCorrectAnswer('')
    }, 1000);
  return () => clearTimeout(t);
  }, [isCorrectAnswer]);

  
  return (
    <section className='guess__section'>
      <h2>Guess color game!</h2>
      <div className="guess__wrapper">
        <div className="guess__color-questions">
          <div className="guess__color-question" style={{background : `${colorToGuess}`}}></div>
          <div className={`guess__color-error ${isCorrectAnswer === false ? 'active' : ''}`}>Wrong o.O</div>
        </div>
        <div className="guess__color-answers">
          {answers.map(answer => {
            const correctClassName = answer === colorToGuess && isCorrectAnswer ? 'correct' : ''
            return (
              <button key={answer} onClick={() => handleClickAnswer(answer)} style={{background: `${themeColor}`}} className={`guess__color-answer ${correctClassName}`}>
                {answer}
              </button>
            )        
          }   
          )}
        </div>
      </div>
    </section>
  )
}

export default GuessColor