import { View, StyleSheet, Image, TouchableOpacity } from 'react-native'; 
import { globalStyles } from '../global/styles';
import donuts from '../assets/donuts1.png';
import title from '../assets/title.png';
import Text from '../components/Text';
import { useNavigation } from '@react-navigation/native';

export default function Home() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Image style={styles.imgTitle} source={title} />
            <Image style={styles.img} source={donuts} resizeMode="contain"/>

            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Register')}>
                <Text>Cadastro de cliente</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
                <Text>Entrar</Text>
            </TouchableOpacity>
 
            <View style={globalStyles.footer}/> 
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
    button: {
        backgroundColor: '#D9D9D9',
        padding: 12,
        borderRadius: 12,
        minWidth: '50%',
        alignItems: 'center',
        marginBottom: 16
    },
});