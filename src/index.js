import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import InitialScreen from './initialScreen';
import VideoPlsyer from './videoPlayer';

const Stack = createNativeStackNavigator();

export default function Navigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen name='initialScreen' component={InitialScreen} />
            <Stack.Screen name='videoPlayer' component={VideoPlsyer} />
        </Stack.Navigator>
    )
}