
import { firebaseStitchContent } from '@/src/services/firebaseService';
import { FlatList, Text, View } from "react-native";

const ShowAllStitch = () => {
const data = [{title: 'Ponto 1', descriprion: 'Descricao do ponto 1'}, {title: 'Ponto 2', descriprion: 'Descricao do ponto 2'}, {title: 'Ponto 3', descriprion: 'Descricao do ponto 3'}];

    const getAllContent = async () => {
        const content = await firebaseStitchContent();
        console.log(content);
    };

    return (
        <View>
            <FlatList
            data={data}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => <Text>{item.descriprion}</Text>}
            />
        </View>
    )
};

export default ShowAllStitch;