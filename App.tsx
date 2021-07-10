import React from 'react'
import { SafeAreaView , StatusBar} from 'react-native';

import { CalculatorScreens } from './src/screens'
import { theme } from './src/theme/appTheme';

const App = () => {
  return (
    <SafeAreaView style={ theme.background }>
      <StatusBar 
      backgroundColor="black"
      barStyle='light-content' />
      <CalculatorScreens/>
    </SafeAreaView>
  )
}

export default App;