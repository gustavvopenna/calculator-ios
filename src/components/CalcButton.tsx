import React from 'react'
import { Pressable, Text, View } from 'react-native'
import { pallete, styles } from '../theme'

interface CalcButtonProps {
  action: (numberText: string) => void,
  color?: keyof typeof pallete
  isWide?: boolean
  text: string
}

const BUTTON_WIDTH = 80

export default function CalcButton({ action, color = 'deepGray', text = 'A', isWide = false }: CalcButtonProps) {
  return (
    <Pressable onPress={() => action(text)}>
      <View style={{
        ...styles.button,
        backgroundColor: pallete[color],
        width: isWide ? BUTTON_WIDTH * 2.2 : BUTTON_WIDTH
      }}>
          <Text style={{
            ...styles.buttonText,
            color: color === 'deepGray' ? 'white' : 'black'
          }}>
            {text}
          </Text>
        </View>
    </Pressable>
  )
}
