import { RouteProp, useRoute } from '@react-navigation/native'
import moment from 'moment'
import React, { useEffect, useState } from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
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
        <View>
            <Text style={styles.title}>{News?.title}</Text>
            <Image source={{ uri: News?.imageUrl }} style={styles.img} />
            <Text style={styles.title}>{News?.summary}</Text>

            <View>
                <Text>{moment(new Date(News?.publishedAt)).format('DD/MM/YYYY')}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    img: {
        height: 200,
        resizeMode: 'contain'

    }
})