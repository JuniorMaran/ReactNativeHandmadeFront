import { firebaseAddImage } from '@/src/services/firebaseService';
import React from 'react';
import { Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';

type Props = {
  pickImageModal: boolean,
  setPickImageModal: React.Dispatch<React.SetStateAction<boolean>>
  setImageURI: React.Dispatch<React.SetStateAction<string>>
}
const ImagePickerModal = (props: Props) => {

  const {pickImageModal, setPickImageModal, setImageURI} = props;

  const selectImage = (imageOrigin: string) => {
    if(imageOrigin === 'camera'){
      launchCamera({ mediaType: 'photo' }, response => {
        setImageURI(response?.assets?.[0]?.uri || '');
        return response?.assets?.[0]?.uri  || '';
      });
    }
    if(imageOrigin === 'gallery'){
      launchImageLibrary({ mediaType: 'photo' }, response => {
        setImageURI(response?.assets?.[0]?.uri || '');
        console.log('Gallery response:', response?.assets?.[0]?.uri);
        return response?.assets?.[0]?.uri  || '';
      });
    };
  };

  const handleUpdateImage = async () => {
    const image = await selectImage('gallery');
    await firebaseAddImage(image);
  };

  return (
    <View style={styles.container}>
      <Modal
        transparent={true}
        visible={pickImageModal}
        
        onRequestClose={() => setPickImageModal(false)}
      >
        <TouchableOpacity
          style={styles.modalOverlay}
          activeOpacity={1}
          onPressOut={() => setPickImageModal(false)}
        >
          <View style={styles.modalContent}>
            <TouchableOpacity style={styles.option} onPress={() => selectImage('camera')}>
              <Text style={styles.optionText}>Usar Câmera</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.option} onPress={() => selectImage('gallery')}>
              <Text style={styles.optionText}>Selecionar da Galeria</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.option} onPress={() => setPickImageModal(false)}>
              <Text style={[styles.optionText, { color: 'red' }]}>Cancelar</Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 16,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  option: {
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  optionText: {
    fontSize: 18,
    textAlign: 'center',
  },
});

export default ImagePickerModal;