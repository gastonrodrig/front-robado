import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "../screens/home";
import { Screen1 } from "../screens/screen-1";
import { Screen2 } from "../screens/screen-2";
import { Screen3 } from "../screens/screen-3";

const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <NavigationContainer initialRouteName="Home">
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Screen1" component={Screen1} />
        <Stack.Screen name="Screen2" component={Screen2} />
        <Stack.Screen name="Screen3" component={Screen3} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default HomeStack;