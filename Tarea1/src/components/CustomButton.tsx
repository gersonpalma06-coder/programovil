import React from 'react';
import { TouchableOpacity, Text, StyleSheet} from 'react-native';

type CustomButtonProps = {
    title: string;
    onPress: () => void;
    variant?: "primary" | "secondary" | "tertiary"; // a esto se le conoce como union de literales
}

export default function CustomButton({title, onPress, variant='primary'}: CustomButtonProps) {
  const styles = getstyles(variant);
    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={styles.buttonTitle}> {title} </Text>
        </TouchableOpacity>
    );
}

const getstyles = (variant: "primary" | "secondary" | "tertiary") => 
    { return StyleSheet.create({
    button: {
        backgroundColor: variant === 'primary' ? 'navy' : 
                            variant === 'secondary' ? 'lightblue' : '#ffffff', //esto es un operador ternario, es como un if else, anidado, si es primary, navy, si es secondary, lightblue, sino blanco
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        width: 150,
    },    
    buttonTitle: {
        color: variant === 'primary' ? 'white' : 
                variant === 'secondary' ? 'black' : 'black', //esto es un operador ternario, es como un if else, anidado, si es primary, blanco, si es secondary, negro, sino navy
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    }
})}