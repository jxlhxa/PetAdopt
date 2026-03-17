// import { Link } from "expo-router";
import { Text, View } from "react-native";
import CardUser from "../../components/PetAdoptPage";
import Categorias from "../../components/ScrowView";
import PetList from "../../components/PetList";


export default function Home() {
  return (
    <View>
      <Text>Pet Adopt</Text>
      <CardUser />
      <Categorias/>
      <PetList/>
      
    </View>
  );
}
