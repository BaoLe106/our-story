import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen } from "./components/HomeScreen/HomeScreen";
import { ProfileScreen } from "./components/ProfileScreen/ProfileScreen";
import { NavBackButton } from "./components/common/HeaderNavbarBack/styles";
import { HeaderNavbarBackButton } from "./components/common/HeaderNavbarBack/HeaderNavBackButton";
import { Button } from "react-native-paper";
import Icon from 'react-native-vector-icons/FontAwesome5';
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
              headerTitle: "",
              headerStyle: {
                backgroundColor: "black",
                // shadowOpacity: 0,
                // headerShadowVisible: false,
                borderBottomWidth: 0,
              },
              headerLeft: () => (
                <Button 
                  // icon="chevron-left" 
                  icon={() => <Icon name="chevron-left" size={30} color="white"/>}
                  style={{
                    width: 64,
                    height: 64,
                    // opacity: 0.3,
                    borderRadius: 32, // Half of width and height to make it round
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginLeft: 16,
                    marginTop: 48,
                    backgroundColor: 'gray',
                  }}
                  // contentStyle={{ flexDirection: 'row-reverse' }}
                  children={""} 
                  onPress={() => navigation.navigate("Home")}
                />
              ),
            })}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
