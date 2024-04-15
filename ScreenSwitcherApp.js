import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const ScreenSwitcherApp = () => {
    const [currentScreen, setCurrentScreen] = useState(1);

    const screens = [
        { id: 1, title: 'Экран 1', buttonText: 'Перейти к экрану 2', nextScreenId: 2 },
        { id: 2, title: 'Экран 2', buttonText: 'Перейти к экрану 3', nextScreenId: 3 },
        { id: 3, title: 'Экран 3', buttonText: 'Перейти к экрану 4', nextScreenId: 4 },
        { id: 4, title: 'Экран 4', buttonText: 'Перейти к экрану 5', nextScreenId: 5 },
        { id: 5, title: 'Приветствие', specialText: 'Привет мир', buttonText: 'Перейти к экрану 1', nextScreenId: 1 }
        // Добавьте описания для остальных экранов
    ];

    const renderScreen = () => {
        const currentScreenData = screens.find(screen => screen.id === currentScreen);

        if (!currentScreenData) return null;

        const { title, specialText } = currentScreenData;

        return (
            <View>
                <Text>{title}</Text>
                {specialText ? <Text>{specialText}</Text> : null}
                {screens.map(screen => (
                    <Button
                        key={screen.id}
                        title={screen.buttonText}
                        onPress={() => setCurrentScreen(screen.id)}
                        style={styles.button}
                    />
                ))}
            </View>
        );
    };

    return (
        <View>
            {renderScreen()}
        </View>
    );
};

const styles = StyleSheet.create({
    button: {
        marginBottom: 10,
    },
});

export default ScreenSwitcherApp;
