import { View, Text, Image, StyleSheet } from 'react-native';


export default function CardUser() {
  return (
    <View style={styles.container}>
      <Image
      style={styles.image}
      source= {{uri: "https://picsum.photos/300/200"}}/>

      <View>
      <Text style={styles.text}> user0123</Text>
      <Text style={styles.text}> user0123@email.com</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    display: "flex",
    flexDirection: "row",
    alignItems:"center",
    justifyContent:"center"
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 50
  },
  text: {
    fontSize: 16,
  },
});