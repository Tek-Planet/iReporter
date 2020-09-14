import React, {useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { markers } from '../../assets/model/mapData';

const ListViewScreen = ({navigation}) => {
  
  const initialMapState = {
    markers
  };
  
  const [state, setState] = React.useState(initialMapState);

 
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
        {state.markers.map((marker, index) => {
             return (
             <View>
              <View style={{padding:20}}>
                  <Text style={{margin:5, fontSize:18}}>
                  <Text style={{fontWeight:'bold'}}>Service Name: </Text> { marker.service_name}
                  </Text>
                  <Text style={{margin:5, fontSize:18, fontWeight:'normal'}}>
                 <Text style={{fontWeight:'bold'}}>Date: </Text> { marker.requested_datetime}
                  </Text>
                  <Text style={{margin:5, fontSize:18, fontWeight:'normal'}}>
                  <Text style={{fontWeight:'bold'}}>Status: </Text> { marker.status}
                  </Text>
                  <Text style={{margin:5, fontSize:18, fontWeight:'normal'}}>
                  <Text style={{fontWeight:'bold'}}>Request Description: </Text>   { marker.description}
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
        })}
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