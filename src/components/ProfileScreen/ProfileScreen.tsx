import { Container } from "../common/globalStyles";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { View, Text, Button, TouchableOpacity } from "react-native";
export const ProfileScreen = ({ navigation, route }) => {
  const insets = useSafeAreaInsets();
  return (
    <Container
      style={{
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        paddingLeft: insets.left,
        paddingRight: insets.right,
      }}
    >
      <Text style={{ color: "white" }}>
        This is {route.params.name}'s profile
      </Text>
    </Container>
  );
};
