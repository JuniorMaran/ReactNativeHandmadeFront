import Button from '@/src/components/button';
import Title from '@/src/components/title';
import { Suspense, lazy, useState } from 'react';
import { Image, StyleSheet, View } from 'react-native';


const Index = () => {
    const [showAddStitchModal, setShowAddStitchModal] = useState(false);
    const AddStitchModal = lazy(() => import('../components/addStitchModal'));

    return (
        <View style={styles.container}>
            <Image style={styles.logo} source={require('../../assets/images/logo-simples.png')}/>
            <Title title="Caderninho de Tricot"/>
            <Button buttonName="pluscircle" setShowAddStitchModal={setShowAddStitchModal}/>
            {showAddStitchModal &&
                <Suspense fallback={<></>}>
                    <AddStitchModal />
                </Suspense>
            }
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    logo : {
        width: 300,
        height: 300,
        alignSelf: 'center',
    }
});

export default Index;