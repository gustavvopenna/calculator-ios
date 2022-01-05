import { useRef, useState } from "react"

export enum Operators {
  divide, multiply, add, substract
}

export const useCalculator = () => {
  const [number, setNumber] = useState('0')
  const [prevNumber, setPrevNumber] = useState('0')
  const currentOperation = useRef<Operators>()

  const clean = () => {
    setNumber('0')
  }

  const deleteFn = () => {
    if(number.length === 1) setNumber('0')
    else if(number.length === 2 && number.startsWith('-')) setNumber('0')
    else setNumber(number.slice(0, -1))
  }

  const buildNumber = (input: string) => {
    // Do not allow doble points
    if (number.includes('.') && input === '.') return;
    
    if(number.startsWith('0') && !number.includes('.')) {
      // Do not allow duplicated zeros if number is an integer 
      if(input === ('0')) return;
      // Allow 0.00000
      if(input === '.') {
        setNumber(number + input)
      // Replace 0 with input number
      } else {
        setNumber(input)
      }
    } else {
      setNumber(number + input)
    }
  }

  const savePrevNumber = () => {
    setPrevNumber(number)
    setNumber('0')
  }

  const divide = () => {
    savePrevNumber()
    currentOperation.current = Operators.divide
  }

  const multiply = () => {
    savePrevNumber()
    currentOperation.current = Operators.multiply
  }

  const add = () => {
    savePrevNumber()
    currentOperation.current = Operators.add
  }

  const substract = () => {
    savePrevNumber()
    currentOperation.current = Operators.substract
  }

  const calculate = () => {
    if(prevNumber === '0') return;

    const num1 = Number(prevNumber)
    const num2 = Number(number)

    switch(currentOperation.current) {
      case Operators.add:
        setNumber(`${num1 + num2}`)
        break;
      case Operators.substract:
        setNumber(`${num1 - num2}`)
        break;
      case Operators.multiply:
        setNumber(`${num1 * num2}`)
        break;
      case Operators.divide:
        setNumber(`${num1 / num2}`)
        break;
    }
    setPrevNumber('0')
  }

  const switchSign = () => number.includes('-')
    ? setNumber(number.replace('-', ''))
    : setNumber('-' + number)
  
  return {
    prevNumber,
    number,
    add,
    substract,
    multiply,
    divide,
    calculate,
    clean,
    buildNumber,
    switchSign,
    deleteFn
  }
}
