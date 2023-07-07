import React from 'react'
import PropTypes from 'prop-types'
import { Text } from 'react-native'
import Tile from '../components/Tile'

const Jogo = props => {
  return (
    <>
        <Text>Jogo</Text>
        <Tile />
        <Tile />
        <Tile />
        <Tile />
    </>
  )
}

Jogo.propTypes = {}

export default Jogo