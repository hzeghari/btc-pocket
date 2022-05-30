import axios from 'axios';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
// import { QC_Access_Key, QC_Secret_Key } from '@env';
import React, { useState } from 'react';
import config from './config';

export default function App() {

  const [price, setPrice] = useState(0);
  const configs = {
    headers: {
      'QC-Access-Key': config.QC_Access_Key,
      'QC-Secret-Key': config.QC_Secret_Key
    }
  };
  React.useEffect(() => {
    
    axios.get(config.GET_BTC_PRICE_URL, configs)
    .then((response) => {
      console.log(response.data.data.coin_price);
      setPrice(response.data.data);
    });
  }, []);

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Text>QC_Access_Key: {config.QC_Access_Key}</Text>
      <Text style={styles.home}>Bitcoin price is :</Text>
      <Text style={styles.home}>{price.coin_price}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  home: {
    fontSize: 40,
    color: '#fff',
    backgroundColor: "green",
    textAlign: 'center',
    margin: "auto",
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
