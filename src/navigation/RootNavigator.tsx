import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen, LandingScreen, NewsScreen } from "../screens";

export type RouteParams = {
    LandingScreen: undefined;
    HomeScreen: undefined;
    NewsScreen: {
        id: number;
    };
}

const Stack = createNativeStackNavigator();

export const RootNavigator = () => {
    return <Stack.Navigator>
        <Stack.Group>
            <Stack.Screen name="Landing Screen" component={LandingScreen}/>
            <Stack.Screen name="Mes Actualités" component={HomeScreen} options={{animation: 'slide_from_right'}}/>
            <Stack.Screen name="News Screen" component={NewsScreen} options={{animation: 'slide_from_right'}}/>
        </Stack.Group>
    </Stack.Navigator>
}