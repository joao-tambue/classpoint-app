import { Text, View } from "react-native";

export default function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#fff" }}>
      <Text style={{ fontSize: 24, fontWeight: "bold", color: "#111827" }}>Classpoint</Text>
      <Text style={{ color: "#6b7280", marginTop: 8 }}>Home</Text>
    </View>
  );
}
