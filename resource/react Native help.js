import { TouchableWithoutFeedback } from "react-native"

const pressbutton = () => alert('Приклад') //пример вызова всплывающего окна стрелочной функцией

//заготовка Всплывающего окна(уведомление внутри приложения) на две кнопки стрелочной функцией
const pressbutton = () => Alert.alert("Error", "Ти дебіл", [
    { text: "Ну то правда", onPress: () => console.log('Ну то привіт!') },
    { text: "Брехня!", onPress: () => console.log('Ну то бувай!') }
])
//заготовка Всплывающего окна(уведомление внутри приложения) на две кнопки стрелочной функцией

numberOfLines = { 1} //количество допустимых абзацев для тега <Text></Text>

onPress = {()=> стрелочная функиця или console.log()} //проверка нажатия на ТЕГ!

<TouchableWithoutFeedback></TouchableWithoutFeedback> //кликабельность картинки(и может ещёчего то) без эффектов

//подключение шрифта
import * as Font from 'expo-font'
const fonts = () => Font.loadAsync({
    'назвашрифта*': require('шлях і назвафайлу')
});  // перед exort default


expo install expo - app - loading

import { AppLoading } from 'expo-app-loading'
const [font, setFont] = useState(false)
if (font) {
    return (/*прога*/)
}
else {
    return (
        <AppLoading startAsync={fonts} onFinish={() => setFont(true)} />
    );
}//всередені exort default

//style
fontFamily: 'назвашрифта*'
//подключение шрифта