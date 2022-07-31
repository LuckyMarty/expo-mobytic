import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react'
import { Image, View, StyleSheet, Text, TouchableOpacity } from 'react-native'
import { RouteParams } from '../../navigation/RootNavigator';
import { NewsList } from '../../types/NewsList'

interface ListItemsProps {
    NewsList: NewsList;
}

export const ListItems: React.FunctionComponent<ListItemsProps> = ({
    NewsList,
}) => {

    const navigation = useNavigation<NativeStackNavigationProp<any>>()
    const onPress = () => {
        navigation.navigate('NewsScreen', {
            id: NewsList.id,
        })
    }

    return (
        <View style={styles.container}>
            <Image source={{ uri: NewsList.imageUrl }} style={styles.img} />
            <View style={styles.titleContainer}>
                <Text style={styles.title}>{NewsList.title}</Text>
            </View>
            <Text style={styles.summary}>{NewsList.summary}</Text>
            <View style={styles.readMore}>
                <TouchableOpacity onPress={onPress}>
                    <Text style={styles.readMoreBtn}>Lire plus</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        margin: 25,
    },
    img: {
        height: 100,
        width: 100,
    },
    titleContainer: {
        flex: 1,
        justifyContent: 'center',
        marginLeft: 20,
        marginRight: 20,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 16,
    },
    summary: {
        width: '100%',
        marginTop: 25,
    },
    readMore: {
        marginTop: 25
    },
    readMoreBtn: {
        padding: 10,
        backgroundColor: 'black',
        color: 'white',
        textTransform: 'uppercase',
    }
})