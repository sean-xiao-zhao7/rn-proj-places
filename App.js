import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as Notifications from "expo-notifications";

// screens
import AllPlacesScreen from "./src/screens/AllPlacesScreen";
import AddPlaceScreen from "./src/screens/AddPlaceScreen";
import MapScreen from "./src/screens/MapScreen";
import PlaceScreen from "./src/screens/PlaceScreen";

// context
import { PlacesContextProvider } from "./src/store/places-context";
import { useEffect } from "react";

const Stack = createNativeStackNavigator();

Notifications.setNotificationHandler({
    handleNotification: async () => ({
        shouldShowAlert: true,
        shouldPlaySound: true,
        shouldSetBadge: true,
    }),
});

export default function App() {
    useEffect(() => {
        const sub = Notifications.addNotificationResponseReceivedListener(
            (response) => {
                console.log(response);
            }
        );

        return () => {
            sub.remove();
        };
    }, []);

    return (
        <>
            <StatusBar style="auto" />
            <NavigationContainer>
                <PlacesContextProvider>
                    <Stack.Navigator>
                        <Stack.Screen
                            name="AllPlacesScreen"
                            component={AllPlacesScreen}
                        />
                        <Stack.Screen
                            name="PlaceScreen"
                            component={PlaceScreen}
                        />
                        <Stack.Screen
                            name="AddPlaceScreen"
                            component={AddPlaceScreen}
                        />
                        <Stack.Screen name="MapScreen" component={MapScreen} />
                    </Stack.Navigator>
                </PlacesContextProvider>
            </NavigationContainer>
        </>
    );
}
