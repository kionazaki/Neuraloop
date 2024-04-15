import React from 'react';
import { View, Text, Button } from 'react-native';

const Screen1 = ({ navigation }) => {
    return (
        <View>
            <Text>Экран 1</Text>
            <Button
                title="Перейти к экрану 2"
                onPress={() => navigation.navigate('Screen2')}
            />

            <Button
                title="Алерт"
                onPress={() => alert('Screen2')}
            />

            <Button
                title="Перейти к экрану 3"
                onPress={() => navigation.navigate('Screen3')}
            />
        </View>
    );
};

export default Screen1;
