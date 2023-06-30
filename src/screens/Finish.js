import { View, StyleSheet, Image, TouchableOpacity, Text as NativeText } from 'react-native'; 
import { globalStyles } from '../global/styles';
import { useNavigation } from '@react-navigation/native';

import morango from '../assets/donuts1.png';
import { useEffect } from 'react';

export default function Finish() {
    const navigation = useNavigation();

    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('Home');
        }, 3000)
    }, [])

    return (
        <View style={styles.container}>
            <View style={{...globalStyles.footer, top: 0}} /> 

            <NativeText style={styles.title}>Donuts City</NativeText> 

            <Image 
                source={morango}
                style={styles.img}
                resizeMode="contain"
            />

            <NativeText style={styles.title}>Até a próxima !</NativeText> 

            <View style={globalStyles.footer} />  
        </View>
    )
}
 
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FCE4EC', 
      alignItems: `center`,
      justifyContent: `center`
    },      
    title: {
        color: '#000',
        fontFamily: 'Qwigley_400Regular',
        fontSize: 64
    },  
    img: {
        width: 240,
        height: 240,
        marginBottom: 48
    },
    button: {
        backgroundColor: '#D9D9D9',
        padding: 12,
        borderRadius: 999, 
        minWidth: '80%',
        alignItems: 'center',
        marginTop: 56
    },
});