import { ScrollView, StyleSheet, View, Text } from 'react-native';
import React from 'react';
import { useTheme } from 'react-native-paper';
import { cribs, Crib } from '../data/data.tsx';

const Cribs: React.FC = () => {
  const { colors } = useTheme();

  const styles = StyleSheet.create({
    wrapper: {
      paddingVertical: 20,
    },
    scroll: {
      flexDirection: 'row',
    },
    cribs: {
      width: 60,
      height: 60, // Adjust height as needed
      alignItems: 'flex-start',
      justifyContent: 'center',
      marginHorizontal: 10, // Add some spacing between items
    },
    crib:{
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
      fontSize: 10,
      marginTop: 5, 
    },
  });

  return (
    <ScrollView
      horizontal
      style={styles.wrapper}
      contentContainerStyle={styles.scroll}
      showsHorizontalScrollIndicator={false}
    >
      {cribs.map((crib: Crib) => (
        <View key={crib.id} style={styles.cribs} testID="crib-item">
         <View style={styles.crib}>
         <View testID={`icon-${crib.id}`}>
            <crib.icon name={crib.title} size={crib.size} color={colors.primary} />
          </View>
          <Text style={styles.text} testID={`title-${crib.id}`}>
            {crib.name}
          </Text>
         </View>
        </View>
      ))}
    </ScrollView>
  );
};

export default Cribs;




// import {ScrollView, StyleSheet, View, Text} from 'react-native';
// import React from 'react';
// import {useTheme} from 'react-native-paper';
// import {cribs, Crib} from '../data/data.tsx';

// const Cribs: React.FC = () => {
//   const {colors} = useTheme();

//   const styles = StyleSheet.create({
//     wrapper: {
//       width: '100%',
//       flexDirection: 'row',
//       justifyContent: 'flex-start',
//       paddingVertical: 20,
//     },
//     scroll: {
//       flexDirection: 'row',
//     },
//     cribs: {
//         width: 100,
//         height: 60,
//       flexDirection: 'row',
//       alignItems: 'flex-start',
//     },
//     crib: {
//       alignItems: 'center', // Center items
//      justifyContent: 'center', // Center items
//     },
//   });

//   return (
//     <ScrollView horizontal={true} contentContainerStyle={styles.wrapper}>
//       {cribs.map((crib: Crib) => (
//         <View key={crib.id} style={styles.cribs} testID="crib-item">
//           <View style={styles.crib} testID={`icon-${crib.id}`}>
//             <crib.icon name={crib.title} size={crib.size} />
//             <Text testID={`title-${crib.id}`}>{crib.name}</Text>
//           </View>
//         </View>
//       ))}
//     </ScrollView>
//   );
// };

// export default Cribs;