import React from 'react';
import { View, Text, StyleSheet, Button, Switch } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../../contexts/ThemeContext';

export default function Settings() {
  
  const { isDark, colors, toggleTheme } = useTheme();

  return (
    
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      
      <Ionicons
        name={isDark ? 'moon' : 'sunny'}
        size={72}
        color={colors.primary}
        style={styles.icon}
      />
      
      <Text style={[styles.title, { color: colors.text }]}>
        Tema actual: {isDark ? 'Oscuro' : 'Claro'}
      </Text>
      <Text style={[styles.text, { color: colors.textSecondary }]}>
        Cambia el tema y observa cómo toda la interfaz se actualiza automáticamente.
      </Text>
      
      <View style={styles.row}>
        <Text style={[styles.label, { color: colors.text }]}>
          {isDark ? 'Desactivar modo oscuro' : 'Activar modo oscuro'}
        </Text>
        <Switch
          value={isDark}
          onValueChange={toggleTheme}
          thumbColor={isDark ? colors.primary : '#f4f3f4'}
          trackColor={{ false: '#ccc', true: '#9B59B6' }}
        />
      </View>

      <View style={styles.buttonContainer}>
        <Button 
          title="Cerrar Sesión" 
          onPress={() => console.log("Sesión cerrada")} 
          color={colors.primary} 
        />
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 32,
  },
  icon: { 
    marginBottom: 20 
  },
  title: {
    fontSize: 24, 
    fontWeight: 'bold',
    marginBottom: 12,
    textAlign: 'center',
  },
  text: {
    fontSize: 15,
    textAlign: 'center',
    marginBottom: 40,
    lineHeight: 22,
  },
  row: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    gap: 16 
  },
  label: { 
    fontSize: 16 
  },
  buttonContainer: {
    marginTop: 40, 
    width: '100%',
  }
});