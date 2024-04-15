import React from 'react';
import { View, Text, Button } from 'react-native';

const Screen2 = ({ navigation }) => {
    return (
        <View>
            <Text>Экран 2</Text>
            <Button
                title="Перейти к экрану 3"
                onPress={() => navigation.navigate('Screen3')}
            />
        </View>
    );
};

export default Screen2;
