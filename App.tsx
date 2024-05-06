import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, View } from "react-native";

import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
  Poppins_600SemiBold,
} from "@expo-google-fonts/poppins";

import Home from "@/app/home";
import { Loading } from "@/components/loading";

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
  });

  if (!fontsLoaded) {
    return <Loading />;
  }

  return (
    <View style={styles.container}>
      <StatusBar style="dark" translucent={false} backgroundColor="white" />
      <Home></Home>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
