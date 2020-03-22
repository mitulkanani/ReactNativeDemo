import React, { Component } from 'react';
import { TouchableOpacity, Image, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import Ionicons from 'react-native-vector-icons/Ionicons';


import { store, persistor } from './src/Store';
import Login from './src/Screens/Authentication/Login';
import Register from './src/Screens/Authentication/Register';
import TabOne from './src/Screens/Dashboard/TabOne';
import TabTwo from './src/Screens/Dashboard/TabTwo';
import TabThree from './src/Screens/Dashboard/TabThree';
import TabFour from './src/Screens/Dashboard/TabFour';
import Colors from './src/Helper/Colors';
import Splashscreen from './src/Screens/SplashScreen';

import { IS_LOGIN } from './src/Helper/Constants';

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator();

const BottomTabBar = () => {
  return (
    <Tab.Navigator
      initialRouteName="TabOne"
      tabBarOptions={{
        activeTintColor: Colors.APP_THEME,
        inactiveTintColor: Colors.LIGHT_GRAY,
        labelStyle: { fontSize: 16 }
      }}>
      <Tab.Screen name="TabOne"
        component={TabOne}
        options={({ navigation, route }) => ({
          title: 'Tab One'
        })} />
      <Tab.Screen name="TabTwo"
        component={TabTwo}
        options={({ navigation, route }) => ({
          title: 'Tab Two'
        })} />
      <Tab.Screen name="TabThree"
        component={TabThree}
        options={({ navigation, route }) => ({
          title: 'Tab Three'
        })} />
      <Tab.Screen name="TabFour"
        component={TabFour}
        options={({ navigation, route }) => ({
          title: 'Tab Four'
        })} />
    </Tab.Navigator>
  )
}
class AppNavigator extends Component {

  async componentDidMount() {
    console.disableYellowBox = true;
  }

  backButton = (navigation) => {
    return (
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.backBtn}
      >
        <Image style={styles.backImg} source={imgback} />
      </TouchableOpacity>
    )
  }


  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <NavigationContainer>
            <Stack.Navigator initialRouteName={'SplashScreen'}>
              <Stack.Screen
                name="SplashScreen"
                component={Splashscreen}
                options={{ headerShown: false }} />

              <Stack.Screen
                name="Login"
                component={Login}
                options={{ headerShown: false }} />

              <Stack.Screen
                name="Register"
                component={Register}
                options={{ headerShown: false }} />

              <Stack.Screen
                name="BottomTabBar"
                component={BottomTabBar}
              />
            </Stack.Navigator>

          </NavigationContainer>
        </PersistGate>
      </Provider>
    );
  }
}

const styles = {
  backImg: {
    width: 20,
    height: 20,
    marginLeft: 16
  },
  rightContainer: {
    marginRight: 16,
    width: 20,
    height: 20,
  },
  headerStyle: {
    shadowColor: '#5bc4ff',
    shadowOpacity: 0.2,
    shadowOffset: {
      height: 1,
    },
    elevation: 3,
  }
}

export default AppNavigator