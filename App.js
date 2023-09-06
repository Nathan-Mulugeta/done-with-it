import React from "react";
import { Button, Text } from "react-native";
import Screen from "./app/components/Screen";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import navigationTheme from "./app/navigation/navigationTheme";
import AppNavigator from "./app/navigation/AppNavigator";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Tweets = ({ navigation }) => (
  <Screen>
    <Text>Tweets</Text>
    <Button
      title="View Tweet"
      onPress={() => navigation.navigate("TweetDetails", { id: 1 })}
    />
  </Screen>
);

const TweetDetails = ({ route }) => (
  <Screen>
    <Text>Tweet Details {route.params.id}</Text>
  </Screen>
);

const Stack = createStackNavigator();
const FeedNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerStyle: { backgroundColor: "dodgerblue" },
      headerTintColor: "white",
      headerShown: false,
    }}
  >
    <Stack.Screen name="Tweets" component={Tweets} />
    <Stack.Screen name="TweetDetails" component={TweetDetails} />
  </Stack.Navigator>
);

const Account = () => (
  <Screen>
    <Text>Account</Text>
  </Screen>
);

const Tab = createBottomTabNavigator();
const TabNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen name="Feed" component={FeedNavigator} />
    <Tab.Screen name="Account" component={Account} />
  </Tab.Navigator>
);

export default function App() {
  const demo = async () => {
    try {
      await AsyncStorage.setItem("person", JSON.stringify({ id: 1 }));
      const value = await AsyncStorage.getItem("person");
      const person = JSON.parse(value);
      console.log(person);
    } catch (error) {
      console.log(error);
    }
  };

  demo();

  return (
    <NavigationContainer theme={navigationTheme}>
      <AppNavigator />
    </NavigationContainer>
  );
}
