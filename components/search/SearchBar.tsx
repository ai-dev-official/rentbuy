import React from 'react';
import { StyleSheet, Text, View, ViewStyle, TextStyle } from 'react-native';
import { useTheme } from 'react-native-paper';
const SearchIcon = require('react-native-vector-icons/Feather').default;
const DotIcon = require('react-native-vector-icons/Octicons').default;



// Define the type for styles
type Styles = {
  wrapper: ViewStyle;
  trailingText: ViewStyle;
  search?: ViewStyle; // Optional styles if you plan to add more properties to search icon
  searchTexts?: ViewStyle; // Optional style if you plan to add styles to searchTexts View
  leadingText?: TextStyle; // Optional style if you plan to add styles to leadingText
  dot?: ViewStyle; // Optional styles for DotIcon
  placeholderText: TextStyle;
};

const SearchBar: React.FC = () => {
  const { colors } = useTheme();

  const styles = StyleSheet.create<Styles>({
    wrapper: {
      borderWidth: 1,
      borderRadius: 20,
      paddingHorizontal: 20,
      height: 60,
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center',
      borderColor: colors.primary, // Optional: using theme color
    },
    search:{
      paddingRight: 20,
    },
    trailingText: {
      flexDirection: 'row',
      alignItems: 'center', // Changed from alignContent to alignItems
      justifyContent: 'space-between',
    },
    searchTexts:{
      justifyContent: 'space-evenly',
    },
    leadingText:{
      fontSize: 18,
      fontWeight: '700',
    },
    dot:{
      marginHorizontal: 20,
    },
    placeholderText:{
      color: 'grey',
    }
  });

  return (
    <View style={styles.wrapper}>
      <SearchIcon name="search" size={36} style={styles.search} />

      <View style={styles.searchTexts}>
        <Text style={styles.leadingText}>Where to?</Text>
        <View style={styles.trailingText}>
          <Text style={styles.placeholderText}>Anywhere</Text>
          <DotIcon name="dot-fill" size={12} style={styles.dot} />
          <Text style={styles.placeholderText}>Any week</Text>
          <DotIcon name="dot-fill" size={12} style={styles.dot} />
          <Text style={styles.placeholderText}>Add guests</Text>
        </View>
      </View>
    </View>
  );
};

export default SearchBar;
