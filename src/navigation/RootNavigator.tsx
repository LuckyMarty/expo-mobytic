import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet } from "react-native";
import { HomeScreen, LandingScreen, NewsScreen } from "../screens";

export type RouteParams = {
    LandingScreen: undefined;
    HomeScreen: undefined;
    NewsScreen: {
        id: number;
    };
}

const Stack = createNativeStackNavigator<RouteParams>();

export const RootNavigator = () => {
    return <Stack.Navigator>
        <Stack.Group>
            <Stack.Screen name="LandingScreen" component={LandingScreen}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen name="HomeScreen" component={HomeScreen}
                options={{
                    animation: 'slide_from_right',
                    headerTitle: "Mes actualités"
                }}
            />
            <Stack.Screen name="NewsScreen" component={NewsScreen}
                options={{
                    animation: 'slide_from_right',
                    headerTitle: ""
                }} />
        </Stack.Group>
    </Stack.Navigator>
}


const styles = StyleSheet.create({

})