import { React, useState } from 'react';
import styled from 'styled-components';
import { validGuesses, validSolutions } from './source-code-arrays.js';
import { CustomKeyboard } from './components/CustomKeyboard';
import { LetterMatrix } from './components/LetterMatrix';

const App = () => {

  // These 3 arrays should be mutually exclusive
  const [form, setForm] = useState({
    correctLetters: Array(5).fill(''),
    presentLetters: Array(5).fill(''),
    absentLetters: Array(12).fill(''),
  })

  const [possibleWords, setPossibleWords] = useState([])

  // Check mutual exclusivity here later
  const handleChange = (e, index) => {
    const key = e.target.name + 'Letters'
    form[key][index] = e.target.value
    setForm((prevState) => {
      return {
        ...prevState,
        [key]: form[key]
      }
    })
    console.log(form)
  }

  const handleReset = () => {
    setForm({
      correctLetters: Array(5).fill(''),
      presentLetters: Array(5).fill(''),
      absentLetters: Array(12).fill(''),
    })
  }

  const solve = () => {
    console.log("Valid Solutions:", validSolutions.length)
    console.log("Valid Guesses:\t", validGuesses.length)

    // setPossibleWords()
  }

  return (
      <Container>
        <h1>Wordle Solver</h1>

        <p>Note: Letter position matters for correct and present letters</p>

        <label htmlFor="correct">Enter correct letters:</label>
        <LetterMatrix type='correct' letters={form.correctLetters} setLetters={handleChange} />
        <br />
        <label htmlFor="present">Enter present letters:</label>
        <LetterMatrix type='present' letters={form.presentLetters} setLetters={handleChange} />
        <br />
        <label htmlFor="absent">Enter absent letters:</label>
        <LetterMatrix type='absent' letters={form.absentLetters} setLetters={handleChange} />
        
        <br />
        <div className="btn-group">
          <button onClick={handleReset}>Reset</button>
          <button onClick={solve}>Solve</button>
        </div>
        <br />
        
        <label htmlFor="possible-words">Possible words</label>
        <Result type="text" name="possible-words" id="possible-words" readOnly value={possibleWords}/>  
        <br />
        <br />
        {/* Additions */}
        {/* <CustomKeyboard /> */}

      </Container>
  );
}

export default App;

const Container = styled.div`
  text-align: center;
  color: white;
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Result = styled.textarea`
  width: 400px;
  height: 100px;
  border-radius: 8px;
  border: none;
`