import { useContext, useState } from "react";

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

const AddPlaceScreen = ({ navigation }) => {
    const placeContext = useContext(PlacesContext);
    const [title, setTitle] = useState("");
    const [address, setAddress] = useState("");
    const [imgUrl, setImgUrl] = useState("");
    const [location, setLocation] = useState("");

    const addPlaceHandler = () => {
        const newPlace = new Place(title, address, imgUrl, location);
        placeContext.addPlace(newPlace);
        navigation.navigate("AllPlacesScreen");
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
            <TextInput
                onChangeText={setImgUrl}
                value={imgUrl}
                style={styles.textinput}
            />
            <Text>Enter place location</Text>
            <TextInput
                onChangeText={setLocation}
                value={location}
                style={styles.textinput}
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
    },
});

export default AddPlaceScreen;
