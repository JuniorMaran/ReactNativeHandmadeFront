import ImagePickerModal from "@/src/components/imagePickerModal";
import { AntDesign } from '@expo/vector-icons';
import { Dispatch, SetStateAction, Suspense, useState } from "react";
import { Alert, Modal, Pressable, Text, TextInput, View } from "react-native";
import { styles } from './styles';

type Props = {
    showAddStitchModal: boolean
    setShowAddStitchModal: Dispatch<SetStateAction<boolean>>
}
const AddStitchModal = ( { showAddStitchModal, setShowAddStitchModal }: Props) => {
    const [pickImageModal, setPickImageModal] = useState<boolean>(false);
  const [imageURI, setImageURI] = useState<string>('');
    const FirebaseAddImage = async (image: string) => {
        if(!image) return;

        // await firebaseAddImage(image);
    };

    const postAddContent = async (title: string, label: string, imageUrl: string) => {
        if(!title || !label || !imageUrl) return;
        //await firebaseCreateStitch(title, label, imageUrl);
    };

    return (
        <View>
            <Modal
                animationType="slide"
                visible={showAddStitchModal}
                style={styles.modalView}
                onRequestClose={() => {
                    Alert.alert('Modal has been closed.');
                    setShowAddStitchModal(!showAddStitchModal);
                }}>
                <View style={styles.modalBackground}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>Adicionar Ponto</Text>
                        <View style={styles.addImageContainer}>
                            <Pressable
                                onPress={() => setPickImageModal(true)} style={styles.buttonAddImage}>
                                    <AntDesign name="camerao" style={styles.buttonAddImageChild} />
                            </Pressable>
                        </View>
                        {pickImageModal &&
                            <Suspense fallback={<></>}>
                                <ImagePickerModal pickImageModal={pickImageModal} setPickImageModal={setPickImageModal} setImageURI={setImageURI}/>
                            </Suspense>
                        }
                        <View>
                            <TextInput style={styles.textInput} placeholder="Nome do ponto"/>
                        </View>
                        <View>
                            <TextInput style={styles.textInput} placeholder="Descrição do ponto"/>
                        </View>
                        <View style={styles.closeModal}>
                            <Pressable
                                onPress={() => setShowAddStitchModal(!showAddStitchModal)}>
                                    <AntDesign name="close" style={styles.buttonClose} />
                            </Pressable>

                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    )    
};

export default AddStitchModal;