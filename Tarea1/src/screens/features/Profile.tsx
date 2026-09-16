import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { TabsParamList } from '../../navigation/TabsNavigator';
import CustomButton from '../../components/CustomButton';
import { useTheme } from '../../contexts/ThemeContext';

type ProfileProps = BottomTabScreenProps<TabsParamList, 'Profile'>;

export default function Profile({ route, navigation }: ProfileProps) {
  
  const { colors } = useTheme();

  const email = route.params?.email ?? "{email}";

  const handleEditProfile = () => {
    navigation.navigate('Settings');
  };
  
  return (
    
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      
      <View style={[
        styles.card, 
        { 
          backgroundColor: colors.cardBackground, 
          borderColor: colors.cardBorder,
          borderWidth: 1,
        }
      ]}>
        
        <Text style={[styles.title, { color: colors.text }]}>
          Perfil de Usuario
        </Text>

        <View style={styles.buttonContainer}>
          <CustomButton 
            title="Cerrar Sesión" 
            onPress={() => {
              console.log('Cerrar sesión');
            }} 
            variant="primary"
          />

          <CustomButton 
            title="Ir Atrás" 
            onPress={() => {
              console.log('Ir atrás');
            }} 
            variant="secondary"
          />

          <CustomButton 
            title="Ir a Preferencias de Usuario" 
            onPress={handleEditProfile} 
            variant="tertiary"
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
    padding: 20,
  },
  card: {
    width: '100%',
    maxWidth: 360,
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
    marginBottom: 16,
  },
  text: {
    fontSize: 15,
    marginBottom: 24,
  },
  buttonContainer: {
    width: '100%',
    alignItems: 'center', 
    gap: 12,
  },
});