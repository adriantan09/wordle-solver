import { React, useState } from 'react';
import styled from 'styled-components';
import { validSolutions } from './source-code-arrays.js';
import { LetterMatrix } from './LetterMatrix';

const App = () => {

  const [possibleWords, setPossibleWords] = useState('')
  const [form, setForm] = useState({
    correctLetters: Array(5).fill(''),
    presentLetters: Array(5).fill(''),
    absentLetters: Array(12).fill(''),
  })

  const handleChange = (e, index) => {
    const key = e.target.name + 'Letters'
    form[key][index] = e.target.value.toLowerCase()
    setForm((prevState) => {
      return {
        ...prevState,
        [key]: form[key]
      }
    })
  }

  const handleReset = () => {
    setForm({
      correctLetters: Array(5).fill(''),
      presentLetters: Array(5).fill(''),
      absentLetters: Array(12).fill(''),
    })
    setPossibleWords('')
  }

  const solve = () => {
    let absentLetters = form.absentLetters.filter(l => l !== '')
    absentLetters = [...new Set(absentLetters)]

    const correctLetters = form.correctLetters
    const presentLetters = form.presentLetters

    let filteredSolutions = validSolutions

    absentLetters.forEach(al => {
      filteredSolutions = filteredSolutions.filter(w => !w.includes(al))
    })

    for (let i = 0; i < 5; i++) {
      if (correctLetters[i]) {
        filteredSolutions = filteredSolutions.filter(w => w[i] === correctLetters[i])
      }
      if (presentLetters[i]) {
        filteredSolutions = filteredSolutions.filter(w => w.includes(presentLetters[i]) && w[i] !== presentLetters[i])
      }
    }
    
    if (filteredSolutions.length > 0) {
      setPossibleWords(filteredSolutions.join(', '))
    } else {
      setPossibleWords('Could not find any possible words. :(')
    }
  }

  return (
      <Container>
        <h1>Wordle Solver</h1>
        <label htmlFor="correct">Enter correct letters*</label>
        <LetterMatrix type='correct' letters={form.correctLetters} setLetters={handleChange} />

        <label htmlFor="present">Enter present letters*</label>
        <LetterMatrix type='present' letters={form.presentLetters} setLetters={handleChange} />

        <label htmlFor="absent">Enter absent letters</label>
        <LetterMatrix type='absent' letters={form.absentLetters} setLetters={handleChange} />
        
        <div>
          <Button onClick={handleReset}>Reset</Button>
          <Button onClick={solve}>Solve</Button>
        </div>
        <Disclaimer>*Letter position matters for correct and present letters</Disclaimer>
        <label htmlFor="possible-words">Possible words</label>
        <Result type="text" name="possible-words" id="possible-words" readOnly value={possibleWords}/>

        <Link href="https://github.com/adriantan09/wordle-solver" target="_blank">About</Link>
      </Container>
  );
}

export default App;

const Container = styled.div`
  text-align: center;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (prefers-color-scheme: light) {
    h1, label, p, a { color: black; }
    background-color: #FFFBFB;
  }

  @media (prefers-color-scheme: dark) {
    h1, label, p, a { color: white; }
    background-color: #282c34;
  }
`

const Disclaimer = styled.p`
  font-size: 11pt;
`

const Button = styled.button`
  font-size: 12pt;
  margin: 10px 5px 0 5px;
  line-height: 32px;
  padding: 0 20px;
  cursor: pointer;
  color: #000;
  background: #fff;
`

const Result = styled.textarea`
  width: 90%;
  max-width: 350px;
  height: 100px;
  font-size: 12pt;
  text-align: center;
  padding: 0 5px;
`

const Link = styled.a`
  text-decoration: none;
`
