import { useState } from "react";
import * as ImagePicker from "expo-image-picker";
import { Pressable, Text, Image } from "react-native";

const PlaceImagePicker = ({ setImgUrl }) => {
    const [image, setImage] = useState(null);

    const uploadImage = async () => {
        let uploaded = await ImagePicker.launchImageLibraryAsync();
        if (!uploaded.cancelled) {
            setImage(uploaded.uri);
            setImgUrl(uploaded.uri);
        }
    };

    return (
        <Pressable
            style={{
                alignItems: "center",
                justifyContent: "center",
            }}
            onPress={uploadImage}
        >
            {image ? (
                <Image
                    source={{ uri: image }}
                    style={{ width: 200, height: 200 }}
                />
            ) : (
                <Text>Tap to upload an image for this place.</Text>
            )}
        </Pressable>
    );
};

export default PlaceImagePicker;
