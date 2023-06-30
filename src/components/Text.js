import { Text as NativeText, StyleSheet } from 'react-native';

export default function Text({ children }) {
    return (
        <NativeText style={styles.text}>{children}</NativeText>
    )
}

const styles = StyleSheet.create({
    text: {
        color: '#000000',
        fontSize: 20,
        fontFamily: 'Iceberg_400Regular'
    }
})