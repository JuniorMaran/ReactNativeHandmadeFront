import Button from '@/src/components/button';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Suspense, lazy, useState } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

const Tab = createBottomTabNavigator();
const Index = () => {
    const [showAddStitchModal, setShowAddStitchModal] = useState<boolean>(false);
    const AddStitchModal = lazy(() => import('@/src/components/addStitchModal'));
    
    return (
        <View style={styles.container}>
            <Image style={styles.logo} source={require('../../assets/images/logo-simples.png')}/>
            <View style={styles.titleContainer}>
                <Text style={styles.titleLabel}>Caderninho de Tricot</Text>

            </View>
            <Button buttonName="pluscircle" setShowAddStitchModal={setShowAddStitchModal}/>
            {showAddStitchModal &&
                <Suspense fallback={<></>}>
                    <AddStitchModal showAddStitchModal={showAddStitchModal} setShowAddStitchModal={setShowAddStitchModal}/>
                </Suspense>
            }
            {/* 
            <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Home" component={HomeScreen} />
                <Tab.Screen name="Settings" component={SettingsScreen} />
            </Tab.Navigator>
            </NavigationContainer> 
            */   }
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
    },
    titleContainer: {
        flex: 1,
        alignItems: 'center',
    },
    titleLabel: {
        fontSize: 40,
        maxWidth: '90%',
        textAlign: 'center',
    }
});

export default Index;