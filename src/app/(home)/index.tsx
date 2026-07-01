import { Text, View } from "react-native";

export default function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#fff" }}>
      <Text style={{ fontFamily: "Outfit_700Bold", fontSize: 24, color: "#111827" }}>Classpoint</Text>
      <Text style={{ fontFamily: "Outfit_400Regular", color: "#6b7280", marginTop: 8 }}>Home</Text>
    </View>
  );
}
