import React, { useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import StackNav from '../screens/StackNav';


const Main =() => {
    const loggedIn = false;
    return (
       <NavigationContainer>
          <StackNav /> 
       </NavigationContainer>
    )
}

export default Main
