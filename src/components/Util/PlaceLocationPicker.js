import * as Location from "expo-location";
import MapView, { Marker } from "react-native-maps";
import { Pressable, Text } from "react-native";

const PlaceLocationPicker = ({ location, setLocation }) => {
    const getLocation = async () => {
        try {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== "granted") {
                throw new Error("Permission to access location was denied.");
            }
            let location = await Location.getCurrentPositionAsync({});
            setLocation(location);
        } catch (e) {
            console.log(e);
            throw new Error(e.message);
        }
    };

    return (
        <Pressable
            style={{
                alignItems: "center",
                justifyContent: "center",
            }}
            onPress={getLocation}
        >
            {location.coords?.latitude ? (
                <MapView
                    region={{
                        latitude: location.coords?.latitude,
                        longitude: location.coords?.longitude,
                        latitudeDelta: 0.04,
                        longitudeDelta: 0.05,
                    }}
                    style={{
                        width: 200,
                        height: 200,
                    }}
                >
                    <Marker
                        coordinate={{
                            latitude: location.coords?.latitude,
                            longitude: location.coords?.longitude,
                        }}
                    />
                </MapView>
            ) : (
                <Text>Tap to pick a location on the map.</Text>
            )}
        </Pressable>
    );
};

export default PlaceLocationPicker;
