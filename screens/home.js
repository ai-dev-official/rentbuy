import { Platform, StatusBar, StyleSheet, Text, View, useWindowDimensions } from 'react-native'
import React from 'react'
import { useTheme } from 'react-native-paper'
import SearchBar from '../components/search/SearchBar';
import Cribs from '../components/crib/crib';
import Stay from '../components/stays/stay';




const Home = () => {
    const {color} = useTheme();
    const {height, width} = useWindowDimensions();

    const styles = StyleSheet.create({
        wrapper:{
            height:Platform.OS === 'ios' ? height-50 : height+10,
            width: width, 
            padding: 20,
        }
    })

  return (
    <View style={styles.wrapper}>
         <StatusBar translucent backgroundColor="transparent" barStyle="dark-content" />
      <SearchBar />
      <Cribs />
      <Stay />
    </View>
  )
}

export default Home;
