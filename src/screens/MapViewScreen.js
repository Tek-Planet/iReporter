import React, { useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Animated,
  TouchableOpacity,
} from "react-native";


import MapView,{Callout} from "react-native-maps";

import { markers } from '../../assets/model/mapData';

import Icon from 'react-native-vector-icons/Ionicons';



const MapViewScreen = ({navigation}) => {
  
  //method to change screen
  const changeScreen = (screen) => {
    navigation.navigate(screen) 
  }
  
  
  const initialMapState = {
    markers,
    region: {
     latitude: 33.44837,
      longitude: -112.0740,
      // latitudeDelta: 0.0022,
      // longitudeDelta: 0.0021,
      
    //  latitude: 37.78825,
     // longitude: -122.4324,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    },
  };


const [state, setState] = React.useState(initialMapState);
const _map = React.useRef(null);

return (
  <View style={styles.container}>
  <View style={{padding:10, flexDirection: 'row', justifyContent:'space-between'}}>
    <TouchableOpacity >
    <View  style={{flexDirection: 'row'}}>
    <Icon name="search-outline" color={'#2CB7EA'} 
      size={26} />

    </View>
    </TouchableOpacity>
    <View style={{flexDirection:'row'}}>
                   <TouchableOpacity    
                       style={styles.categoryList}>
                       <Text style={styles.categoryListText}>
                      Map
                       </Text>
                     </TouchableOpacity>
                     
                     <TouchableOpacity 
                    onPress={() => navigation.navigate('List')}
                    style={[styles.categoryList,{backgroundColor:'#ccc'}]}>
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
      <MapView
        ref={_map}
        initialRegion={state.region}
        style={styles.container}
      >
        {state.markers.map((marker, index) => {
          // convert lat and logitude to coordinates
          let  latlng = {
            latitude: marker.lat,
            longitude: marker.long
          }
          return (
            <MapView.Marker key={index} coordinate={latlng}>
              <Animated.View style={[styles.markerWrap]}>
                <Animated.Image
                  source={require('../../assets/map_marker.png')}
                  style={[styles.marker]}
                  resizeMode="cover"
                />
              </Animated.View>
              
              <Callout tooltip>
             
                <View style={styles.bubble}>
                <Text style={styles.name}>{marker.service_name}</Text>
                <Text>{marker.description}</Text>
              {/* <Text style={styles.name}>Request Date:{marker.requested_datetime}</Text> */}
              
                </View>
                <View style={styles.arrowBorder} />
                <View style={styles.arrow} />
             
            </Callout>
            </MapView.Marker>
          );
        })}
      </MapView>
    </View>)
}
export default MapViewScreen

const styles = StyleSheet.create({
  
  container: {
    flex: 1,
  },
  
  searchBox: {
   
    flexDirection:"row",
  
  },
  
  markerWrap: {
    alignItems: "center",
    justifyContent: "center",
    width:50,
    height:50,
  },
  marker: {
    width: 30,
    height: 30,
  },
  map: {
    height: '100%'
  },
  // Callout bubble
  bubble: {
    flexDirection: 'column',
    backgroundColor: '#fff',
    borderRadius: 6,
    borderColor: '#ccc',
    borderWidth: 0.5,
    padding: 15,
    width: 160,
    height:150
  
  },
  // Arrow below the bubble
  arrow: {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    borderTopColor: '#fff',
    borderWidth: 16,
    alignSelf: 'center',
    marginTop: -32,
  },
  arrowBorder: {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    borderTopColor: '#007a87',
    borderWidth: 16,
    alignSelf: 'center',
    marginTop: -0.5,
    // marginBottom: -15
  },
  // Character name
  name: {
    fontSize: 16,
  },
  // Character image
  image: {
    width: "100%",
    height: 80,
  },
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
  
});

 
