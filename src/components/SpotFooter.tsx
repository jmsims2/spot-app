import React from 'react';
import {
  View,
  TouchableWithoutFeedback,
  Image,
  Text,
  StyleSheet,
} from 'react-native';
import BottomSheet from 'reanimated-bottom-sheet';

type SpotFooterProps = {
  sheetRef: BottomSheet;
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 120,
    padding: 5,
  },
  avatarContainer: {
    flex: 1,
  },
  avatar: {
    height: 49,
    width: 49,
    borderColor: '#70B9B0',
    borderWidth: 2,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    flex: 1,
    alignItems: 'flex-end',
    paddingBottom: 15,
  },
  buttonImage: {
    height: 50,
    width: 50,
  },
  coordinatesContainer: {
    flex: 1,
    alignItems: 'flex-end',
    flexDirection: 'column',
  },
  coordinatesText: {
    color: 'white',
    fontStyle: 'italic',
    fontWeight: 'bold',
    fontSize: 12,
  },
});

export const SpotFooter = ({ sheetRef }) => (
  <View style={styles.container}>
    <View style={styles.avatarContainer}>
      <Image
        source={require('../assets/andy.jpeg')}
        style={styles.avatar}
        resizeMode="contain"
      />
    </View>
    <View style={styles.buttonContainer}>
      <TouchableWithoutFeedback onPress={() => sheetRef.current.snapTo(0)}>
        <Image
          style={styles.buttonImage}
          resizeMode="contain"
          source={require('../assets/spot_black_dropshadow_gradient.png')}
        />
      </TouchableWithoutFeedback>
    </View>

    <View style={styles.coordinatesContainer}>
      <Text style={styles.coordinatesText}>33.051293°N</Text>
      <Text style={styles.coordinatesText}>96.790247°W</Text>
    </View>
  </View>
);
