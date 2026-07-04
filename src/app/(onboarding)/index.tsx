import { setItem } from "@/infrastructure/storage/async-storage";
import { useRouter } from "expo-router";
import {
  Image,
  ImageBackground,
  Pressable,
  SafeAreaView,
  StatusBar,
  Text,
  View,
} from "react-native";

const logoText = "ClassPoint";

export default function OnboardingScreen() {
  const router = useRouter();

  async function handleComplete() {
    await setItem("onboarding_completed", "true");
    router.replace("/(home)" as any);
  }

  return (
    <View className="flex-1 bg-[#184C43]">
      <StatusBar barStyle="light-content" translucent backgroundColor="transparent" />

      <ImageBackground
        source={require("../../../assets/images/onboarding/bg-app.png")}
        resizeMode="cover"
        className="absolute inset-0"
      >
        <View className="absolute inset-0 bg-black/10" />
      </ImageBackground>

      <Image
        source={require("../../../assets/images/onboarding/flower-right.png")}
        className="absolute"
        style={{
          width: 120,
          height: 120,
          top: 100,
          right: -25,
          opacity: 0.25,
        }}
      />

      <Image
        source={require("../../../assets/images/onboarding/flower-left.png")}
        className="absolute"
        style={{
          width: 120,
          height: 120,
          left: -30,
          bottom: 350,
          opacity: 0.25,
        }}
      />

      <SafeAreaView className="flex-1">
        <View className="px-8 pt-16">
          <Text
            className="text-white text-[31px] tracking-[-0.6px]"
            style={{ fontFamily: "Outfit-SemiBold" }}
          >
            {logoText}
            <Text className="text-[#38C694]">.</Text>
          </Text>
        </View>

        <View className="flex-1 items-center justify-center px-6">
          <Image
            source={require("../../../assets/images/onboarding/ilustration.png")}
            resizeMode="contain"
            className="w-[255px] h-[255px]"
          />
        </View>

        <View className="bg-white rounded-t-[38px] px-7 pt-8 pb-8">
          <View className="items-center px-2">
            <Text
              className="text-[#222833] text-[24px] leading-[29px] text-center tracking-[-0.6px]"
              style={{ fontFamily: "Outfit-SemiBold" }}
            >
              Materiais & Informações
              {"\n"}
              Sempre Organizados
            </Text>

            <Text
              className="mt-4 text-[#6C747B] text-[14px] leading-[21px] text-center tracking-[-0.2px]"
              style={{ fontFamily: "Outfit-Medium" }}
            >
              Tenha todos os recursos de aprendizagem ao seu alcance. Navegue por
              disciplinas, encontre conteúdos importantes em segundos e mantenha
              seus estudos sempre organizados e atualizados.
            </Text>
          </View>

          <View className="mt-7 flex-row items-center justify-center gap-2">
            <View className="h-[8px] w-[22px] rounded-full bg-[#D7DCE0]" />
            <View className="h-[8px] w-[34px] rounded-full bg-[#24413D]" />
            <View className="h-[8px] w-[22px] rounded-full bg-[#D7DCE0]" />
          </View>

          <Pressable
            android_ripple={{ color: "rgba(255,255,255,0.15)" }}
            className="mt-6 h-[56px] rounded-full bg-[#34BE88] items-center justify-center active:opacity-90"
            onPress={handleComplete}
          >
            <Text
              className="text-white text-[17px] font-semibold tracking-[-0.2px]"
              style={{ fontFamily: "Outfit-SemiBold" }}
            >
              Bora começar
            </Text>
          </Pressable>
        </View>
      </SafeAreaView>
    </View>
  );
}
