import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CustomButton from '../components/CustomButton';

export default function Register() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [contador, setContador] = useState(0);

  /* 
    useEffect sin arreglo de dependencias
    1. Definición: Función ejecutada tras cada renderizado del componente.
    2. Útil para trazar logs continuos de actividad en la pantalla.
  */
  useEffect(() => {
    console.log("Componente renderizado (se ejecuta siempre)");
  });

  /* 
    useEffect con arreglo de dependencias
    1. Definición: Solo se ejecuta si 'contador' sufre modificaciones.
    2. Ideal para disparar alertas o validaciones basadas en una variable puntual.
  */
  useEffect(() => {
    console.log("El contador cambió a:", contador);
  }, [contador]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Pantalla de Registro
      </Text>
      <Text>Email: {email}</Text>
      <Text>
        Valor del contador: {contador}
      </Text>

      <CustomButton
        title="Incrementar Contador"
        onPress={() => setContador(contador + 1)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },

  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});