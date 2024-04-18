import React from 'react';
import {
  View,
  StyleSheet,
  Button,
  ImageBackground,
  ScrollView,
} from 'react-native';

export const StudentID = () => {
  return (
    <ScrollView>
      <View style={styles.card}>
        <View style={{ borderRadius: 10, overflow: 'hidden' }}>
          <ImageBackground
            source={require('../../assets/background-id.png')}
            style={{ width: '100%', height: '100%' }}
          ></ImageBackground>
        </View>
      </View>
      <View style={styles.button}>
        <Button title={'Descargar'} onPress={() => {}} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  card: {
    height: 550,
    backgroundColor: 'white',
    margin: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },

  button: {
    margin: 20,
  },
});
