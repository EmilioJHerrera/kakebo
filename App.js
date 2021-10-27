import React, {useState} from 'react';
import { StyleSheet, Text, View, FlatList, TouchableHighlight } from 'react-native';

import ListaGastos from './components/ListaGastos';
import EntradaFormulario from './components/EntradaFormulario';
import Presupuesto from './components/Presupuesto';

export default function App() {
  
  const [datos, setDatos] = useState([
    // {id: "1", descripcion: "comida", monto: 1000,  ingreso: false},
    // {id: "2", descripcion: "ingreso trabajo", monto: 500, ingreso: true},
    // {id: "3", descripcion: "alquiler", monto: 2000, ingreso: false}
  ]);

 //hooks para mostrar u ocultar secciones
  const [showNewForm, setShowNewForm] = useState(false);
  const [showLista, setShowLista] = useState(true);

  // funcion para eliminar un registro
  const eliminarRegistro = (id) => {
    setDatos(datos.filter((item) => item.id !== id));
  };
  
  
  
  
  return (
    <View style={styles.container}>
      <View>
      <Text>HEADER</Text>
      </View>
    
      <View>
        <TouchableHighlight style={styles.buttonShow}onPress={() => setShowNewForm(!showNewForm)}>
          <Text>{showNewForm?'Cancela nuevo registro': 'Crear el registro'}</Text>
        </TouchableHighlight>
      </View>
    
     <View>
      {showNewForm?( 
        <>
        <Text>INGRESE SUS GASTOS</Text>
        <EntradaFormulario datos={datos} setDatos={setDatos}/>
        </>
      ):(<></>)}
     </View>

     <View>
        <TouchableHighlight style={styles.buttonShow}onPress={() => setShowLista(!showLista)}>
          <Text>{showLista?'Oculta lista de gastos': 'Muestra lista de gastos'}</Text>
        </TouchableHighlight>
      </View>
      <View>
        {showLista?(<>
        
          <Text>{datos.length>0? 'LISTA DE GASTOS': 'NO HAY GASTOS'}</Text>
            <FlatList
            data= {datos}
            renderItem={({item})=>{
              return <>
               <ListaGastos dato={item} eliminarRegistro={eliminarRegistro}/>
                    </>
            }}
            />
                    </>

        ):(<></>)}
        
        </View>

        <View>
       <Text>PRESUPUESTO</Text>
       <Presupuesto datos={datos}/>
     </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop:40,
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  buttonShow: {
    backgroundColor: '#00ff00',
  },
});
