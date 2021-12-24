import React from 'react'
import { Text, View } from 'react-native'
import CalcButton from '../components/CalcButton'
import { styles } from '../theme'

export default function CalculatorScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.resultSmall}>400.00</Text>
      <Text style={styles.result}>1,500.00</Text>
      <View style={styles.row}>
        <CalcButton text="C" color='lightGray' />
        <CalcButton text="+/-" color='lightGray' />
        <CalcButton text="del" color='lightGray' />
        <CalcButton text="/" color='orange' />
      </View>
      <View style={styles.row}>
        <CalcButton text="7" />
        <CalcButton text="8" />
        <CalcButton text="9" />
        <CalcButton text="X" color='orange' />
      </View>
      <View style={styles.row}>
        <CalcButton text="4" />
        <CalcButton text="5" />
        <CalcButton text="6" />
        <CalcButton text="-" color='orange' />
      </View>
      <View style={styles.row}>
        <CalcButton text="1" />
        <CalcButton text="2" />
        <CalcButton text="3" />
        <CalcButton text="+" color='orange' />
      </View>
      <View style={styles.row}>
        <CalcButton text="0" isWide />
        <CalcButton text="." />
        <CalcButton text="=" color='orange' />
      </View>
    </View>
  )
}
