import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";

const favoriteMovies = [
    { title: 'Filme Favorito 1', image: 'https://via.placeholder.com/100' },
    { title: 'Filme Favorito 2', image: 'https://via.placeholder.com/100' },
    { title: 'Filme Favorito 3', image: 'https://via.placeholder.com/100' },
];

const continueWatching = [
    { title: 'Assistindo 1', image: 'https://via.placeholder.com/100' },
    { title: 'Assistindo 2', image: 'https://via.placeholder.com/100' },
];

export default function Profile() {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.banner}>
                <Image 
                    source={{ uri: 'https://cdn.discordapp.com/attachments/1257791544975560775/1287827337681047624/1207263E-891F-4CB2-8D1B-6303516BC817.gif?ex=67021f6b&is=6700cdeb&hm=467917fb34293c7a7957c4daf13256ebc71d461ec7716fcda061253cd445ca86&' }} 
                    style={styles.bannerImage} 
                />
            </View>
            <View style={styles.profileInfo}>
                <View style={styles.avatarContainer}>
                    <Image 
                        source={{ uri: 'https://cdn.discordapp.com/attachments/1240697368480059412/1252227008977571941/20240617_082734.gif?ex=6701cf08&is=67007d88&hm=16400e177151aa9efc18a3d82f46c9c9f0fd9915d8def4891115a6a0e76048f0&'}} 
                        style={styles.avatarImage} 
                    />
                </View>
                <Text style={styles.username}>Caynnan</Text>
            </View>

            <Text style={styles.sectionTitle}>Filmes Favoritos</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalScroll}>
                {favoriteMovies.map((movie, index) => (
                    <View key={index} style={styles.movieItem}>
                        <Image source={{ uri: movie.image }} style={styles.movieImage} />
                        <Text style={styles.movieTitle}>{movie.title}</Text>
                    </View>
                ))}
            </ScrollView>

            <Text style={styles.sectionTitle}>Continuar Assistindo</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalScroll}>
                {continueWatching.map((movie, index) => (
                    <View key={index} style={styles.movieItem}>
                        <Image source={{ uri: movie.image }} style={styles.movieImage} />
                        <Text style={styles.movieTitle}>{movie.title}</Text>
                    </View>
                ))}
            </ScrollView>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121212',
        padding: 20,
    },
    banner: {
        marginBottom: 20,
    },
    bannerImage: {
        width: '100%',
        height: 200,
        borderRadius: 10,
    },
    profileInfo: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    avatarContainer: {
        width: 100,
        height: 100,
        borderRadius: 50,
        overflow: 'hidden', // Garante que a imagem seja redonda
        borderWidth: 2,
        borderColor: 'tomato',
        marginRight: 15,
    },
    avatarImage: {
        width: '100%',
        height: '100%',
    },
    username: {
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold',
    },
    sectionTitle: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    horizontalScroll: {
        marginBottom: 20,
    },
    movieItem: {
        backgroundColor: '#1c1c1c',
        borderRadius: 5,
        padding: 10,
        marginRight: 10,
        alignItems: 'center',
    },
    movieImage: {
        width: 100,
        height: 150,
        borderRadius: 5,
        marginBottom: 5,
    },
    movieTitle: {
        color: 'white',
        textAlign: 'center',
    },
});
