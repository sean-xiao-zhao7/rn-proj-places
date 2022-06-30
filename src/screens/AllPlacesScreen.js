const { View, Text, Pressable } = require("react-native");
import { useContext, useLayoutEffect } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";

// context
import { PlacesContext } from "../store/places-context";

// comps
import PlacesList from "../components/Places/PlacesList";

const AllPlacesScreen = ({ navigation }) => {
    const placesContext = useContext(PlacesContext);
    const placeList = placesContext.placesList;

    // set header button
    useLayoutEffect(() => {
        navigation.setOptions({
            title: "Your places",
            headerRight: () => {
                return (
                    <Pressable
                        onPress={() => navigation.navigate("AddPlaceScreen")}
                        style={{ marginRight: 10 }}
                    >
                        <MaterialCommunityIcons
                            name="map-marker-plus"
                            size={32}
                            color="black"
                        />
                    </Pressable>
                );
            },
        });
    }, [navigation]);

    return (
        <View style={{ margin: 20, alignItems: "center" }}>
            <Text>Here are all the places you added!</Text>
            <PlacesList placesList={placeList} />
        </View>
    );
};

export default AllPlacesScreen;
