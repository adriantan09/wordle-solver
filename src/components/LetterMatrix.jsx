import React from 'react'
import styled from 'styled-components'

export const LetterMatrix = ({ type, letters, setLetters }) => {

  const handleInput = (e) => {
    // letters only
    const re = /^[A-Za-z]{1}$/g;
    const isLetter = re.test(e.key)
    console.log(e.key)
    if (!(isLetter || e.key == 'Backspace')) {
      console.log('no')
      e.preventDefault();
    }
    // handleTab(e, isLetter)
  }

  const handleTab = (e, isLetter) => {
      // const form = e.target.form;
      // let index = [...form].indexOf(e.target);
      // console.log('form', form) 

      // if (e.key == 'Backspace') index -= 1
      // if (isLetter) index += 1

      // // e.target.value != '' ? index += 1 : index -= 1
      // const nextElement = form.elements[index]
      // nextElement?.focus();
      // e.preventDefault();
  }

  return ( 
    <form>
        {[...Array(letters.length)].map((x, i) => (
            <LetterBox key={i} className='letter' name={type} maxLength={1} onChange={e => setLetters(e, i)} value={letters[i].toUpperCase()}/>
        ))}
    </form>
  )
}

const LetterBox = styled.input`
  width: 40px;
  height: 40px;
`
