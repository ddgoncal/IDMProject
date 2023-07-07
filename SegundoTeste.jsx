import React, { useEffect, useState } from 'react'
import { Button, Text } from 'react-native'
import PrimeiroTeste from './PrimeiroTeste'

const SegundoTeste = () => {
  const texto = "SegundoTeste";
  const [counter, setcounter] = useState(0);

  useEffect(() => {
    console.log("entrou aqui");
  }, [counter])

  return (
    <>
      <PrimeiroTeste texto="Primeiro"/>
      <Text style={{fontSize: 80}}>{counter}</Text>
      <Button title='Incrementa' onPress={() => setcounter(counter +1) } />
      <Button title='Decrementa' onPress={() => setcounter(counter -1 )} />
    </>
  )
}

export default SegundoTeste