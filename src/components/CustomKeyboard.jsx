import React, { useState, useRef } from 'react'
import Keyboard from 'react-simple-keyboard'
import "react-simple-keyboard/build/css/index.css";

export const CustomKeyboard = () => {
  const keyboard = useRef();

  const [input, setInput] = useState('');
  
  const onChange = (input) => {
    setInput(input);
    console.log("Input changed", input);
  };

  const onKeyPress = (button) => {
    console.log("Button pressed", button);
  };

  const onChangeInput = (event) => {
    setInput(event.target.value);
    keyboard.current.setInput(input);
  };

  return (
    <>
      <input
        value={input}
        placeholder={"Tap on the virtual keyboard to start"}
        onChange={onChangeInput}
      />
      <Keyboard
        keyboardRef={r => (keyboard.current = r)}
        onChange={onChange}
        onKeyPress={onKeyPress}
        layout={{
          default: [
            "Q W E R T Y U I O P",
            "A S D F G H J K L",
            "{enter} Z X C V B N M {bksp}"
          ]
        }}
        // buttonTheme={[
        //   {
        //     class: 'absent',
        //     buttons: absentLetters
        //   },
        //   {
        //     class: 'present',
        //     buttons: presentLetters
        //   },
        //   {
        //     class: 'correct',
        //     buttons: correctLetters
        //   },
        // ]}
      />
  </>
  )
}
