import { View, StyleSheet, FlatList, Image, TouchableOpacity, Text as H1 } from 'react-native'; 
import { globalStyles } from '../global/styles';
import Text from '../components/Text';
import { useNavigation } from '@react-navigation/native'; 

import morango from '../assets/donuts1.png';
import chocolate from '../assets/chocolate.png';
import kinder from '../assets/kinder.png';
import ferrero from '../assets/ferrero.png';
import ninho from '../assets/ninho.png';
import oreo from '../assets/oreo.png';

import cart from '../assets/cart.png';

export default function Menu() {
    const navigation = useNavigation();

    const flavors = [
        { title: 'Chocolate', img: chocolate},
        { title: 'Morango', img: morango},
        { title: 'Kinder Bueno', img: kinder},
        { title: 'Ferreiro Rocher', img: ferrero},
        { title: 'Ninho', img: ninho},
        { title: 'Oreo', img: oreo},
    ]

    return (
        <View style={styles.container}>
            <H1 style={styles.title}>Cardapio</H1>
            <FlatList
                data={flavors}
                keyExtractor={(item) => item.title}
                style={{
                    width: '100%',
                    paddingHorizontal: 20
                }}
                renderItem={({ item }) => (
                    <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('Donut', {
                        title: item.title,
                        img: item.img 
                    })}>
                        <Image style={styles.img} source={item.img} resizeMode="contain"/>
                        <Text>{item.title}</Text>

                        <Image style={{...styles.img, position: 'absolute', right: 20}} source={cart} resizeMode="contain"/>
                    </TouchableOpacity>
                )}
            />

            <View style={globalStyles.footer} /> 
        </View>
    )
}
 
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FCE4EC', 
      alignItems: `center`,
      justifyContent: `center`,
      paddingTop: 48,
    },
    item: {
        flexDirection: 'row',
        alignItems: "center",
        gap: 10,
        width: '100%',
        marginBottom: 12
    },  
    title: {
        color: '#000',
        fontFamily: 'Qwigley_400Regular',
        fontSize: 64,
        marginBottom: 48
    }, 
    img: {
        height: 64,
        width: 64,
    },
});