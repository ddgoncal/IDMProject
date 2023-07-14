import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Text, View } from 'react-native'
import Tile from '../components/Tile'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native'


const Jogo = props => {
  const navigation = useNavigation();
  const counter = useSelector((state) => state.counter.value)
  const [historico, setHistorico] = useState([]);

  const mudarParaOHistorico= () => {
    navigation.navigate("Historico" ,{
      historico: historico,
    })
  };

  return (
    <>
        <Text>Jogo</Text>
        <View style={{flexDirection: 'row'}}>
            <Tile />
            <Tile />
            <Tile />
            <Tile />
        </View>
        <View style={{flexDirection: 'row'}}>
            <Tile />
            <Tile />
            <Tile />
            <Tile />
        </View>
        <View style={{flexDirection: 'row'}}>
            <Tile />
            <Tile />
            <Tile />
            <Tile />
        </View>
        <Text style={{fontSize: 80}}>{counter}</Text>
    </>
  )
}

Jogo.propTypes = {}

export default Jogo