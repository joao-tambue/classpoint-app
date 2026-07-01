import { Text, View } from "react-native";

export default function Loading() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#fff" }}>
      <Text style={{ color: "#9ca3af", fontSize: 16 }}>Carregando...</Text>
    </View>
  );
}
