import { View, Text,Button, StyleSheet, Pressable,TouchableOpacity } from 'react-native'
import React,{useState} from 'react'
import Modal from "react-native-modal";
import { TextInput } from 'react-native-gesture-handler';
import ImagePicker from 'react-native-image-crop-picker';
// import {  } from 'react-native-gesture-handler';

function ModalTester() {
  const [isModalVisible, setModalVisible] = useState(false);
  const [name, setName] = useState('')
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const handleImage = () => {
    
  }

  return (
    <View style={{ flex: 1 }}>
      <View >
        <TouchableOpacity style={style.btn} onPress={toggleModal}>
          <Text style={style.btnText}>Add Category</Text>
        </TouchableOpacity>
      {/* <Button title="Show modal"  /> */}
      </View>
      

      <Modal isVisible={isModalVisible}>
        <View style={{height:400,backgroundColor:'white',padding:16,borderRadius:20 }}>
          <TextInput
            style={style.inputBox}
            onChangeText={setName}
            value={name}
            placeholder='Add Category'
            keyboardType='text'
          > 
          </TextInput>
          <TouchableOpacity style={style.imageBox} onPress={handleImage}>
            <Text style={style.imageText}>Upload Image</Text>
          </TouchableOpacity>

          

          <TouchableOpacity>
          <TextInput>
            submit
          </TextInput>
          </TouchableOpacity>
          <Button title="Hide modal" onPress={toggleModal} />
        </View>
      </Modal>
    </View>
  );
}

export default ModalTester;

const style=StyleSheet.create({
  btn:{
    width:200,
    alignSelf:'center',
    borderRadius:10,
    backgroundColor:'red',
    padding:10,
    marginTop:40
  },
  btnText:{
    color:'white',
    fontWeight:'bold',
    fontSize:20,
    textAlign:'center',
  
  },
  inputBox:{
    height:50,
    borderWidth:1,
    fontSize:16,
    borderRadius:10
  },
  imageBox : {
    width:150,
    // borderWidth:1,
    backgroundColor:'blue',
    padding:10,
    borderRadius:10,
    alignSelf:'center',
    marginTop:40
  },
  imageText:{
    fontSize:16,
    fontWeight:'bold',
    color:'white',
    textAlign:'center'
  }
})