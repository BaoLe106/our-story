import { View, Text, Button, TouchableOpacity } from "react-native";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import {
  useFonts,
  Nunito_700Bold,
  Nunito_800ExtraBold,
} from "@expo-google-fonts/nunito";
import { SignUpButton } from "./styles";
import { Container } from "../common/globalStyles";

export const HomeScreen = ({ navigation }) => {
  const insets = useSafeAreaInsets();
  const [fontsLoaded, fontError] = useFonts({
    Nunito_700Bold,
    Nunito_800ExtraBold,
  });
  if (!fontsLoaded && !fontError) {
    return null;
  }
  return (
    <Container
      style={{
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        paddingLeft: insets.left,
        paddingRight: insets.right,
      }}
    >
      {/* <Button
        title="Go to Jane's profile"
        color="white"
        onPress={() => navigation.navigate("Profile", { name: "Jane" })}
      /> */}
      <Text
        style={{
          color: "white",
          fontFamily: "Nunito_800ExtraBold",
          fontSize: 48,
          marginBottom: 24,
        }}
      >
        our_stories
      </Text>
      <Text
        style={{
          color: "white",
          fontFamily: "Nunito_700Bold",
          fontSize: 24,
          marginBottom: 24,
          paddingHorizontal: 16,
          textAlign: "center",
        }}
      >
        Share daily stories with your friends
      </Text>
      <SignUpButton
        onPress={() => navigation.navigate("Profile", { name: "Jane" })}
      >
        <Text style={{ fontFamily: "Nunito_700Bold", fontSize: 20 }}>
          Create an account
        </Text>
      </SignUpButton>
      <TouchableOpacity>
        <Text
          style={{ fontFamily: "Nunito_700Bold", fontSize: 20, color: "white" }}
        >
          Sign in
        </Text>
      </TouchableOpacity>
      {/* <TouchableOpacity></TouchableOpacity> */}
    </Container>
  );
};
