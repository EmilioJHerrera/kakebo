import React,  {useState, useEffect} from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Presupuesto = ({datos}) => {
   
   const [ingresos, setIngresos] = useState(0);
   const [gastos, setGastos] = useState(0);

   useEffect(() => {
       datos.map(dato => { dato.ingreso? setIngresos(ingresos + dato.monto): setGastos(gastos + dato.monto)})
       
   }, [datos])
   
   return ( <View>


        <Text>Ingresos: {ingresos} $</Text>
        <Text>Egresos: {gastos} $</Text>
        <Text>Presupuesto: {ingresos - gastos} $</Text>
        
    </View> 
    
    
    );
}


 
export default Presupuesto;