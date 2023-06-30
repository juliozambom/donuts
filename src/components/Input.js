import { View, TextInput, StyleSheet } from 'react-native';
import Text from './Text';

export default function Input({ label, onChangeText, password }) {
    return (
        <View style={styles.container}>
            <Text>{label}</Text>
            <TextInput secureTextEntry={!!password} style={styles.input} onChangeText={onChangeText} />  
        </View>
    )
}

const styles = StyleSheet.create({
    container: {

    },  
    input: {
        backgroundColor: '#D9D9D9',
        padding: 12,
        minWidth: '90%',
        alignItems: 'center',  
        marginBottom: 16
    }
})