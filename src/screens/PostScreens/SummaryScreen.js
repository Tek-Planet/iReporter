import React from 'react';
import { View, Text, Image, TouchableOpacity, TextInput, StyleSheet, SafeAreaView, 
        ScrollView, ActivityIndicator,
        Alert} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import axios from 'axios'
import { CommonActions } from '@react-navigation/native';



const SummaryScreen = ({route, navigation}) => {
  
  const newRequest = {
    "api_key": "pyvausnZHgj2ZICw5vuTwmTAsTFnwmp+dNcgeOpTQueQQIyEakKwxloayJ5j0MQyg+XMjuSjQt05fPYsiGK9PA",
    "service_code": 875970000,
    "lat": 3.333333,
    "lon": 6.333333,
    "address": "port harcout",
    "email": "sample string 6",
    "description": "Road Blockage leads to holdup",
    "first_name": "sample string 8",
    "last_name": "sample string 9",
    "phone": "sample string 10",
    "media_url": "sample string 11",
    "attribute": {
      "sample string 1": {},
      "sample string 3": {}
    },
    "EntityPluralName": "incidents"
  }
  const {request} = route.params;
  const {image} = route.params;
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  
  const textInputChange = (val) => {
    if( val.trim().length >= 4 ) {
       request.description = val
    } 
}
  
const goHome = () => {
  navigation.dispatch(
    CommonActions.reset({
      index: 0,
      routes: [
        {
          name: 'Home',
          params: { user: 'jane' },
        },
      ],
    })
  );
}
  
  const saySomething = () =>{
    Alert.alert(
      'Success',
      'Your request has been submitted',
      [
        // {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
        // {
        //   text: 'Cancel',
        //   onPress: () => console.log('Cancel Pressed'),
        //   style: 'cancel',
        // },
        {text: 'OK', onPress: () => goHome()},
      ],
      {cancelable: false},
    );
  }
  const submit = () => {
  //  goHome()
   setIsSubmitting(true)
    
    newRequest.service_code = request.service_code;
    newRequest.service_name = request.service_name;
    newRequest.lat = request.locationLat;
    newRequest.lon = request.locationLng;
    newRequest.address = request.locationName;
    newRequest.description = request.description;
    newRequest.email = "testmail.com"
  
    axios
    .post('https://phoenix311openapi.azurewebsites.net/api/Request', newRequest)
    .then((res) => {
     console.log(res)
     setIsSubmitting(false)
     saySomething()
     
    })
    .catch((err) => {
      console.log(err)
    });
  
      }
  return (
    <SafeAreaView>
      <ScrollView>
    <View style={{flex:1}}>
        <View style={{padding:15, flexDirection: 'row', justifyContent:'space-between'}}>
            <TouchableOpacity onPress={ () =>  navigation.goBack()}>
            <View  style={{flexDirection: 'row'}}>  
            <Icon name="chevron-back-outline" color={'#2CB7EA'} 
            size={26} />
            <Text  
            style={{color: '#2CB7EA',  fontWeight:'bold', margin:2, fontSize:16}}>
              Category
            </Text>
            </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={submit}>
          
           <View style={{flexDirection:'row'}}>
           {  isSubmitting ? <ActivityIndicator color="#2CB7EA" /> : null }
           <Text  
            style={{color: '#2CB7EA',  fontWeight:'bold', margin:2, fontSize:16}}>
           Submit
            </Text>
           </View>
            </TouchableOpacity> 
      </View>
      
      <View>
      <Text style={{fontSize:25, margin:10}}>Report Summary</Text>
     
     </View>
      
      <View >
      {
        image !== 'default' ? ( <Image
          source={{
            uri: image.path,
          }}
          style={{height: 300, width: 350, borderRadius:10, alignSelf:'center'}}
          />):null
      }
      </View>
      
      <View>
          <Text style={{fontSize:22, margin:10, fontWeight:'bold'}}>{request.service_name}</Text>
          <Text style={{fontSize:20, margin:10, fontWeight:'normal', textAlign:'justify'}}>
          {
             <Icon size = {24} name="location" color={'#2CB7EA'} />
          }
          {request.locationName}</Text>
          
          <Text style={{fontSize:20, margin:10, fontWeight:'normal'}}>Report Description</Text>
          <View style={styles.inputContainer}>
          <TextInput 
                    multiline = {true}
                    numberOfLines = {5}
                    placeholder="Description"
                    placeholderTextColor="#666666" 
                    autoCapitalize="none"
                    onChangeText={(val) => textInputChange(val)}
                    style={styles.input}       
                />
          </View>
          
          <Text style={{fontSize:20, margin:10, fontWeight:'normal'}}>Hide Your Identity from Public View?</Text>
          <View style={{flexDirection:'row'}}>
                   <TouchableOpacity 
                    
                       style={styles.categoryList}>
                       <Text style={styles.categoryListText}>
                        Yes
                       </Text>
                     </TouchableOpacity>
                     
                     <TouchableOpacity 
                    
                    style={styles.categoryList}>
                    <Text style={styles.categoryListText}>
                     No
                    </Text>
                  </TouchableOpacity>
          </View>
     </View>

    </View>
    </ScrollView>

</SafeAreaView>
  );
  }

export default SummaryScreen

const styles = StyleSheet.create({
  
  inputContainer: {
    margin: 5,
    borderRadius:5,
    borderLeftWidth: 4,
    borderRightWidth: 4,
  
  },
  input: {
    textAlignVertical: 'top',
    backgroundColor: '#ccc',
    paddingLeft: 15,
    paddingRight: 15
  },
  
  categoryList: {
    padding:14,
    margin: 3,
    borderRadius:10,
    borderWidth:1,
    borderColor:  '#000'
  
  },
  categoryListText:{
    color:'#000',
    fontSize:14,
    fontWeight:'bold'
  },
  
  
})