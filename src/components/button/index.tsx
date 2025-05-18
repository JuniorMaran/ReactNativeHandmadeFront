import { AntDesign } from '@expo/vector-icons';
import { Dispatch, SetStateAction, useState } from 'react';
import { TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { styles } from './styles';

type AntDesignIconNames = 'pluscircle';
type Props = TouchableOpacityProps & {
    buttonName: AntDesignIconNames
    setShowAddStitchModal:  Dispatch<SetStateAction<boolean>>;
}

const Button = ({ buttonName, setShowAddStitchModal, ...rest }: Props) => {
    const [stitchType, setStitchType] = useState('');

    const addStitchType = () => {
        setShowAddStitchModal(true);
    };
 
    return (
        <TouchableOpacity style={styles.container} onPress={addStitchType} {...rest}>
            <AntDesign name={buttonName} style={styles.button} />
        </TouchableOpacity>
    );
};

export default Button;