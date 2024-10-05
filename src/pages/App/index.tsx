import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import LoginSc from '../Login/index'; // Certifique-se de que o caminho está correto
import HomeSc from '../Home/index';
import ProfileSc from '../Profile/index'
const Tab = createBottomTabNavigator();

const HomeScreen = () => (
    <View style={styles.fullContainer}>
        <HomeSc />
    </View>
);

const SettingsScreen = () => (
    <View style={styles.container}>
        <Text style={styles.text}>Settings Screen</Text>
    </View>
);

const LoginScreen = () => (
    <View style={styles.fullContainer}>
        <ProfileSc />
    </View>
);

const App = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ color, size }) => {
                    let iconName;

                    if (route.name === 'Home') {
                        iconName = 'home-outline';
                    } else if (route.name === 'Filmes') {
                        iconName = 'film-outline';
                    } else if (route.name === 'Series') {
                        iconName = 'play';
                    } else if (route.name === 'Perfil') {
                        iconName = 'person-circle-outline';
                    }

                    return <Ionicons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: 'tomato',
                tabBarInactiveTintColor: 'white',
                tabBarStyle: {
                    position: 'absolute',
                    bottom: 20,
                    left: 20,
                    right: 20,
                    height: 60,
                    borderRadius: 30,
                    backgroundColor: '#121212',
                    borderTopWidth: 0, // Remove a borda superior
                    overflow: 'hidden', // Evita qualquer overflow que cause riscos
                },
                tabBarLabel: () => null, // Remove o rótulo
            })}
        >
            <Tab.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
            <Tab.Screen name="Filmes" component={SettingsScreen} options={{ headerShown: false }} />
            <Tab.Screen name="Series" component={SettingsScreen} options={{ headerShown: false }} />
            <Tab.Screen name='Perfil' component={LoginScreen} options={{ headerShown: false }} />
        </Tab.Navigator>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#111826ff',
    },
    fullContainer: {
        flex: 1,
        backgroundColor: '#111826ff',
    },
    text: {
        color: 'white',
    },
});

export default App;