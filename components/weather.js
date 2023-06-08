

import React, { useState, useEffect } from "react";
import { Box, FlatList, Center, NativeBaseProvider, Text } from "native-base";

const KEY = '9b61e2d1fd8833ff2597c650e5c58c3f';
const UNIT = "metric"
const sampleUrl = "https://api.sampleapis.com/coffee/hot"
// TODO: Get user location
const LAT = 43.816
const LON = -79.421

export function getCoords(){
    return (LAT, LON)
}

export default function GetWeatherData(){


    //console.log("getWeatherData")
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${LAT}&lon=${LON}&appid=${KEY}&units=${UNIT}`

    const fetchData = async () => {
       const resp = await fetch(sampleUrl);
       const data = await resp.json();
       setData(data);
       setLoading(false);
     };

     const renderItem = ({ item }) => {
         return (
           <Box px={5} py={2} rounded="md" bg="primary.300" my={2}>
             {item.title}
           </Box>
         );
     };

    // try{
    //     const response = await fetch(url);
    //     setLoading(false);
    //     return await response.json();
    // }catch(error) {
    //     console.log("error")
    //     console.log(error)
    //     return {"error":error};
    // }


    //let response = await fetch(url);
    //let data = await response.json();
    //console.log("DATA:", data)
    //return data

    useEffect(() => {
      fetchData();
    }, []);

    return (
      <NativeBaseProvider>
        <Center flex={1}>
        <Box> Fetch API</Box>
          {loading && <Box>Loading..</Box>}
          {data && (
            <FlatList
              data={data}
              renderItem={renderItem}
              keyExtractor={(item) => item.id.toString()}
            />
          )}
        </Center>
      </NativeBaseProvider>
    );
}

const Temperature = (props) => {
    return <Text>{props.value} &deg;C</Text>
}
