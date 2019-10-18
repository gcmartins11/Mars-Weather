import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  ImageBackground,
} from 'react-native';

import BackgroundIMG from './assets/insight-wallpaper.jpg'

import Api from './Api'

import SmallCard from './components/smallCard'

export default class MarsWeather extends Component {

  constructor(props) {
    super(props)
    this.state = {
      sols: []
    }
    this.getData()
  }

  getData = async () => {
    const response = await Api.get()

    const data = Object.entries(response.data)
    // console.warn('data', data)
    const sols = data.slice(0, 7)
    // console.warn('sols', sols)
    this.setState({ sols: sols })
  }

  render() {
    return (
      <ImageBackground source={BackgroundIMG} style={{ width: '100%', height: '100%' }}>
        <StatusBar hidden={true} />
        <View style={styles.container}>
          <SafeAreaView>

            <ScrollView>
              <Text style={styles.title}>Latest Weather at Elysium Planitia</Text>
              <Text style={styles.subtitle}>InSight is taking daily weather measurements (temperature, wind, pressure) on the surface of Mars at Elysium Planitia, a flat, smooth plain near Mars’ equator.</Text>

              {this.state.sols.map(key => {
                return <View>

                  <SmallCard sol={key[0]} min={key[1].AT.mn} avg={key[1].AT.av} max={key[1].AT.mx}></SmallCard>

                </View>
              })}
            </ScrollView>
          </SafeAreaView>
        </View>
      </ImageBackground>
    )
  }
}

let styles = StyleSheet.create({
  container: {
    paddingTop: 25,
    paddingLeft: 15,
    paddingRight: 15,
  },
  title: {
    color: '#fff',
    fontSize: 40,
    fontWeight: 'bold',
    textShadowColor: '#000',
    textShadowOffset: { width: 2, height: 3 },
    textShadowRadius: 8

  },
  subtitle: {
    color: '#fff',
    fontSize: 16,
    textShadowColor: '#000',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
    marginBottom: 20
  }
})