import {StyleSheet, Button, Alert, Modal, Pressable, View} from "react-native"
import React, { useState, useEffect } from "react";
import { Box, FlatList, Center, NativeBaseProvider, Text, Container, Image } from "native-base";

const KEY = '9b61e2d1fd8833ff2597c650e5c58c3f';
const UNIT = "metric"
const sampleUrl = "https://api.sampleapis.com/coffee/hot"
// TODO: Get user location
const LAT = 43.816
const LON = -79.421

export function getCoords(){
    return (LAT, LON)
}

export default function WeatherComponent({style}){

    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);

    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${LAT}&lon=${LON}&appid=${KEY}&units=${UNIT}`

    const fetchData = async () => {
       const resp = await fetch(url);
       const data = await resp.json();
       setData(data);
       setLoading(false);
     };


    useEffect(() => {
      fetchData();
  }, [data]);

    return (
      <NativeBaseProvider>
        <Center flex={1}>
        <Box> </Box>
          {loading && <Box>Loading..</Box>}
          {!loading && data &&(
              <Container style={style.container}>
                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={modalVisible}
                        onRequestClose={() => {
                        Alert.alert('Modal has been closed.');
                        setModalVisible(!modalVisible);
                        }}>
                        <View style={style.centeredView}>
                        <View style={style.modalView}>
                          <Text style={style.modalText}>
                          Humidity: {data.main.humidity} %{"\n"}
                          Wind: {data.wind.speed} m/s{"\n"}
                          Pressure: {data.main.pressure} hPa{"\n"}




                          </Text>
                          <Pressable
                            style={[style.button, style.buttonClose]}
                            onPress={() => setModalVisible(!modalVisible)}>
                            <Text style={style.textStyle}>Close</Text>
                          </Pressable>
                        </View>
                        </View>
                    </Modal>

                  <Text style={style.title}>Current weather for {data.name}</Text>
                  <Temperature value={data.main.temp} style={style.temperature}/>
                  <Image source={{uri:"http://openweathermap.org/img/w/"+ data.weather[0].icon + ".png"}} alt={data.weather[0].description} size="xs" />
                  <Text>{data.weather[0].description}</Text>
                  <Pressable
                          style={[style.button, style.buttonOpen]}
                          onPress={() => setModalVisible(true)}>
                          <Text style={style.textStyle}>More Data</Text>
                  </Pressable>
                  <Text style={style.timestamp}>
                    Accurate as of {new Date(data.dt * 1000).toLocaleString()} EST
                  </Text>
              </Container>

          )}
        </Center>
      </NativeBaseProvider>
    );
}
//


const Temperature = (props) => {
    const hot = 0
    const cold = 255

    let unit = ''
    let val = props.value
    if (props.style.units == "celcius"){
        unit = 'C'
    } else if (props.style.units == "fahrenheit"){
        unit = 'F'
        val = val * (9/5) + 32
    }
    let relativeTemp = (props.value - props.style.endPoints[0]) / (props.style.endPoints[1] - props.style.endPoints[0])
    relativeTemp = Math.max(relativeTemp, 0)
    relativeTemp = Math.min(relativeTemp, 1)

    let hue = (cold - hot) * (1 - relativeTemp)

    let sat = 400 * (0.5 - relativeTemp)**2
    //let sat = 200 * Math.abs(0.5 - relativeTemp)

    hsl = `hsl(${hue}, ${sat}%, 50%)`
    return <Text style={StyleSheet.compose(props.style.text, {color:hsl})}>{val} &deg;{unit}</Text>
}
