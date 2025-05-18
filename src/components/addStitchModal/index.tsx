import { Button } from "@react-navigation/elements";
import { Modal, Text, TextInput, View } from "react-native";


type Props = {

}
const AddStitchModal = () => {
    return (
        <View>
            <Modal>
                <View>
                    Modal
                </View>
                <Button>FECHAR</Button>
            <Text>Input Image</Text>
            <TextInput>
                
            </TextInput>
            <Text>Título</Text>
            <TextInput>
                
            </TextInput>
            <Text>Descrição</Text>
            <TextInput>
                
            </TextInput>
            </Modal>
        </View>
    )    
};

export default AddStitchModal;