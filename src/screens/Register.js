import { View, StyleSheet, TouchableOpacity, ToastAndroid, ScrollView, Text as H1 } from 'react-native'; 
import { globalStyles } from '../global/styles';
import Text from '../components/Text';
import Input from '../components/Input';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Register() {
    const navigation = useNavigation();

    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [phone, setPhone] = useState();
    const [pw, setPw] = useState();
    const [confirmPw, setConfirmPw] = useState(); 

    async function register() {
        if(!name || !email || !phone || !pw) {
            ToastAndroid.show(`Preencha todos os campos`, 400);
            return;
        }

        if(pw !== confirmPw) {
            ToastAndroid.show(`As senhas são diferentes`, 400);
            return;
        }

        const customers = await AsyncStorage.getItem('@donuts:clients');

        const parsed = JSON.parse(customers);

        if(!customers) {
            const newCustomers = [{
                name,
                email,
                phone,
                pw,
                confirmPw
            }]

            await AsyncStorage.setItem('@donuts:clients', JSON.stringify(newCustomers)); 
            ToastAndroid.show(`O cliente ${name} foi cadastrado com sucesso`, 400);
            navigation.goBack()
            return;
        }

        const emailExists = parsed.find((customer) => customer.email == email);

        if(emailExists) {
            ToastAndroid.show(`Email ja cadastrado`, 400);
            return;
        }

        const newCustomers = [...parsed, {
            name,
            email,
            phone,
            pw,
            confirmPw
        }]

        await AsyncStorage.setItem('@donuts:clients', JSON.stringify(newCustomers));
        ToastAndroid.show(`O cliente ${name} foi cadastrado com sucesso`, 400);
        navigation.goBack()
        return; 
    }

    return (
        <View style={styles.container}>
            <ScrollView 
                contentContainerStyle={{
                    alignItems: 'center' 
                }}
                style={{
                    marginTop: 72
                }}
            > 
                <H1 style={styles.title}>Cadastro de cliente</H1>
                
                <Input label="Nome:" onChangeText={(text) => setName(text)} />
                <Input label="E-mail:" onChangeText={(text) => setEmail(text)} />
                <Input label="Telefone:" onChangeText={(text) => setPhone(text)} />
                <Input label="Criar Senha:" onChangeText={(text) => setPw(text)} password />
                <Input label="Confirmar Senha:" onChangeText={(text) => setConfirmPw(text)} password /> 

                <TouchableOpacity style={styles.button} onPress={register}>
                    <Text>CADASTRAR</Text> 
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
    img: {
        width: 124,
        height: 124,
        marginBottom: 64
    },
    title: {
        color: '#000',
        fontFamily: 'Qwigley_400Regular',
        fontSize: 64,
        marginBottom: 48
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