import ImagePickerModal from "@/src/components/ImagePickerModal";
import { firebaseAddImage } from "@/src/services/firebaseService";
import { Dispatch, SetStateAction, Suspense } from "react";
import { Alert, Modal, Pressable, Text, TextInput, View } from "react-native";
import { styles } from './styles';

type Props = {
    showAddStitchModal: boolean
    setShowAddStitchModal: Dispatch<SetStateAction<boolean>>
}
const AddStitchModal = ( { showAddStitchModal, setShowAddStitchModal }: Props) => {

    const FirebaseAddImage = async (image: string) => {
        await firebaseAddImage(image);
    };

    const postAddContent = async (title: string, label: string, imageUrl: string) => {
        if(!title || !label || !imageUrl) return;
        //await firebaseCreateStitch();
    };

    return (
        <View>
            <Modal
                animationType="slide"
                transparent={true}
                visible={showAddStitchModal}
                onRequestClose={() => {
                    Alert.alert('Modal has been closed.');
                    setShowAddStitchModal(!showAddStitchModal);
                }}>

                {showAddStitchModal &&
                    <Suspense fallback={<></>}>
                        <ImagePickerModal />
                    </Suspense>
                }

                <View>
                    <Text>Nome do ponto</Text>
                    <TextInput/>
                </View>
                <View>
                    <Text>Descrição do Ponto</Text>
                    <TextInput/>
                </View>
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                    <Pressable
                        style={[styles.button, styles.buttonClose]}
                        onPress={() => setShowAddStitchModal(!showAddStitchModal)}>
                    </Pressable>
                    </View>
                </View>
            </Modal>
        </View>
    )    
};

export default AddStitchModal;