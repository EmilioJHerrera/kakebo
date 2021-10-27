import React from 'react';
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native';

const ListaGastos = ({dato, eliminarRegistro}) => {
    return ( <View>
        <Text>{dato.id}</Text>
        <Text>{dato.descripcion}</Text>
        <Text>{dato.monto}</Text>
        {dato.ingreso ? <Text>Ingreso</Text> : <Text>Gasto</Text>}
        
        <View>
            <TouchableHighlight style={styles.buttonEliminar} onPress={() => {eliminarRegistro(dato.id)}}>
                <Text>Eliminar</Text>
            </TouchableHighlight>
        </View>

    </View> );
}

const styles = StyleSheet.create({
    buttonEliminar: {
        padding: 10,
        margin: 10,
        backgroundColor: 'red',
    },
});
export default ListaGastos;