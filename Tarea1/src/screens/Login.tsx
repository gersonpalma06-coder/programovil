import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CustomButton from '../components/CustomButton';
import CustomInput from '../components/CustomInput';
import React, { useState, useEffect } from "react";
import { useAuth } from '../contexts/AuthContext';

export default function Login({ navigation }: any) {
const {login} = useAuth();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [contador, setContador] = useState(0);

  /* 
    useEffect sin arreglo de dependencias
    1. Definición: Se ejecuta después de cada render del componente (por ejemplo, al escribir cada letra en 
    el email o contraseña).
    2. Cuando se requiere ejecutar lógica en cada actualización de la pantalla, aunque se debe usar con 
    cuidado para evitar problemas de rendimiento.
  */
  useEffect(() => {
    console.log("Componente renderizado (cualquier estado cambió)");
  });

  /* 
    useEffect con arreglo de dependencias
    1. Definición: Se ejecuta únicamente cuando cambia el valor de la variable 'contador'.
    2. Para reaccionar a cambios en variables específicas (ej. guardar datos automáticamente al cambiar 
    una variable).
  */
  useEffect(() => {
    console.log("El contador cambió a:", contador);
  }, [contador]);

  const handleLogin = () => {
    const allowed = login(email);
    if (allowed) {
    navigation.navigate('UserTabs', { screen: "HomeTab" , params:{ email }});
    } else {
      console.log('Acceso denegado. Solo se permiten correos .edu');
    }
  };

  return (
    <View style={styles.container}>

      <Text style={styles.title}>Bienvenido a Login</Text>

      <CustomInput
        placeholder="estudiante@unitec.com"
        value={email}
        onChangeText={setEmail}
        type="email"
      />

      <CustomInput
        placeholder="Contraseña"
        value={password}
        onChangeText={setPassword}
        type="password"
      />

      <CustomButton
        title="Iniciar Sesión"
        onPress={handleLogin}
      />

      <View style={styles.tareaContainer}>

        <Text style={styles.tareaTitle}>
          Prueba de useState
        </Text>

        <Text style={styles.text}>
          Valor del contador: {contador}
        </Text>

        <CustomButton
          title="Incrementar Contador"
          onPress={() => setContador(contador + 1)}
        />

      </View>

      <StatusBar style="auto" />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },

  title: {
    marginBottom: 20,
    fontSize: 18,
    fontWeight: 'bold',
  },

  tareaContainer: {
    marginTop: 30,
    paddingTop: 20,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    width: '100%',
    alignItems: 'center',
  },

  tareaTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },

  text: {
    fontSize: 16,
    marginBottom: 15,
  },
});