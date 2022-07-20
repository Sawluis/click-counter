import './App.css';
import YourNameLogo from './images/your-name.jpg';
import Button from './components/Button';
import Counter from './components/Counter';
import { useState } from 'react';

function App() {

  const [clicksNumber, setclicksNumber] = useState(0);

  const clickFunctionSum = () => {
    setclicksNumber(clicksNumber + 1);
  };

  const clickFunctionSub = () => {
    if (clicksNumber > 0) { setclicksNumber(clicksNumber - 1); }
  };

  const restartCountFunction = () => {
    setclicksNumber(0);
  };

  const asignedFunction = () => {
    setclicksNumber(clicksNumber + 1000);
  };

  const asignedSubFunction = () => {
    if (clicksNumber >= 50) { setclicksNumber(clicksNumber - 50); }
  };

  const asignedSumFunction = () => {
    setclicksNumber(clicksNumber + 50)
  };

  return (
    <div className='App'>
      <div className="logo-container">
        <img className='logo' src={YourNameLogo} alt='Logo Principal'/>
      </div>
      <div className='principal-container'>
        <Counter clicksNumber={clicksNumber} />
      	<Button 
          text='+1'
          isClicked={true}
          click={clickFunctionSum} />
          <Button 
          text='-1'
          isClicked={true}
          click={clickFunctionSub} />
        <Button
          text='+1000'
          isClicked={true}
          click={asignedFunction} />
        <Button
          text='+50'
          isClicked={true}
          click={asignedSumFunction} /> 
        <Button
          text='-50'
          isClicked={true}
          click={asignedSubFunction} />
        <Button 
          text='Restart'
          isClicked={false}
          click={restartCountFunction} />
      </div>
    </div>

  );
}

export default App;
