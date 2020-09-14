import React from 'react';
import { View, Text, Image, TouchableOpacity, TextInput, StyleSheet, SafeAreaView, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';


const SummaryScreen = ({route, navigation}) => {
  

  const {request} = route.params;
  const {image} = route.params;
  
  const textInputChange = (val) => {
    if( val.trim().length >= 4 ) {
       request.description = val
    } 
}
  const goNext = () => {
 
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
            <TouchableOpacity onPress={goNext}>
            <Text  
            style={{color: '#2CB7EA',  fontWeight:'bold', margin:2, fontSize:16}}>
           Submit
            </Text>
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
          <Text style={{fontSize:20, margin:10, fontWeight:'normal'}}>{request.locationName}</Text>
          
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