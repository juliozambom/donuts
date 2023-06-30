import { View, StyleSheet, Image, TouchableOpacity, Text as NativeText } from 'react-native'; 
import { globalStyles } from '../global/styles';
import { useNavigation } from '@react-navigation/native';
import Text from '../components/Text';
import { useState } from 'react';

export default function Donut({ route }) {
    const navigation = useNavigation();

    const [count, setCount] = useState(1); 

    return (
        <View style={styles.container}>
            <NativeText style={styles.title}>{route.params.title}</NativeText>
            <Image 
                source={route.params.img}
                style={styles.img}
                resizeMode="contain"
            />

            <Text>Quantidade</Text>
            <View style={styles.row}>
                <NativeText style={styles.count} onPress={() => setCount(prev => prev > 0 ? prev - 1 : prev)}> 
                    -
                </NativeText>
                <NativeText style={styles.count}> 
                    {count}
                </NativeText>
                <NativeText  style={styles.count} onPress={() => setCount(prev => prev + 1)}> 
                    +
                </NativeText>
            </View>

            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Checkout')}>
                <Text>Finalizar compra</Text>
            </TouchableOpacity>
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
    row: {
        flexDirection: 'row',
        gap: 8
    },  
    count: {
        fontSize: 32,
        color: '#000',
        fontFamily: 'Iceberg_400Regular'
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