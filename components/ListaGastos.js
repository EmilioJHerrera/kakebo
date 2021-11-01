import React from 'react';
import { StyleSheet, Text, TouchableHighlight, View, ScrollView } from 'react-native';

import { Colors } from '../assets/Colors';

const ListaGastos = ({dato, eliminarRegistro}) => {
    return ( <View style={styles.container}>
        
        {/* <Text>{dato.id}</Text> */}
        <Text style={styles.label}>{dato.descripcion}</Text>
        <Text style={styles.label}>{dato.monto} $</Text>
        {dato.ingreso ? <Text style={styles.ingresoText}>Ingreso</Text> : <Text style={styles.egresoText}>Gasto</Text>}
        
        <View>
            <TouchableHighlight style={styles.buttonEliminar} onPress={() => {eliminarRegistro(dato.id)}}>
                <Text style={styles.textBtnEliminar}>Eliminar</Text>
            </TouchableHighlight>
        </View>

    </View> );
}

const styles = StyleSheet.create({
    egresoText:{
        color: Colors.expenses,
        fontSize: 16,
    },
    ingresoText:{
        color: Colors.income,
        fontSize: 16,
    },
    label:{
        fontSize: 16,
        textTransform: 'uppercase',
        fontWeight: 'bold',
    },
    buttonEliminar: {
       fontSize:16,
        padding: 10,
        margin: 10,
        backgroundColor: 'red',
    },
    container:{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: '1%',
        marginHorizontal: '2.5%',
    },
    textBtnEliminar:{
        color: 'white',
        fontWeight: 'bold',
    },
});
export default ListaGastos;