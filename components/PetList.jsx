import { FlatList, StyleSheet, Text, View, Image } from "react-native";

const pets = [
 {
 id: "1",
 name: "Cuba",
 breed: "Viralata",
 age: "06 meses",
 image: require("../images/cuba.png")  
 },
 {
 id: "2",
 name: "Zion",
 breed: "Poodle",
 age: "03 anos",
 image: require("../images/zion.png")
 },
 {
 id: "3",
 name: "Preguiça",
 breed: "Golden",
 age: "02 anos",
 image: require("../images/preguica.png")
 },
 {
 id: "4",
 name: "Simon",
 breed: "Vira lata",
 age: "02 anos",
 image: require("../images/simon.png")
 }
];

const PetCard = ({ item }) => {
 return (
 <View style={styles.card}>
 <Image source={ item.image } style={styles.image} />

 <View style={styles.info}>
 <Text style={styles.name}>{item.name}</Text>
 <Text>{item.breed}</Text>
 <Text>{item.age}</Text>
 </View>
 </View>
 );
};

export default function PetList() {
 return (
 <FlatList
 data={pets}
 keyExtractor={(item) => item.id}
 renderItem={({ item }) => <PetCard item={item} />}
 numColumns={2}
 contentContainerStyle={{ padding: 5 }}
 />
 );
}

const styles = StyleSheet.create({
 card: {
 flex: 1, // 🔥 ESSENCIAL pra dividir em 2 colunas
 margin: 8,
 backgroundColor: "#fff",
 borderRadius: 12,
 overflow: "hidden",
 elevation: 3
 },
 image: {
 width: "100%",
 height: 120
 },
 info: {
 padding: 10
 },
 name: {
 fontSize: 16,
 fontWeight: "bold"
 }
});