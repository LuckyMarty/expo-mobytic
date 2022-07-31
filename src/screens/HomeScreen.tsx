import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, FlatList, ListRenderItem } from 'react-native'
import { ListItems } from '../components'
import { NewsList } from '../types/NewsList'

interface HomeScreenProps {

}

export const HomeScreen: React.FunctionComponent<HomeScreenProps> = (props) => {

    const [NewsList, setNewsList] = useState<NewsList[]>()

    useEffect(() => {

        fetch('https://api.spaceflightnewsapi.net/v3/articles')
            .then(response => response.json())
            .then(res => setNewsList(res))
            .catch(err => console.log(err))
    }, [])

    const renderItem: ListRenderItem<NewsList> = ({ item }) => {
        return (
            <ListItems key={item.id} NewsList={item}/>
        );
    }

    return (
        <View style={styles.container}>
            <View style={styles.navigation}>
                <Text>Navigation</Text>
            </View>
            <View style={styles.body}>
                {/* <Text>Home Screen</Text> */}
                <FlatList
                    data={NewsList}
                    renderItem={renderItem}
                    style={styles.list}
                    ItemSeparatorComponent={() => (
                        <View style={styles.listSeparator}/>
                    )}
                />
            </View>
            <View style={styles.footer}>
                <Text>Footer</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    navigation: {
        flex: 1,
        backgroundColor: 'blue',
        alignItems: 'center',
        justifyContent: 'center',
    },
    body: {
        flex: 9,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    list: {
        width: '100%'
    },
    listSeparator: {
        height: 1,
        backgroundColor: 'black',
        marginLeft: '5%',
        marginRight: '5%',
    },
    footer: {
        flex: 1,
        backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center',
    },
});