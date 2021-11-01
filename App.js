import React, {useState} from 'react';
import { StyleSheet, Text, View, FlatList, TouchableHighlight } from 'react-native';

import ListaGastos from './components/ListaGastos';
import EntradaFormulario from './components/EntradaFormulario';
import Presupuesto from './components/Presupuesto';

import { Colors } from './assets/Colors';
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
      <View style={styles.header}>
      <Text style={styles.texto}>HEADER:  KAKEBO APP</Text>
      </View>
    
      <View>
        <TouchableHighlight style={styles.buttonShow}onPress={() => setShowNewForm(!showNewForm)}>
          <Text style={styles.texto}>{showNewForm?'Cancela nuevo registro': 'Crear el registro'}</Text>
        </TouchableHighlight>
      </View>
    
     <View>
      {showNewForm?( 
        <>
        <Text style={styles.texto}>INGRESE SUS GASTOS</Text>
        <EntradaFormulario datos={datos} setDatos={setDatos}/>
        </>
      ):(<></>)}
     </View>

     <View>
        <TouchableHighlight style={styles.buttonShow}onPress={() => setShowLista(!showLista)}>
          <Text style={styles.texto}>{showLista?'Oculta lista de gastos': 'Muestra lista de gastos'}</Text>
        </TouchableHighlight>
      </View>
      <View>
        {showLista?(<>
        
          <Text style={styles.texto}>{datos.length>0? 'LISTA DE GASTOS': 'NO HAY GASTOS'}</Text>
            <FlatList
            data= {datos}
            keyExtractor={(item) => item.id}
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
       <Text style={styles.texto}>PRESUPUESTO</Text>
       <Presupuesto datos={datos}/>
     </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop:40,
  
    backgroundColor: Colors.background,
    
  },
  buttonShow: {
    backgroundColor: '#00ff00',
  },
  header: {
    backgroundColor: Colors.navBar,
    padding: '10%',
    alignItems: 'center',
  },
  texto:{
    fontSize: 18,
  },
  
});
