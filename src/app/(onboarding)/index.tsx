import { useEffect, useState } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { StatusBar } from "expo-status-bar";
import { router } from "expo-router";
import { setItem } from "@/infrastructure/storage/async-storage";

export default function OnboardingScreen() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setReady(true);
  }, []);

  async function handleComplete() {
    await setItem("onboarding_completed", "true");
    router.replace("/(home)" as any);
  }

  if (!ready) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#fff" }}>
        <Text style={{ color: "#9ca3af" }}>Carregando...</Text>
      </View>
    );
  }

  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <StatusBar style="dark" />
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center", paddingHorizontal: 32 }}>
        <View style={{ alignItems: "center", marginBottom: 48 }}>
          <View style={{ width: 128, height: 128, backgroundColor: "#eef2ff", borderRadius: 64, justifyContent: "center", alignItems: "center", marginBottom: 24 }}>
            <Text style={{ fontSize: 48 }}>🎓</Text>
          </View>
          <Text style={{ fontSize: 28, fontWeight: "bold", color: "#111827", textAlign: "center", marginBottom: 12 }}>
            Bem-vindo ao Classpoint
          </Text>
          <Text style={{ fontSize: 16, color: "#6b7280", textAlign: "center", lineHeight: 24 }}>
            O aplicativo que ajuda você a gerenciar suas aulas, alunos e matérias de forma simples e eficiente.
          </Text>
        </View>
      </View>
      <View style={{ paddingHorizontal: 32, paddingBottom: 24 }}>
        <TouchableOpacity
          activeOpacity={0.8}
          style={{ backgroundColor: "#4f46e5", paddingVertical: 16, borderRadius: 12, alignItems: "center" }}
          onPress={handleComplete}
        >
          <Text style={{ color: "#fff", fontSize: 18, fontWeight: "600" }}>Vamos começar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
