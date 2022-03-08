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
    <div>
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
              state={type}
            />
        ))}
    </div>
  )
}

const LetterBox = styled.input`
  width: 40px;
  height: 40px;
  font-size: 17pt;
  text-align: center;
  font-weight: bold;

  background-color: ${(props) => (
    props.value && (
      (props.state === 'correct' && '#538d4e;')
      ||
      (props.state === 'present' && '#b59f3b;')
      ||
      (props.state === 'absent' && '#3a3a3c;')
    )
  )};
  color: white;

`
