import React from 'react';
import { StyleSheet, ScrollView, View, Image, Text } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

export const Home = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.imageBox}>
          <Image
            style={styles.image}
            source={require('../../assets/favicon.png')}
          />
        </View>
        <View style={styles.infoBox}>
          <View style={styles.row}>
            <Text style={styles.name}>Jonathan Josue Vidrio Hernández</Text>
          </View>
          <View style={styles.row}>
            <Ionicons name={'person-circle'} size={24} style={styles.icon} />
            <Text style={styles.textBold}>No. de Control:</Text>
            <Text style={styles.text}>200112044</Text>
          </View>
          <View style={styles.row}>
            <Ionicons name={'mail'} size={24} style={styles.icon} />
            <Text style={styles.textBold}>Correo:</Text>
            <Text style={styles.text}>email@example.com</Text>
          </View>
          <View style={styles.row}>
            <Ionicons name={'school'} size={24} style={styles.icon} />
            <Text style={styles.textBold}>Carrera:</Text>
            <Text style={styles.text}>Ingeniería Informática</Text>
          </View>
          <View style={styles.row}>
            <Ionicons name={'logo-vercel'} size={24} style={styles.icon} />
            <Text style={styles.textBold}>Semestre:</Text>
            <Text style={styles.text}>8</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },

  imageBox: {
    marginVertical: 20,
  },

  image: {
    borderRadius: 50,
    width: 200,
    height: 200,
    alignSelf: 'center',
  },

  infoBox: {
    marginVertical: 10,
  },

  name: {
    fontSize: 26,
    fontWeight: 'bold',
    marginVertical: 20,
  },

  row: {
    flexDirection: 'row',
    marginVertical: 5,
  },

  icon: {
    marginRight: 10,
  },

  text: {
    fontSize: 16,
    marginHorizontal: 10,
  },

  textBold: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
