import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { View, StyleSheet } from 'react-native';
import HomePage from './src/screen/HomePage';
import LoginScreen from './src/screen/LoginScreen';
import SignUpScreen from './src/screen/SignUpScreen';
import Forgetpage from './src/screen/Forgetpage';
import CheckyourEmail from './src/screen/CheckyourEmail';
import HelpSupportPage from './src/screen/HelpSupportPage';
import Launchpage from './src/screen/Launchpage';
import Mainscanerpage from './src/screen/MainScanerpage';
import ParttwoScaner from './src/screen/ParttwoScaner';
import PasswordReset from './src/screen/PasswordReset';
import ReviewPage from './src/screen/ReviewPage';
import Roomsection from './src/screen/Roomsection';
import Roomsence from './src/screen/Roomsence';
import ScanCamera from './src/screen/ScanCamera';
import ScanerLoadingmainpage from './src/screen/ScanerLoadingmainpage';
import SetNewPassword from './src/screen/SetNewPassword';
import Subscrption from './src/screen/Subscrption';
import Tellmeus from './src/screen/Tellmeus';
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const DrawerScreen = () => {
  return (
    <Drawer.Navigator screenOptions={{ headerShown: false }} >
      <Drawer.Screen name="Home" component={HomePage} />
      <Drawer.Screen name="Setting" component={HelpSupportPage} />
    </Drawer.Navigator>
  )
}
const TabsScreen = () => {
  return (
    <Tab.Navigator screenOptions={{
      headerShown: false, tabBarStyle: {
        height: 70,
        borderRadius: 15,
      },
      tabBarItemStyle: {
        paddingVertical: 8
      }
    }}>

      <Tab.Screen
        name="RoomTab"
        component={Roomsection}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home-outline" size={size} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="MyRooms"
        component={Roomsence}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="grid-outline" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ size }) => (
            <View style={styles.tabbariconbackground} >
              <MaterialIcons name="add" size={size} />
            </View>
          ),
          tabBarLabel: "",
          tabBarActiveTintColor: "#ffffff",
          // tabBarInactiveTintColor: "#ffffff",
          paddingBottom: 10,

        }}
        name="ProTab" component={Subscrption} >
      </Tab.Screen>

      <Tab.Screen
        name="Subscription"
        component={Subscrption}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="workspace-premium" size={size} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="Setting"
        component={HelpSupportPage}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="settings-outline" size={size} color={color} />
          ),
        }}
      />

    </Tab.Navigator>
  );
};

const Stacksscreen = () => {
  return (
    <Stack.Navigator initialRouteName="Launchpage" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Launchpage" component={Launchpage} />
      <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="Forgetpage" component={Forgetpage} />
      <Stack.Screen name="CheckyourEmail" component={CheckyourEmail} />
      <Stack.Screen name="PasswordReset" component={PasswordReset} />
      <Stack.Screen name="SetNewPassword" component={SetNewPassword} />
      <Stack.Screen options={{ animation: "ios_from_left", animationDuration: 500 }} name="DrawerScreen" component={DrawerScreen} />
      <Stack.Screen name="TabsScreen" component={TabsScreen} />
      <Stack.Screen name="Tellmeus" component={Tellmeus} />
      <Stack.Screen name="ReviewPage" component={ReviewPage} />
      <Stack.Screen name="ScanerLoadingmainpage" component={ScanerLoadingmainpage} />
      <Stack.Screen name="ScanCamera" component={ScanCamera} />
    </Stack.Navigator>
  );
};

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stacksscreen />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};


export default App;


const styles = StyleSheet.create({
  tabbariconbackground: {
    backgroundColor: "#648DDB",
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 15,
  }
})