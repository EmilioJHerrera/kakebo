import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput,Picker, TouchableHighlight, Alert} from 'react-native';

import 'react-native-get-random-values';
import { nanoid } from 'nanoid';

// ojo que el picker esta deprecado



const EntradaFormulario = ({datos,setDatos}) => {
    //crear los state para los inputs
    const [id, setId] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [cantidad, setCantidad] = useState('');
    const [selectedValue, setSelectedValue] = useState(0);
    
    const showAlert = () => {
        Alert.alert(
            "Error",
            "Debe completar todos los campos",
            [{
                text: "OK",
            }]
        )
    };
    
    const validar = () => {
        if(descripcion.trim() === "" || cantidad.trim() === "" || selectedValue === 0){
            showAlert();
            return;
        }
    };
    
    const generateId = () => {
       //recuerda intalar e importar get-random-values ANTES de importala
        setId(nanoid());
    };


    const contruirNuevaEntrada = () => {
        generateId();
        const nuevaEntrada = {
            id: id,
            descripcion: descripcion,
            monto: cantidad,
            ingreso: selectedValue
        };
        setDatos([...datos, nuevaEntrada]);
        
    }
    
    const handleSubmit = () => {
        validar();
        contruirNuevaEntrada();
    }
    
    return ( <View>
        <View>
        <Text>Descripcion:</Text>
        <TextInput style={styles.input} placeholder="Ingrese descripcion"
        onChangeText={(text) => setDescripcion(text)}
        />
        </View>

        <View>
        <Text>Cantidad:</Text>
        <TextInput style={styles.input} placeholder="Ingrese cantidad" 
        onChangeText={(text) => setCantidad(text)}
        keyboardType='numeric'/>
        </View>
        
        <View>
            <Picker
            selectedValue={selectedValue}
            onValueChange={(itemValue, itemIndex)=>setSelectedValue(itemValue)}>
                <Picker.Item label="Seleccione una categoria" value="0" />
                <Picker.Item label="Ingreso" value={true} />
                <Picker.Item label="Gasto" value={false} />
            </Picker>

        </View>

        <View>
            <TouchableHighlight style={styles.buttonContainer} onPress={handleSubmit}>
                <Text style={styles.buttonText}>Agregar</Text>
            </TouchableHighlight>
        </View>
        
    </View> );
}

const styles = StyleSheet.create({
    input: {},
    buttonContainer: {
        padding: 10,
        backgroundColor: 'green',
        marginVertical: 10,
    },
    buttonText: {},
});
 
export default EntradaFormulario;