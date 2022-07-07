import { useContext, useState } from "react";
import * as Notifications from "expo-notifications";
const {
    View,
    TextInput,
    Text,
    Pressable,
    StyleSheet,
} = require("react-native");

// context
import { PlacesContext } from "../store/places-context";

// model
import Place from "../models/Place";
import PlaceImagePicker from "../components/Util/PlaceImagePicker";
import PlaceLocationPicker from "../components/Util/PlaceLocationPicker";

const AddPlaceScreen = ({ navigation }) => {
    const placeContext = useContext(PlacesContext);
    const [title, setTitle] = useState("");
    const [address, setAddress] = useState("");
    const [imgUrl, setImgUrl] = useState("");
    const [location, setLocation] = useState({});

    const addPlaceHandler = async () => {
        const newPlace = new Place(title, imgUrl, address, location);
        placeContext.addPlace(newPlace);

        // set local notification
        const settings = await Notifications.getPermissionsAsync();
        if (settings.ios?.status === 0 || settings.status !== "granted") {
            await Notifications.requestPermissionsAsync({
                ios: {
                    allowAlert: true,
                    allowBadge: true,
                    allowSound: true,
                    allowAnnouncements: true,
                },
            });
        }

        Notifications.scheduleNotificationAsync({
            content: {
                title: `Added ${title} to places.`,
                body: `${title} has been added by you to the list of places.`,
            },
            trigger: {
                seconds: 5,
            },
        });
        navigation.navigate("AllPlacesScreen");
    };

    const scheduleNotification = () => {
        Notifications.scheduleNotificationAsync({
            content: {
                title: "Remember to drink water!",
            },
            trigger: {
                seconds: 5,
                repeats: true,
            },
        });
    };

    return (
        <View style={{ alignItems: "center" }}>
            <Text>Enter place title</Text>
            <TextInput
                onChangeText={setTitle}
                value={title}
                style={styles.textinput}
            />
            <Text>Enter place address</Text>
            <TextInput
                onChangeText={setAddress}
                value={address}
                style={styles.textinput}
            />
            <Text>Enter place imgUrl</Text>
            <PlaceImagePicker setImgUrl={setImgUrl} />
            <Text>Enter place location</Text>
            <PlaceLocationPicker
                setLocation={setLocation}
                location={location}
            />
            <Pressable
                onPress={addPlaceHandler}
                style={{
                    paddingHorizontal: 30,
                    paddingVertical: 10,
                    backgroundColor: "indigo",
                }}
            >
                <Text style={{ color: "white" }}>Add place</Text>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    textinput: {
        backgroundColor: "white",
        padding: 10,
        fontSize: 18,
        width: 200,
    },
});

export default AddPlaceScreen;
