import { Text, StyleSheet, ScrollView } from 'react-native';

export default function Categorias() {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.container}
    >
      <Text style={styles.text}>Cat</Text>
      <Text style={styles.text}>Dog</Text>
      <Text style={styles.text}>Bird</Text>
      <Text style={styles.text}>Mouse</Text>
      <Text style={styles.text}>Snake</Text>
      <Text style={styles.text}>Cat</Text>
      <Text style={styles.text}>Dog</Text>
      <Text style={styles.text}>Bird</Text>
      <Text style={styles.text}>Mouse</Text>
      <Text style={styles.text}>Snake</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    backgroundColor: "#ce5353",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 20,
    marginRight: 10
  }
});