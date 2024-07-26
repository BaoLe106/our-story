import { View, Text, TouchableOpacity } from "react-native";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import {
  useFonts,
  Nunito_700Bold,
  Nunito_800ExtraBold,
} from "@expo-google-fonts/nunito";
import { Container } from "../globalStyles";
import { NavBackButton } from "./styles";
import { Button } from "react-native-paper";

export const HeaderNavbarBackButton = () => {
  // const [fontsLoaded, fontError] = useFonts({
  //   Nunito_700Bold,
  //   Nunito_800ExtraBold,
  // });
  // if (!fontsLoaded && !fontError) {
  //   return null;
  // }
  return <Button icon="chevron-left" children={""}></Button>;
};
