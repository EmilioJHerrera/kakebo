import React,  {useState, useEffect} from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Colors } from '../assets/Colors';

const Presupuesto = ({datos}) => {
   
   const [ingresos, setIngresos] = useState(0);
   const [gastos, setGastos] = useState(0);

   useEffect(() => {
       datos.map(dato => { dato.ingreso? setIngresos(ingresos + parseInt(dato.monto)): setGastos(gastos + parseInt(dato.monto))})
       
   }, [datos])
   
   return ( <View style={styles.container}>

        <Text style={styles.ingresoText}>Ingresos: {ingresos} $</Text>
        <Text style={styles.egresoText}>Egresos: {gastos} $</Text>
        <Text style={styles.text}>Presupuesto: {ingresos - gastos} $</Text>
        
            </View> 
    
    
    );
}

const styles = StyleSheet.create({
    container: {
        marginVertical: '2.5%',
        marginHorizontal: '5%',
        alignItems: 'center',
    },
    egresoText:{
        fontSize: 22,
        marginVertical: 15,
        color: Colors.expenses,
        
    },
    ingresoText:{
        fontSize: 22,
        marginVertical: 15,
        color: Colors.income,
    },
    text:{
        fontSize: 22,
         marginVertical: 15,
    },
    
});


 
export default Presupuesto;