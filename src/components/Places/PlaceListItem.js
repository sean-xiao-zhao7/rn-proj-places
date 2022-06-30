import { Text, View } from "react-native";

const PlaceListItem = ({ title, address, imageUrl, location }) => {
    return (
        <View style={{ marginBottom: 20 }}>
            <Text>{title}</Text>
            <Text>{address}</Text>
            <Text>{imageUrl}</Text>
            <Text>{location}</Text>
        </View>
    );
};

export default PlaceListItem;
