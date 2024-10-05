// src/App.tsx
import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Loading from './src/pages/Loading';
import AppSc from './src/pages/App';
import { RootStackParamList } from './src/pages/types/types';

const Stack = createNativeStackNavigator<RootStackParamList>(); // Especifica o tipo do Stack

const App: React.FC = () => {

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const loadData = async () => {
            // Simula o carregamento de dados
            await new Promise(resolve => setTimeout(resolve, 3000)); // 3 segundos
            setIsLoading(false);
        };

        loadData();
    }, []);

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Loading">
                {isLoading ? (
                <Stack.Screen name="Loading" component={Loading} options={{ headerShown: false }} />
                ) : (
                <Stack.Screen name="AppSc" component={AppSc} options={{ headerShown: false }} />
                )}
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;

