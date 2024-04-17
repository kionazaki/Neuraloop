import * as Speech from 'expo-speech';

export const data = { engVoices: null, rusVoices: null }

export const sayIt = () => {

    let ttt = data.engVoices[2];

    const options = {
        language: ttt.language, // Здесь указывается код языка (например, 'ru-RU' для русского)
        pitch: 1, // Высота тона (1 - нормальный, меньше 1 - более низкий, больше 1 - более высокий)
        rate: 1, // Скорость речи (1 - нормальная, меньше 1 - медленнее, больше 1 - быстрее)
        voice: ttt.identifier
    };

   // Speech.speak("Привет, мир!", options);


    console.warn(options.language);

    Speech.speak("Test me, test my! Розмова украънськаю, разговор на русском, english conversation", options);
}

export async function getAvailableVoices() {
    try {
        const voices = await Speech.getAvailableVoicesAsync();
        data.engVoices = voices.filter(a => a.language.startsWith("en"));
        data.rusVoices = voices.filter(a => a.language.startsWith("ru"));

        console.warn(data);
    } catch (error) {
        alert('Ошибка при получении списка голосов:');
    }
}





// const ssu = new SpeechSynthesisUtterance();
// let engVoices, rusVoices;
//
// speechSynthesis.onvoiceschanged = () => {
//     let voices = speechSynthesis.getVoices();
//     engVoices = voices.filter(a => a.lang.startsWith("en"));
//     rusVoices = voices.filter(a => a.lang.startsWith("ru"));
// }
//
// export const sayIt = () => {
//     ssu.text = "baba was its very was";
//     ssu.lang = "en";
//     ssu.volume = 1;
//     ssu.voice = engVoices[0];
//     speechSynthesis.cancel();
//     speechSynthesis.speak(ssu);
//
//     console.warn(ssu.text);
// }