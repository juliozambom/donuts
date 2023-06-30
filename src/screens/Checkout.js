import { View, StyleSheet, Image, TouchableOpacity, Text as NativeText } from 'react-native'; 
import { globalStyles } from '../global/styles';
import { useNavigation } from '@react-navigation/native';
import Text from '../components/Text';
import { useState } from 'react';

export default function Checkout({ route }) {
    const navigation = useNavigation();

    const [count, setCount] = useState(1); 

    return (
        <View style={styles.container}>
            <NativeText style={styles.title}>Área do Pagamento</NativeText> 

            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Finish')}>
                <Text>DINHEIRO</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Finish')}>
                <Text>CARTÃO DE CREDITO</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Finish')}>
                <Text>CARTAO DE DEBITO</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Finish')}>
                <Text>VALE REFEICAO</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Finish')}>
                <Text>PIX</Text> 
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
    title: {
        color: '#000',
        fontFamily: 'Qwigley_400Regular',
        fontSize: 64
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