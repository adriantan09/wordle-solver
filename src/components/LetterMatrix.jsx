import React from 'react'
import styled from 'styled-components'

export const LetterMatrix = ({ type, letters, setLetters }) => {

  const handleInput = (e) => {
    // letters only
    const re = /^[A-Za-z]{1}$/g;
    const isLetter = re.test(e.key)
    if (!isLetter) e.preventDefault();
  }

  return ( 
    <Form>
        {[...Array(letters.length)].map((x, i) => (
            <LetterBox 
              key={i}
              className='letter'
              name={type}
              maxLength={1}
              onKeyPress={handleInput}
              onChange={e => setLetters(e, i)}
              value={letters[i].toUpperCase()}
              autoComplete='off'
            />
        ))}
    </Form>
  )
}

const LetterBox = styled.input`
  width: 39px;
  height: 39px;
  text-align: center;
  font-size: 20pt;
`

const Form = styled.form`
  max-width: 300px;
`