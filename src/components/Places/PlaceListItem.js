import { Text, View, Image } from "react-native";

const PlaceListItem = ({ title, address, imageUrl, location }) => {
    return (
        <View style={{ marginBottom: 20 }}>
            <Text>{title}</Text>
            <Text>{address}</Text>
            <Image
                source={{ uri: imageUrl }}
                style={{ width: 200, height: 200 }}
            />
            <Text>
                {location.coords?.latitude}, {location.coords?.longitude}
            </Text>
        </View>
    );
};

export default PlaceListItem;
