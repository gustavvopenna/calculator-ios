import React from 'react'
import { Text, View } from 'react-native'
import CalcButton from '../components/CalcButton'
import { styles } from '../theme'

import { useCalculator } from '../hooks/useCalculator'

export default function CalculatorScreen() {
  const {
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
  } = useCalculator()
  
  return (
    <View style={styles.container}>
      {
        prevNumber !== '0' && <Text style={styles.resultSmall}>{prevNumber}</Text>
      }
      <Text
        style={styles.result}
        numberOfLines={1}
        adjustsFontSizeToFit
        >
          {number}
        </Text>
      <View style={styles.row}>
        <CalcButton text="C" color='lightGray' action={clean}/>
        <CalcButton text="+/-" color='lightGray' action={switchSign} />
        <CalcButton text="del" color='lightGray' action={deleteFn}/>
        <CalcButton text="/" color='orange' action={divide}/>
      </View>
      <View style={styles.row}>
        <CalcButton text="7" action={buildNumber} />
        <CalcButton text="8" action={buildNumber} />
        <CalcButton text="9" action={buildNumber} />
        <CalcButton text="x" color='orange' action={multiply}/>
      </View>
      <View style={styles.row}>
        <CalcButton text="4" action={buildNumber} />
        <CalcButton text="5" action={buildNumber} />
        <CalcButton text="6" action={buildNumber} />
        <CalcButton text="-" color='orange' action={substract} />
      </View>
      <View style={styles.row}>
        <CalcButton text="1" action={buildNumber} />
        <CalcButton text="2" action={buildNumber} />
        <CalcButton text="3" action={buildNumber} />
        <CalcButton text="+" color='orange' action={add} />
      </View>
      <View style={styles.row}>
        <CalcButton text="0" action={buildNumber} isWide />
        <CalcButton text="." action={buildNumber} />
        <CalcButton text="=" color='orange' action={calculate} />
      </View>
    </View>
  )
}
