import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import Placesearch from 'react-native-placesearch'
import Geocoder from 'react-native-geocoding';

Geocoder.init("AIzaSyBnoIwPm-651A_yMrfIZYyj940KVKy2PQg");
  
const LocationScreen = ({route, navigation}) => {
  //AIzaSyCu622mFmNfcDF8JJY-Be2pdrmJ4k1rcRA
  const {request} = route.params;
  const { image } = route.params
  const [location, setLocation] = useState('')
  
  const goNext = () => {
    navigation.navigate('Category', {
      request: request,
      image: image,
  })
  }
  // method to decode location from name
  const decodeLocation = (name) => {
    setLocation(name)
    Geocoder.from(name)
    .then(json => {
        var location = json.results[0].geometry.location;
        console.log(location);
        request.locationName = name;
        request.locationLat = location.lat;
        request.locationLng = location.lng;
        
    })
    .catch(error => console.warn(error));
  }
  
  
    return (
      <View style={{flex:1}}>
          <View style={{padding:15, flexDirection: 'row', justifyContent:'space-between'}}>
              <TouchableOpacity onPress={ () =>  navigation.goBack()}>
              <View  style={{flexDirection: 'row'}}>
              <Icon name="chevron-back-outline" color={'#2CB7EA'} 
              size={26} />
              <Text  
              style={{color: '#2CB7EA',  fontWeight:'bold', margin:2, fontSize:16}}>
                Back
              </Text>
              </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={goNext}>
              <Text  
              style={{color: '#2CB7EA',  fontWeight:'bold', margin:2, fontSize:16}}>
              Next
              </Text>
              </TouchableOpacity> 
        </View> 
        
        <View style={{flex:1}}>
    <Text style={{fontSize:22, marginStart:10}}>Location: <Text style={{fontSize:18}}>{location}</Text></Text>
        <Placesearch 
            apikey="AIzaSyBgps2cQXVD8M0Ud_q1kLk7vqRxTj21C1s" // required *
            SelectedAddress={(data)=> 
                             decodeLocation(data.description)
                            //  call decoding method to get lat and lng
                         
                             } // required *
            // country ="country code" //optional
            // InputContainer = {{'your style goes here'}} //optional
            // MainContainer = {{'your style goes here'}} //optional
            // ListStyle = {{'your style goes here'}} //optional
            // ListTextStyle = {{'your style goes here'}} //optional
            // ListIconStyle = {{'your style goes here'}} //optional
            // ImgStyle = {{'your style goes here'}} //optional
            // Img = {{'your style goes here'}} //optional
            // textInput = {{'your style goes here'}} //optional
            // placeHolder = {{'type any textInput placeholder as you like'}} //optional
            />
         {/* <GooglePlacesAutocomplete
            placeholder='Search'
            fetchDetails={true}
            listViewDisplayed={false}
            onPress={(data, details = null) => {
              // 'details' is provided when fetchDetails = true 
              console.log(data);
            }}
            query={{
              key: 'AIzaSyBgps2cQXVD8M0Ud_q1kLk7vqRxTj21C1s',
              language: 'en',
              
            }}
          /> */}
       </View>
      </View>
    );
  }

export default LocationScreen

