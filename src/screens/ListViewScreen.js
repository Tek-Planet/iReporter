import React, {useState,useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { markers } from '../../assets/model/mapData';
import axios from 'axios';

const ListViewScreen = ({navigation}) => {
  
  const initialMapState = {
    markers
  };
  
  //https://phoenix311openapi.azurewebsites.net/api/Request?start_date=2020-09-15T00:00:00Z
  
  const [state, setState] = React.useState(markers);
  // const [result, setResult] = React.useState(state);
  
  const goNext = () => {
      console.log(method)
  }
  
  useEffect(() => {
    setTimeout(() => {
      axios.get('https://phoenix311openapi.azurewebsites.net/api/Request?start_date=2020-09-13T00:00:00Z')
      .then(res => {
        setState(res.data)})
        .catch(err => {
          console.log(err)
        })
    }, 5000);
  }, []);

 
    return (
      <View style={{flex:1}}>
         <View style={{padding:10, flexDirection: 'row', justifyContent:'space-between'}}>
            <TouchableOpacity >
              <Icon name="search-outline" color={'#2CB7EA'} 
                size={26} />
          </TouchableOpacity>
         <View style={{flexDirection:'row'}}>
                   <TouchableOpacity    
                       onPress={() => navigation.navigate('Map')}
                       style={[styles.categoryList,{backgroundColor:'#ccc'}]}>
                       <Text style={styles.categoryListText}>
                      Map
                       </Text>
                     </TouchableOpacity>
                     
                     <TouchableOpacity 
                 
                    style={styles.categoryList}>
                    <Text style={styles.categoryListText}>
                    List
                    </Text>
                  </TouchableOpacity>
          </View>
         <TouchableOpacity >
            <Text  
            style={{color: '#2CB7EA',  fontWeight:'bold', margin:2, fontSize:16}}>
          Filter
            </Text>
        </TouchableOpacity> 
        </View>
        {/* show list of all requests */}
        <ScrollView>
      
        <View>
  
        <FlatList 
              
               data = {state}
               renderItem = {({item}) =>{   
                return (
                  <View>
                   <View style={{padding:20}}>
                       <Text style={{margin:5, fontSize:18}}>
                       <Text style={{fontWeight:'bold'}}>Service Name: </Text> { item.service_name}
                       </Text>
                       <Text style={{margin:5, fontSize:18, fontWeight:'normal'}}>
                      <Text style={{fontWeight:'bold'}}>Date: </Text> { item.requested_datetime}
                       </Text>
                       <Text style={{margin:5, fontSize:18, fontWeight:'normal'}}>
                       <Text style={{fontWeight:'bold'}}>Status: </Text> { item.status}
                       </Text>
                       <Text style={{margin:5, fontSize:18, fontWeight:'normal'}}>
                       <Text style={{fontWeight:'bold'}}>Request Description: </Text>   { item.description}
                       </Text>
                      
                   </View>
                   
                   <View
                   style={{
                     height: 1,
                     backgroundColor: "#CED0CE",   
                   }}
                 />
                   </View>
                   )
               }}
               />
        {/* {state.markers.map((marker, index) => {
           
        })} */}
        </View>
        </ScrollView>
      </View>
      
    ); 
}

export default ListViewScreen

const styles = StyleSheet.create({ 
  categoryList: {
    padding:5,
    margin: 1,
    borderRadius:5,
    borderWidth:1,
    borderColor:  '#000'
  
  },
  categoryListText:{
    color:'#000',
    fontSize:14,
    fontWeight:'bold'
  },                   
                                  
})