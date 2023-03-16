import React, { useEffect } from 'react'
import { StatusBar, Text, View } from 'react-native'

import { NavigationContainer } from '@react-navigation/native';
import Navigator from './navigation/navigator.js';
// import { Provider } from 'react-redux'
// import { Store } from './redux/store';

export default function App() {


  return (
    // <Provider store={Store} >
    <View style={{ width: '100%', height: '100%', backgroundColor: 'white' }} >
      <StatusBar
        backgroundColor={'#833d07'}
      // hidden={true}

      />
      <NavigationContainer>
        <Navigator />
      </NavigationContainer>
    </View>
    // </Provider>
  )
}
