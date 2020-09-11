import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';


const CategoryScreen = ({route, navigation}) => {
  
  const categories  = [
    {
        "service_code": 875970000,
        "service_name": "Start/Stop/Transfer Water Services or Trash",
        "description": "",
        "metadata": false,
        "type": "realtime",
        "keywords": null,
        "group": null
    },
    {
        "service_code": 875970001,
        "service_name": "City Services Bill Documents",
        "description": "",
        "metadata": false,
        "type": "realtime",
        "keywords": null,
        "group": null
    },
    {
        "service_code": 875970002,
        "service_name": "PHX Pay Online Help",
        "description": "",
        "metadata": false,
        "type": "realtime",
        "keywords": null,
        "group": null
    },
    {
        "service_code": 875970003,
        "service_name": "Trash; Recycle or Green Organics Container",
        "description": "",
        "metadata": false,
        "type": "realtime",
        "keywords": null,
        "group": null
    },
    {
        "service_code": 875970004,
        "service_name": "Litter + Debris",
        "description": "",
        "metadata": false,
        "type": "realtime",
        "keywords": null,
        "group": null
    },
    {
        "service_code": 875970005,
        "service_name": "Graffiti Removal",
        "description": "Report spray paint or other defacement of city property.",
        "metadata": true,
        "type": "realtime",
        "keywords": null,
        "group": null
    },
    {
        "service_code": 875970006,
        "service_name": "Non-Dust-Proof Parking",
        "description": "",
        "metadata": false,
        "type": "realtime",
        "keywords": null,
        "group": null
    },
    {
        "service_code": 875970007,
        "service_name": "Inoperable Vehicles",
        "description": "",
        "metadata": false,
        "type": "realtime",
        "keywords": null,
        "group": null
    },
    {
        "service_code": 875970008,
        "service_name": "Fence in Disrepair",
        "description": "",
        "metadata": false,
        "type": "realtime",
        "keywords": null,
        "group": null
    },
    {
        "service_code": 875970009,
        "service_name": "Outside Storage",
        "description": "",
        "metadata": false,
        "type": "realtime",
        "keywords": null,
        "group": null
    },
    {
        "service_code": 875970010,
        "service_name": "Weeds or Dead Plants",
        "description": "",
        "metadata": false,
        "type": "realtime",
        "keywords": null,
        "group": null
    },
    {
        "service_code": 875970011,
        "service_name": "Street Maintenance",
        "description": "Report issues with potholes, damaged signs, signal outage, etc. Please report dangerous situations to 911.",
        "metadata": true,
        "type": "realtime",
        "keywords": null,
        "group": null
    },
    {
        "service_code": 875970012,
        "service_name": "Shopping Carts",
        "description": "",
        "metadata": false,
        "type": "realtime",
        "keywords": null,
        "group": null
    },
    {
        "service_code": 875970013,
        "service_name": "Illegal Signs",
        "description": "",
        "metadata": false,
        "type": "realtime",
        "keywords": null,
        "group": null
    },
    {
        "service_code": 875970014,
        "service_name": "Property Violations",
        "description": "",
        "metadata": false,
        "type": "realtime",
        "keywords": null,
        "group": null
    },
    {
        "service_code": 875970015,
        "service_name": "Unsecured Structures",
        "description": "",
        "metadata": false,
        "type": "realtime",
        "keywords": null,
        "group": null
    },
    {
        "service_code": 875970016,
        "service_name": "Americans with Disabilities Act (ADA)",
        "description": "",
        "metadata": false,
        "type": "realtime",
        "keywords": null,
        "group": null
    },
    {
        "service_code": 875970017,
        "service_name": "Phoenix C.A.R.E.S about Homelessness",
        "description": "",
        "metadata": false,
        "type": "realtime",
        "keywords": null,
        "group": null
    },
    {
        "service_code": 875970018,
        "service_name": "Equal Opportunity Department Case Mgmt",
        "description": "",
        "metadata": false,
        "type": "realtime",
        "keywords": null,
        "group": null
    },
    {
        "service_code": 875970019,
        "service_name": "Police Public Records Request",
        "description": "",
        "metadata": false,
        "type": "realtime",
        "keywords": null,
        "group": null
    }
]
  
  const {request} = route.params;
  
  const goNext = () => {
    navigation.navigate('Summary', {
      request: request,
  })
  }
  
  const [data, setData] = React.useState({
    isCurrentId: 0,
    
});
  
const idChange = (val, val_name) => {
    
    setData({
        ...data,
        isCurrentId: val,
    });
    
    request.service_code = val
    request.service_name = val_name
    
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
              Location
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
      
      <View>
      <Text style={{fontSize:25, marginStart:10}}>Category</Text>
     
     </View>
     <View style={{marginTop:20}}>
               <FlatList 
               data = {categories}
               renderItem = {({item}) =>{
                return (
                    <View>
                    <View style={{padding:20}}> 
                    <TouchableOpacity onPress={() => {idChange( item.service_code, item.service_name)}} >  
                   
                        <View style={{flexDirection:'row'}}>
                        <Text style={{margin:5, fontSize:18, fontWeight:'bold'}}>
                         {item.service_name}
                    </Text> 
                    {data.isCurrentId === item.service_code ? 
                    (
                        
                        <Feather 
                            name="check-circle"
                            color="green"
                            size={20}/> 
                    )
                    : null}
                    
                        </View>
                
                    
                    </TouchableOpacity>
                    </View>
                    
                    <View
                    style={{
                      height: 1,
                      width: "86%",
                      backgroundColor: "#CED0CE",
                      marginLeft: "14%"
                    }}
                  />
                    </View>
                    )

               }}
               
        
               />
      </View>
    </View>
  );
  }

export default CategoryScreen

