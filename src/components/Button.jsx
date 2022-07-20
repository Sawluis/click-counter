import React from 'react';
import '../styles/Button.css';

//function Button(props) {}

function Button({ text, isClicked, click }) {
  return (
    <button className={ isClicked ? 'click-button' : 'restart-button' }
      onClick={click}>
      {text}
    </button>
  );
}

export default Button;