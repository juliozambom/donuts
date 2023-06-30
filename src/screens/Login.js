import { View, StyleSheet, TouchableOpacity, ToastAndroid, ScrollView, Text as H1 } from 'react-native'; 
import { globalStyles } from '../global/styles';
import Text from '../components/Text';
import Input from '../components/Input';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Login() {
    const navigation = useNavigation();

    const [email, setEmail] = useState();
    const [pw, setPw] = useState();

    async function login() { 
        if(!email || !pw) {
            ToastAndroid.show(`Preencha todos os campos`, 400);
            return;
        }

        const customers = await AsyncStorage.getItem('@donuts:clients');

        const parsed = JSON.parse(customers);

        if(!parsed) { 
            ToastAndroid.show(`E-mail não cadastrado`, 400); 
            return
        }

        const customerExists = parsed.find((customer) => customer.email == email);

        if(!customerExists || !parsed) { 
            ToastAndroid.show(`E-mail não cadastrado`, 400);
            return
        }

        const isPasswordCorrect = customerExists.pw == pw

        if(!isPasswordCorrect) {
            ToastAndroid.show(`Senha incorreta`, 400);
            return;
        }

        navigation.navigate('Menu');

        return; 
    }

    return (
        <View style={styles.container}>
            <ScrollView 
                contentContainerStyle={{
                    alignItems: 'center',
                }} 
                style={{ 
                    marginTop: 72,
                }}
            >
                <H1 style={styles.title}>Entrar</H1>
                <Input label="E-mail:" onChangeText={(text) => setEmail(text)} />
                <Input label="Senha:" onChangeText={(text) => setPw(text)} password />

                <TouchableOpacity style={styles.button} onPress={login}>
                    <Text>ENTRAR</Text> 
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
                    <Text>VOLTAR</Text>
                </TouchableOpacity>  
            </ScrollView>

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
        fontSize: 64,
        marginBottom: 48
    }, 
    img: {
        width: 124,
        height: 124,
        marginBottom: 64
    },
    button: {
        backgroundColor: '#D9D9D9',
        padding: 12,
        borderRadius: 999, 
        minWidth: '50%',
        alignItems: 'center',
        marginBottom: 16
    },
});