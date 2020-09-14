import React, {useState} from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import Icon from 'react-native-vector-icons/Ionicons';


const ImageScreen = ({navigation}) => {
  const [request, setRequest] = useState({img:'default',
                                          location: 'Lagos Nigeria'})
  const [image, setImage] = useState('https://api.adorable.io/avatars/80/abott@adorable.png');
  
  const takePhotoFromCamera = (navigation) => {
    ImagePicker.openCamera({
      compressImageMaxWidth: 400,
      compressImageMaxHeight: 400,
      cropping: true,
      compressImageQuality: 0.7
    }).then(image => {
      console.log(image);  
      navigation.navigate('ImageView', {
        image: image,
        request: request,
    })
    })
    .catch(error => console.warn(error));
  }

  const choosePhotoFromLibrary = () => {
    ImagePicker.openPicker({
      width: 400,
      height: 400,
      cropping: true,
      compressImageQuality: 0.7
    }).then(image => {
      console.log(image);  
      navigation.navigate('ImageView', {
        image: image,
        request: request,
    })
    })
    .catch(error => console.warn(error));
  }

    return (
    
      <View style={styles.panel}>
      <View>
        <Text style={styles.panelTitle}>New Request</Text>
        <Text style={styles.panelSubtitle}>Please kindly add a photo to your request</Text>
      </View>
      
      <TouchableOpacity style={styles.panelButton} onPress={takePhotoFromCamera}>
      <View style= {{flexDirection:'row', margin:5}}>
      <Icon name="camera-outline" color={'#000'} size={26} />
    <Text style={styles.panelButtonTitle}>Camera</Text>
      </View>
      </TouchableOpacity>
     
      <TouchableOpacity style={styles.panelButton} onPress={choosePhotoFromLibrary}>
      <View style= {{flexDirection:'row', margin:5}}>
      <Icon name="images-outline" color={'#000'} size={26} />
      <Text style={styles.panelButtonTitle}>Gallery</Text>
      </View>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.panelButton} onPress={choosePhotoFromLibrary}>
      <View style= {{flexDirection:'row', margin:5}}>
      <Icon name="image-outline" color={'#000'} size={26} />
      <Text style={styles.panelButtonTitle}>Most Recent Photo</Text>
      </View>
      </TouchableOpacity>
     
      <TouchableOpacity style={styles.panelButton}    onPress={() => navigation.navigate('Location', {
        request: request,
        image:'default'
    })}>
      <View style= {{flexDirection:'row', margin:5}}>
      <Icon name="alert-circle-outline" color={'#000'} size={26} />
      <Text style={styles.panelButtonTitle}>No Image</Text>
      </View>
      </TouchableOpacity>
           
    </View>
    
    );
  }
 export default ImageScreen


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  commandButton: {
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#FF6347',
    alignItems: 'center',
    marginTop: 10,
  },
  panel: {
    padding: 20,

    paddingTop: 20,
    // borderTopLeftRadius: 20,
    // borderTopRightRadius: 20,
    // shadowColor: '#000000',
    // shadowOffset: {width: 0, height: 0},
    // shadowRadius: 5,
    // shadowOpacity: 0.4,
  },
  header: {
    backgroundColor: '#FFFFFF',
    shadowColor: '#333333',
    shadowOffset: {width: -1, height: -3},
    shadowRadius: 2,
    shadowOpacity: 0.4,
    // elevation: 5,
    paddingTop: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  panelHeader: {
    alignItems: 'center',
  },
  panelHandle: {
    width: 40,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#00000040',
    marginBottom: 10,
  },
  panelTitle: {
    fontSize: 27,
    height: 35,
  },
  panelSubtitle: {
    fontSize: 14,
    color: 'gray',
    height: 30,
    marginBottom: 10,
  },
  panelButton: {
    padding: 5,
    borderRadius: 10,
    backgroundColor: '#ccc',
    marginVertical: 7,
  },
  panelButtonTitle: {
    marginStart:3,
    fontSize: 20,
    fontWeight: 'normal',
  },
  action: {
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5,
  },
  actionError: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#FF0000',
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 0 : -12,
    paddingLeft: 10,
    color: '#05375a',
  },
});

