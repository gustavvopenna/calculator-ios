import React from 'react'
import { Pressable, Text } from 'react-native'
import { pallete, styles } from '../theme'

interface CalcButtonProps {
  color?: 'orange' | 'deepGray' | 'lightGray'
  isWide?: boolean
  text: string
}

const BUTTON_WIDTH = 80

export default function CalcButton({ color = 'deepGray', text = 'A', isWide = false }: CalcButtonProps) {
  return (
    <Pressable style={{
      ...styles.button,
      backgroundColor: pallete[color],
      width: isWide ? BUTTON_WIDTH * 2.1 : BUTTON_WIDTH
    }}>
        <Text style={{
          ...styles.buttonText,
          color: color === 'deepGray' ? 'white' : 'black'
        }}>
          {text}
        </Text>
      </Pressable>
  )
}
