const { FlatList } = require("react-native");

// comps
import PlaceListItem from "./PlaceListItem";

const PlacesList = ({ placesList }) => {
    const renderItem = ({ item }) => {
        return (
            <PlaceListItem
                title={item.title}
                address={item.address}
                imageUrl={item.imageUrl}
                location={item.location}
            />
        );
    };
    return <FlatList data={placesList} renderItem={renderItem} />;
};

export default PlacesList;
