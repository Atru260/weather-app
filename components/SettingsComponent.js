import * as React from 'react';
import { Text, View, SectionList, StatusBar } from 'react-native';



const DATA = [
  {
    title: 'Location',
    data: ['Get Current Location', 'Enter Location Manually'],
  },
  {
    title: 'Customization',
    data: ['Units', 'Appearance'],
  },
  {
    title: 'About',
    data: ['Data from openweathermap.org'],
  },
];

export default function Settings({styles}){
    return (
        <SectionList
          sections={DATA}
          keyExtractor={(item, index) => item + index}
          renderItem={({item}) => (
            <View style={styles.item}>
              <Text style={styles.title}>{item}</Text>
            </View>
          )}
          renderSectionHeader={({section: {title}}) => (
            <Text style={styles.header}>{title}</Text>
          )}
      />
  );
}
