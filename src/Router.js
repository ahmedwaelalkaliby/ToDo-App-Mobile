import React from 'react'
import { NavgationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from './Home';


const Router = () => {
const stack = createNativeStackNavigator();
    return (
    <NavgationContainer>
        <stack.Navigator>
            <stack.Screen name='Home' component={Home} />
       </stack.Navigator>
    </NavgationContainer>
  )
}

export default Router