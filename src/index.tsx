import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen } from "./components/HomeScreen/HomeScreen";
import { ProfileScreen } from "./components/ProfileScreen/ProfileScreen";
import { NavBackButton } from "./components/common/HeaderNavbarBack/styles";
import { HeaderNavbarBackButton } from "./components/common/HeaderNavbarBack/HeaderNavBackButton";
import { Button } from "react-native";
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ title: "Welcome", headerShown: false }}
          />
          <Stack.Screen
            name="Profile"
            component={ProfileScreen}
            options={({ navigation }) => ({
              headerStyle: {
                backgroundColor: "#0a0c0e",
              },
              headerLeft: () => (
                <NavBackButton onPress={() => navigation.navigate("Home")}/>
              ),
            })}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
