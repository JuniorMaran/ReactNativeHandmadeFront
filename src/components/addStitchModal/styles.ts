import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    centeredView: {
    },
    modalBackground: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#000000',
        opacity: 0.5,
    },
    modalView: {
        margin: 40,
        backgroundColor: '#ffffff',
        borderRadius: 10,
        padding: 20,
        alignItems: 'center',
        shadowColor: '#000000',
        elevation: 5,
        height: '60%'
    },
    addImageContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 20,
    },
    buttonAddImage: {
        width: 120,
        height: 120,
        borderRadius: 12,
        borderStyle: 'dashed',
        borderWidth: 2,
        borderColor: '#6200ee',
        backgroundColor: '#f9f9f9',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonAddImageChild: {
        fontSize: 40,
        color: '#6200ee',
    },
    modalText: {
        color: '#323337',
        fontSize: 20,
        fontWeight: 'bold',
        margin: 40
    },
    textInputContainer: {
      margin: 0,
      padding: 0  
    },
    textInput:{
        backgroundColor: '#000000',
        opacity: 0.5,
        width: '100%',
        height: 30,
        borderRadius: 10,
        color: '#d3d3d3',
        padding: 10,
        marginTop: 10,
        fontWeight: 'bold'
    },

    closeModal: {
        position: 'absolute',
        top: 15,
        right: 20
    },
    buttonClose: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 24
    },
    textStyle: {
    }
});