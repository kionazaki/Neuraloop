import React from 'react';
import { View, Text, Button } from 'react-native';

const Screen3 = ({ navigation }) => {
    return (
        <View>
            <Text>Экран 3</Text>
            <Button
                title="Перейти к экрану 1"
                onPress={() => navigation.navigate('Screen1')}
            />
        </View>
    );
};

export default Screen3;
