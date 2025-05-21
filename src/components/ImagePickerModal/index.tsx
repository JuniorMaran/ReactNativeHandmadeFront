
import { useState } from 'react';
import { Button, Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';

const ImagePickerModal = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const openCamera = () => {
    setModalVisible(false);
    launchCamera({ mediaType: 'photo' }, response => {
      console.log('Camera response:', response);
    });
  };

  const openGallery = () => {
    setModalVisible(false);
    launchImageLibrary({ mediaType: 'photo' }, response => {
      console.log('Gallery response:', response);
    });
  };

  return (
    <View style={styles.container}>
      <Button title="Escolher Imagem" onPress={() => setModalVisible(true)} />
      <Modal
        transparent={true}
        visible={modalVisible}
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}
      >
        <TouchableOpacity
          style={styles.modalOverlay}
          activeOpacity={1}
          onPressOut={() => setModalVisible(false)}
        >
          <View style={styles.modalContent}>
            <TouchableOpacity style={styles.option} onPress={openCamera}>
              <Text style={styles.optionText}>Usar Câmera</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.option} onPress={openGallery}>
              <Text style={styles.optionText}>Selecionar da Galeria</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.option} onPress={() => setModalVisible(false)}>
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