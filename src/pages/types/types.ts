// src/types/navigation.ts
import { StackNavigationProp } from '@react-navigation/stack';

export type RootStackParamList = {
    Login: undefined;
    Home: undefined;
    Loading: undefined;
    AppSc: undefined;
    Chat: {
        userName: string;
        userAvatar: string;
        userVerified: boolean;
    };
};


export type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;
