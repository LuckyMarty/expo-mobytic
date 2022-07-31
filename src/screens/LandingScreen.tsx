import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import { RouteParams } from '../navigation/RootNavigator'
import { HomeScreen } from './HomeScreen'

interface LandingScreenProps {}


export const LandingScreen: React.FunctionComponent<LandingScreenProps> = () => {
    
    const navigation = useNavigation<NativeStackNavigationProp<any>>()
    const onPress = () => {
        navigation.navigate('HomeScreen')
    }

    return (
        <View style={styles.container}>
            <View style={styles.body}>
                <Image source={require('../images/logo/Logo-Mobytic.png')} style={styles.logo} />
                <TouchableOpacity
                    onPress={onPress}
                >
                    <Text style={styles.btn}>Mes Actualités</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    body: {
        flex: 9,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        height: 100,
        width: 200,
        resizeMode: 'contain',
    },
    btn: {
        backgroundColor: '#07402B',
        padding: 15,
        marginTop: 25,
        color: 'white',
        fontWeight: 'bold'
    }
})