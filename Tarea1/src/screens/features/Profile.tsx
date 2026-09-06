import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { TabsParamList } from '../../navigation/TabsNavigator';
import CustomButton from '../../components/CustomButton';

type ProfileProps = BottomTabScreenProps<TabsParamList, 'Profile'>;


export default function Profile({ route,navigation }: ProfileProps) {

  const email = route.params?.email ?? "{email}";

  const handleEditProfile = () => {
    navigation.navigate('Settings');
  };
  
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Bienvenido, {email}</Text>

        <View style={styles.buttonContainer}>
          <CustomButton 
            title="Cerrar Sesión" 
            onPress={() => {
              console.log('Cerrar sesión');
            }} 
          />

          <CustomButton 
            title="Ir Atrás" 
            onPress={() => {
              console.log('Ir atrás');
            }} 
          />

          <CustomButton 
            title="Ir a Preferencias de Usuario" 
            onPress={handleEditProfile} 
          />   
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f4f6f9',
    padding: 20,
  },
  card: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 24,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#1a1a1a',
    marginBottom: 6,
  },
  text: {
    fontSize: 15,
    color: '#666666',
    marginBottom: 24,
  },
  buttonContainer: {
    width: '100%',
    alignItems: 'center', 
    gap: 12,
  },
});