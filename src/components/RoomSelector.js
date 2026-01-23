import { StyleSheet,ScrollView } from "react-native"
import NewCardGen from "./NewCardGen.js"
const Rooms = [
    { id: 1, title: "Living Room", img: require("../images/bed.webp"), selected: true },
    { id: 2, title: "Study Room", img: require("../images/sofa.webp"), selected: false },
    { id: 3, title: "Sleeping Room", img: require("../images/kitchen.jpg"), selected: false },
    { id: 4, title: "Dining Room", img: require("../images/dining.jpeg"), selected: false }
]

const RoomSelector = () => {
    return (
        <ScrollView  showsHorizontalScrollIndicator={false} horizontal style={styles.row}>
            {Rooms.map(room => (
                <NewCardGen
                    key={room.id}
                    title={room.title}
                    icon={room.img}
                    selected={room.selected}
                />
            ))}
        </ScrollView>
    )
}

export default RoomSelector

const styles = StyleSheet.create({
   row:{
    // flexDirection:"row",
    marginTop:10
   }
})