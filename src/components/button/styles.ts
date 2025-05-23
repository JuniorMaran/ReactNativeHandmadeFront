import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        backgroundColor: '#fff',
        width: 64,
        height: 64,
        borderRadius: 32,
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        marginBottom: 20
  }, 
    button: {
        flex: 1,
        color: '#6200ee',
        fontSize: 64,
        fontFamily: 'Inter_700Bold',
    }
});