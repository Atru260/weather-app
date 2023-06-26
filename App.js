import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Box, NativeBaseProvider } from 'react-native';
import React, { useEffect, useState, Component } from 'react';
import WeatherComponent from './components/WeatherComponent';
import SettingsComponent from './components/SettingsComponent'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//import * as React from 'react';

const KEY = '9b61e2d1fd8833ff2597c650e5c58c3f';

export default function App()  {

    const fontSizes = {big: 24, medium: 18, small: 12}



    return (<Navbar/>)




}

const Tab = createBottomTabNavigator();


const Navbar = () => {
    return (
        <NavigationContainer>
          <Tab.Navigator>
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Settings" component={Settings} />
          </Tab.Navigator>
        </NavigationContainer>
    );

}

const Home = () => {
    return (
        <WeatherComponent style={styles.weatherComponent}>
        </WeatherComponent>
    );
}


const Settings = () => {
    return <SettingsComponent styles={styles}/>;
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    weatherComponent: {
        container: {
                flex: 1,
                backgroundColor: '#fff',
                alignItems: 'center',
                justifyContent: 'center',
        },
        icon: {
            borderColor: 'red',
            borderWidth: 5,
            height: 100,
            width: 200,
        },
        title: {
            fontSize: 20,
            lineHeight: 20,
            margin: 16,
            textAlign: 'center'
        },
        temperature: {
            alignItems: 'center',
            units: 'celcius',
            tempColors: 'true',
            endPoints: [-20, 35],
            text: {
                marginTop: 20,
                color: 'black',
                fontSize: 24,
                fontWeight: 'bold',
                lineHeight: 24
            }
        },
        description: {
            color: 'black'
        },
        centeredView: {
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 22,
        },
        modalView: {
              margin: 20,
              backgroundColor: 'white',
              borderRadius: 20,
              padding: 35,
              alignItems: 'center',
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 4,
              elevation: 5,
            },
        button: {
              borderRadius: 20,
              padding: 10,
              elevation: 2,
            },
        buttonOpen: {
              backgroundColor: '#F194FF',
            },
        buttonClose: {
              backgroundColor: '#2196F3',
            },
        textStyle: {
              color: 'white',
              fontWeight: 'bold',
              textAlign: 'center',
            },
        modalText: {
              marginBottom: 15,
              textAlign: 'center',
            },
        timestamp: {
            fontSize: 10,
            color: "#909090"
        }

  },
  item: {
      backgroundColor: '#e0e0e0',
      padding: 20,
      marginVertical: 8,
  },
  header: {
      fontSize: 24,
      backgroundColor: '#fff',
      margin: 8
  },
  title: {
      fontSize: 24,
  },

});
