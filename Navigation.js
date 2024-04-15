import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Screen1 from './Screen1';
import Screen2 from './Screen2';
import Screen3 from './Screen3';

const Stack = createStackNavigator();

const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="Screen1"
                screenOptions={{ animationEnabled: false }} // Отключаем анимацию перехода
            >
                <Stack.Screen name="Screen1" component={Screen1} />
                <Stack.Screen name="Screen2" component={Screen2} />
                <Stack.Screen name="Screen3" component={Screen3} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Navigation;
