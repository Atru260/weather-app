import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Box, NativeBaseProvider } from 'react-native';
import React, { useEffect, useState, Component } from 'react';
import WeatherComponent from './components/WeatherComponent';
const KEY = '9b61e2d1fd8833ff2597c650e5c58c3f';

export default function App()  {

    //const [weatherData, setWeatherData] = useState({});


    // updateText = () => {
    //    this.setState({myText: this.state.temp})
    // }

    return <View style={styles.container}>
                <WeatherComponent style={styles.container}>
                </WeatherComponent>
            </View>




    // componentWillMount(){
    //     this.updateText()
    // }
    // render() {
    //    return (
    //
    //          <View style={styles.container}>
    //         <NativeBaseProvider>
    //          <Box> Fetch API</Box>
    //             {!this.state.isLoaded &&  <Box>Loading..</Box>}
    //
    //
    //          <Text onPress = {this.updateText}>
    //             Refresh
    //             <Temperature
    //             value = {this.state.temp}
    //             />
    //          </Text>
    //          </NativeBaseProvider>
    //          </View>
    //
    //    )
    // }


   // useEffect(() => {
   //     //console.log(["useEffect weatherData:", weatherData]);
   //
   //
   //
   // });

   // getWeatherData()
   // .then((response) => {
   //      setWeatherData(response.main);
   //  })


    // return (
    //     <View style={styles.container}>
    //       <Text>Welcome to WeatherApp</Text>
    //       <Temperature
    //       value={0}
    //       />
    //       <StatusBar style="auto" />
    //     </View>);






   // useEffect(() => {
   // getWeatherData()
   // .then(data =>
   //   setWeatherData(data)
   // );
   // }, [])

   // getWeatherData().then(response => {
   //     console.log(response);
   //     return (
   //     <View style={styles.container}>
   //       <Text>Welcome to WeatherApp</Text>
   //       <Temperature
   //       value={temp ? temp : 0}
   //       />
   //       <StatusBar style="auto" />
   //     </View>
   //     );
   //  }
   // );


   //let temp = 0
   // console.log(weatherData)
   // let temp = weatherData.main.temp
   //let feelsLike = weatherData.main.feels_like


}



const Cat = () => {
    return <Text>Hello, I am your cat!</Text>;
};






// async function getWeatherData(){
//     let url = `https://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=${KEY}`
//     let response = await fetch(url);
//     let data = await response.json();
//
//     return data
// }


// export default Cat;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
