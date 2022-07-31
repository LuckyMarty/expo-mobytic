import { RouteProp, useRoute } from '@react-navigation/native'
import moment from 'moment'
import React, { useEffect, useState } from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import { RouteParams } from '../navigation/RootNavigator'
import { NewsItem } from '../types/NewsItem'



interface NewsScreenProps {

}

export const NewsScreen: React.FunctionComponent<NewsScreenProps> = ({

}) => {

    const route = useRoute<RouteProp<RouteParams>>();
    const [News, setNews] = useState<NewsItem>()

    useEffect(() => {

        fetch(`https://api.spaceflightnewsapi.net/v3/articles/${route.params?.id}`)
            .then(response => response.json())
            .then(res => setNews(res))
            .catch(err => console.log(err))
    }, [])

    // const date = new Date(News?.publishedAt, "MM-DD-YYYY")

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{News?.title}</Text>
            <Image source={{ uri: News?.imageUrl }} style={styles.img} />
            <Text style={styles.summary}>{News?.summary}</Text>

            <View style={styles.dates}>
                <View style={styles.left}>
                    <Text style={styles.publishedAt}>Publier le</Text>
                    <Text style={styles.publishedAt}>{moment(new Date(News?.publishedAt)).format('DD/MM/YYYY')}</Text>
                </View>

                <View style={styles.right}>
                    <Text style={styles.publishedAt}>Mise à jour le</Text>
                    <Text style={styles.publishedAt}>{moment(new Date(News?.updatedAt)).format('DD/MM/YYYY')}</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "black",
        padding: 50
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
        marginBottom: 25
    },
    summary: {
        color: 'white'
    },
    img: {
        height: 200,
        resizeMode: 'contain',
        marginBottom: 25
    },
    dates: {
        marginTop: 25,
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'row',
        alignContent: 'space-around'
    },
    left: {
        width: '50%',
    },
    right: {
        width: '50%',
    },
    publishedAt: {
        color: 'white',
    }
})