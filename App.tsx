import { SafeAreaView, StyleSheet} from 'react-native'
import React from 'react'
import Home from './screens/home'
import { useTheme } from 'react-native-paper'

const App = () => {
  const {colors} = useTheme();

  const styles = StyleSheet.create({
    wrapper:{
      flex:1,
      alignItems: 'center',
      justifyContent: 'center',
      padding: 20,
    }
  })
  return (
    <SafeAreaView style={styles.wrapper}>
      <Home />
    </SafeAreaView>
  )
}

export default App
