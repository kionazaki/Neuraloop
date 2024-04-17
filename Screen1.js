import React from 'react';
import { View, Text, Button } from 'react-native';
import { sayIt, getAvailableVoices } from "./sayIt";

const Screen1 = ({ navigation }) => {
    return (
        <View>
            <Text>Экран 1</Text>
            <Button
                title="Перейти к экрану 2"
                onPress={() => navigation.navigate('Screen2')}
            />

            <Button
                title="getAvailableVoices"
                onPress={ getAvailableVoices }
            />

            <Button
                title="Алерт"
                onPress={ sayIt }
            />

            <Button
                title="Перейти к экрану 3"
                onPress={() => navigation.navigate('Screen3')}
            />
        </View>
    );
};

export default Screen1;


