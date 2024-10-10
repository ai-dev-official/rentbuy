import React, { useState } from 'react';
import { Image, StyleSheet, Text, View, FlatList, Dimensions, ScrollView } from 'react-native';
import { stays, HomeStay } from './stays';
import Ionicon from 'react-native-vector-icons/Ionicons';

const Stay: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [favorites, setFavorites] = useState<boolean[]>(Array(stays.length).fill(false));

  const handleScroll = (event: any) => {
    const scrollPosition = event.nativeEvent.contentOffset.x;
    const screenWidth = Dimensions.get('window').width;
    const newIndex = Math.round(scrollPosition / screenWidth);
    setCurrentIndex(newIndex);
  };

  const toggleFavorite = (index: number) => {
    const updatedFavorites = [...favorites];
    updatedFavorites[index] = !updatedFavorites[index];
    setFavorites(updatedFavorites);
  };

  const styles = StyleSheet.create({
    container: {
      marginTop: 20,
    },
    wrapper: {
      marginBottom: 20,
    },
    imgWrapper: {
      width: Dimensions.get('window').width,
      height: 300,
      position: 'relative',
    },

    imgItems: {
      position: 'absolute',
      top: 10,
      left: 10,
      right: 50,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    favorite: {
      color: '#fff',
      fontSize: 16,
      backgroundColor: 'rgba(0, 0, 0, 0.4)',
      paddingHorizontal: 8,
      paddingVertical: 4,
      borderRadius: 5,
    },
    dotContainer: {
      position: 'absolute',
      bottom: 10,
      left: 0,
      right: 0,
      flexDirection: 'row',
      justifyContent: 'center',
    },
    dot: {
      width: 8,
      height: 8,
      borderRadius: 4,
      backgroundColor: 'rgba(255, 255, 255, 0.8)',
      marginHorizontal: 4,
    },
    activeDot: {
      backgroundColor: '#fff',
    },
    stayName: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginVertical: 10,
    },
    details: {
      flexDirection: 'column',
      justifyContent: 'space-between',
    },
    priceContainer: {
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center',
      marginTop: 10,
    },
    priceText: {
      fontSize: 16,
      fontWeight: 'bold',
    },
    distance: {},
    date: {},
    image: {
      width: "100%",  // Set your desired width
      height: 300, // Set your desired height
    },
    scroll: {
      flexDirection: 'column',
    },
    priceDetail:{
      marginLeft: 5,
    },
    ratingsWrapper:{
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    img: {
      width: Dimensions.get('window').width, // Full width for paging effect
      height: '100%', 
      resizeMode: 'cover', 
    },
    country:{
      fontSize: 20,
      fontWeight: '500',
    }
  });

  const renderImage = (images: string[], stayIndex: number, currentIndex: number, setCurrentIndex: React.Dispatch<React.SetStateAction<number>>) => (
    <FlatList
      data={images}
      horizontal
      pagingEnabled
      showsHorizontalScrollIndicator={false}
      onScroll={(event) => {
        const contentOffsetX = event.nativeEvent.contentOffset.x;
        const index = Math.floor(contentOffsetX / Dimensions.get('window').width);
        if (index !== currentIndex) {
          setCurrentIndex(index);
        }
      }}
      renderItem={({ item }) => (
        <Image source={{ uri: item }} style={styles.img} />
      )}
      keyExtractor={(item, index) => `${stayIndex}-image-${index}`}
    />
  );

  // Function to render stars based on rating
const renderStars = (rating: number) => {
  const fullStars = Math.floor(rating); // Full stars (integer part)
  const halfStars = rating % 1 >= 0.5 ? 1 : 0; // Half star if there's a decimal part
  const emptyStars = 5 - fullStars - halfStars; // Calculate empty stars

  return (
    <View style={styles.ratingsWrapper}>
      {Array(fullStars).fill(0).map((_, index) => (
        <Ionicon key={`full-${index}`} name="star" size={16} color="#f0c419" />
      ))}
      {Array(halfStars).fill(0).map((_, index) => (
        <Ionicon key={`half-${index}`} name="star-half" size={16} color="#f0c419" />
      ))}
      {Array(emptyStars).fill(0).map((_, index) => (
        <Ionicon key={`empty-${index}`} name="star-outline" size={16} color="#f0c419" />
      ))}
    </View>
  );
};

if (stays.length === 0) {
  return <div>No stays available</div>;
}


  return (
    <ScrollView
    contentContainerStyle={styles.scroll}
    showsVerticalScrollIndicator={false}
    vertical={true}
     style={styles.container}
     >
      {stays.map((stay: HomeStay) => (
        <View key={stay.id} style={styles.wrapper}>
          <View style={styles.imgWrapper}>
          {renderImage(stay.images, stay.id, currentIndex, setCurrentIndex)}
            <View style={styles.imgItems}>
              <Text style={styles.favorite}>Favorite</Text>
              <Ionicon name="heart" size={24} color="#000000" />
            </View>
            <View style={styles.dotContainer}>
              {stay.images.map((_, dotIndex) => (
                <View
                  key={`dot-${dotIndex}`}
                  style={[
                    styles.dot,
                    currentIndex === dotIndex && styles.activeDot,
                  ]}
                />
              ))}
            </View>
          </View>
          <View style={styles.stayName}>
            <Text style={styles.country}>{stay.city}, {stay.country}</Text>
            <View style={styles.ratingsWrapper}>
            {renderStars(stay.rating)}
            <Text>{stay.rating}</Text>
            </View>
          </View>
          <View style={styles.details}>
            <Text style={styles.distance}>119 km away</Text>
            <Text style={styles.date}>
              {stay.dates.month}. {stay.dates.begin} - {stay.dates.end}
            </Text>
          </View>
          <View style={styles.priceContainer}>
            <Text style={styles.priceText}>€{stay.price}</Text>
            <Text style={styles.priceDetail}>EUR</Text>
            <Text style={styles.priceDetail}>Per Night</Text>
          </View>
        </View>
      ))}
    </ScrollView>
  );
};

export default Stay;
