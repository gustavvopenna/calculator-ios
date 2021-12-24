import { StyleSheet } from "react-native";

export const pallete = {
  deepGray: '#2D2D2D',
  lightGray: '#9B9B9B',
  orange: '#ff9427'
}

const BUTTON_SIZE: number = 80

export const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: 'black',
  },
  container: {
    paddingHorizontal: 10,
    flex: 1,
    justifyContent: 'flex-end'
  },
  result: {
    color: 'white',
    fontSize: 60,
    textAlign: 'right'
  },
  resultSmall: {
    color: 'rgba(255, 255, 255, 0.85)',
    fontSize: 25,
    textAlign: 'right'
  },
  row: {
    marginVertical: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  button: {
    width: BUTTON_SIZE,
    height: BUTTON_SIZE,
    marginHorizontal: 10,
    borderRadius: BUTTON_SIZE * 2,
    backgroundColor: '#9b9b9b',
    display: 'flex',
    justifyContent: 'center'
  },
  buttonText: {
    color: 'black',
    fontSize: 24,
    fontWeight: '600',
    textAlign: 'center'
  }
})