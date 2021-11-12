import { useState } from "react";
import { Maintainer, Buttons, Input, Divbuttons } from "./StyleSheet"

function App() {
  const [state, setState] = useState({
    actualValue: "",
    dublicateValue: "",
    timer: false,
    numberIsset: false
  });
  const [counter, setCounter] = useState(0);
  function numberWala(e) {
    let a = e.target.value[e.target.value.length - 1];
    window.temp = setTimeout(numberFun, 300, a);
  }
  function alphaWala(e, counter, c, ag) {
    if (state.numberIsset) {
      setState({
        ...state,
        numberIsset: false
      });
      setCounter(0);
    } else {
      clearTimeout(window.temp);
      if (c) {
        let a = e.target.value[counter % 4];
        pickupwrite(a);
      } else if (ag) {
        let a = e.target.value;
        pickupwrite(a);
      } else {
        let a = e.target.value[counter % 3];
        pickupwrite(a);
      }
    }
  }
  function numberFun(a) {
    a = state.actualValue + a;
    setState({
      ...state,
      actualValue: a,
      dublicateValue: a,
      numberIsset: true
    });
  }
  function pickupwrite(a) {
    if (state.timer) {
      clearTimeout(window.temp2);
      window.timertemp = state.dublicateValue;
      setState({
        ...state,
        actualValue: window.timertemp + a,
      });
      window.temp2 = setTimeout(alphaFun, 1000, a);
    } else {
      window.timertemp = state.dublicateValue;
      setState({
        ...state,
        actualValue: window.timertemp + a,
        timer: true
      });
      window.temp2 = setTimeout(alphaFun, 1000, a);
    }
  }
  function alphaFun(a) {
    window.timertemp = state.dublicateValue;
    setState({
      ...state,
      actualValue: window.timertemp + a,
      dublicateValue: window.timertemp + a,
      timer: false
    });
    setCounter(0);
  }
  return (
  <Maintainer>
      <Input className="input" type="text" value={state.actualValue} readOnly={true} /><br />
      <Divbuttons>
        <Buttons
          onMouseDown={
            e => numberWala(e)
          }
          onMouseUp={
            e => {
              setCounter(counter + 1);
              alphaWala(e, counter, false);
            }
          }
          value=",.!1"
        >, . ! 1</Buttons>
        <Buttons
          onMouseDown={
            e => numberWala(e)
          }
          onMouseUp={
            e => {
              setCounter(counter + 1);
              alphaWala(e, counter, false);
            }
          } value="abc2">abc 2</Buttons>
        <Buttons
          onMouseDown={
            e => numberWala(e)
          }
          onMouseUp={
            e => {
              setCounter(counter + 1);
              alphaWala(e, counter, false);
            }
          } value="def3">def 3</Buttons>
        <Buttons
          onMouseDown={
            e => numberWala(e)
          }
          onMouseUp={
            e => {
              setCounter(counter + 1);
              alphaWala(e, counter, false);
            }
          } value="ghi4">ghi 4</Buttons>
        <Buttons
          onMouseDown={
            e => numberWala(e)
          }
          onMouseUp={
            e => {
              setCounter(counter + 1);
              alphaWala(e, counter, false);
            }
          } value="jkl5">jkl 5</Buttons>
        <Buttons
          onMouseDown={
            e => numberWala(e)
          }
          onMouseUp={
            e => {
              setCounter(counter + 1);
              alphaWala(e, counter, false);
            }
          } value="mno6">mno 6</Buttons>
        <Buttons
          onMouseDown={
            e => numberWala(e)
          }
          onMouseUp={
            e => {
              setCounter(counter + 1);
              alphaWala(e, counter, true);
            }
          } value="pqrs7">pqrs 7</Buttons>
        <Buttons
          onMouseDown={
            e => numberWala(e)
          }
          onMouseUp={
            e => {
              setCounter(counter + 1);
              alphaWala(e, counter);
            }
          } value="tuv8">tuv 8</Buttons>
        <Buttons
          onMouseDown={
            e => numberWala(e)
          }
          onMouseUp={
            e => {
              setCounter(counter + 1);
              alphaWala(e, counter, true);
            }
          } value="wxyz9">wxyz 9</Buttons>
        <Buttons className="buttons"
          onMouseDown={
            e => numberWala(e)
          }
          onMouseUp={
            e => {
              setCounter(counter + 1);
              alphaWala(e, counter, false, true);
            }
          } value="*">*</Buttons>
        <Buttons
          onMouseDown={
            e => numberWala(e)
          }
          onMouseUp={
            e => {
              setCounter(counter + 1);
              alphaWala(e, counter, false, true);
            }
          } value="0">0</Buttons>
        <Buttons
          onMouseDown={
            e => numberWala(e)
          }
          onMouseUp={
            e => {
              setCounter(counter + 1);
              alphaWala(e, counter, false, true);
            }
          } value="#">#</Buttons>
      </Divbuttons>
    </Maintainer>
  );
}

export default App;
