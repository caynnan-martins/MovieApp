import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Image } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';

const moviesData = {
    Animes: [
        { title: 'Attack on Titan', image: 'https://via.placeholder.com/100' },
        { title: 'One Piece', image: 'https://via.placeholder.com/100' },
        { title: 'My Hero Academia', image: 'https://via.placeholder.com/100' },
        { title: 'Demon Slayer', image: 'https://via.placeholder.com/100' },
        { title: 'Death Note', image: 'https://via.placeholder.com/100' },
        { title: 'Naruto', image: 'https://via.placeholder.com/100' },
        { title: 'Sword Art Online', image: 'https://via.placeholder.com/100' },
        { title: 'Tokyo Ghoul', image: 'https://via.placeholder.com/100' },
        { title: 'Fullmetal Alchemist', image: 'https://via.placeholder.com/100' },
        { title: 'Hunter x Hunter', image: 'https://via.placeholder.com/100' },
    ],
    Ação: [
        { title: 'John Wick', image: 'https://via.placeholder.com/100' },
        { title: 'Mad Max: Fury Road', image: 'https://via.placeholder.com/100' },
        { title: 'Die Hard', image: 'https://via.placeholder.com/100' },
        { title: 'The Dark Knight', image: 'https://via.placeholder.com/100' },
        { title: 'Gladiator', image: 'https://via.placeholder.com/100' },
        { title: 'Inception', image: 'https://via.placeholder.com/100' },
        { title: 'Avengers: Endgame', image: 'https://via.placeholder.com/100' },
        { title: 'The Matrix', image: 'https://via.placeholder.com/100' },
        { title: 'Kill Bill', image: 'https://via.placeholder.com/100' },
        { title: 'Terminator 2', image: 'https://via.placeholder.com/100' },
    ],
    Comédia: [
        { title: 'Superbad', image: 'https://via.placeholder.com/100' },
        { title: 'The Hangover', image: 'https://via.placeholder.com/100' },
        { title: 'Step Brothers', image: 'https://via.placeholder.com/100' },
        { title: 'Anchorman', image: 'https://via.placeholder.com/100' },
        { title: 'Groundhog Day', image: 'https://via.placeholder.com/100' },
        { title: 'Dumb and Dumber', image: 'https://via.placeholder.com/100' },
        { title: 'Mean Girls', image: 'https://via.placeholder.com/100' },
        { title: 'Bridesmaids', image: 'https://via.placeholder.com/100' },
        { title: 'The 40-Year-Old Virgin', image: 'https://via.placeholder.com/100' },
        { title: 'Crazy, Stupid, Love', image: 'https://via.placeholder.com/100' },
    ],
    Dublados: [
        { title: 'Finding Nemo', image: 'https://via.placeholder.com/100' },
        { title: 'Shrek', image: 'https://via.placeholder.com/100' },
        { title: 'Zootopia', image: 'https://via.placeholder.com/100' },
        { title: 'The Lion King', image: 'https://via.placeholder.com/100' },
        { title: 'Toy Story', image: 'https://via.placeholder.com/100' },
        { title: 'Coco', image: 'https://via.placeholder.com/100' },
        { title: 'Frozen', image: 'https://via.placeholder.com/100' },
        { title: 'Up', image: 'https://via.placeholder.com/100' },
        { title: 'Kung Fu Panda', image: 'https://via.placeholder.com/100' },
        { title: 'Inside Out', image: 'https://via.placeholder.com/100' },
    ],
};

export default function Home() {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.banner}>
                <Image 
                    source={{ uri: 'https://th.bing.com/th/id/OIP.yicAkULNu_MRkuBYHv1ywQHaLH?rs=1&pid=ImgDetMain' }} 
                    style={styles.bannerImage} 
                    resizeMode="cover" 
                />
                <LinearGradient
                    colors={['transparent', 'rgba(0, 0, 0, 1)']} // Degradê do transparente para preto
                    style={styles.gradient} // Estilo do degradê
                />
                <View style={styles.bannerContent}>
                    <Text style={styles.bannerTitle}>Lucifer</Text>
                    <TouchableOpacity style={styles.playButton}>
                        <Text style={styles.playButtonText}>Play</Text>
                    </TouchableOpacity>
                </View>
            </View>

            {Object.entries(moviesData).map(([category, movies]) => (
                <View key={category} style={styles.categoryContainer}>
                    <Text style={styles.categoryTitle}>{category}</Text>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                        {movies.map((movie, index) => (
                            <View key={index} style={styles.movieItem}>
                                <Image source={{ uri: movie.image }} style={styles.movieImage} />
                                <Text style={styles.movieTitle}>{movie.title}</Text>
                            </View>
                        ))}
                    </ScrollView>
                </View>
            ))}
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
        width: '100%',
    },
    bannerImage: {
        width: '100%',
        height: 400,
    },
    gradient: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        height: 250,
    },
    bannerContent: {
        position: 'absolute',
        bottom: 50,
        left: 0,
        right: 0,
        alignItems: 'center',
    },
    bannerTitle: {
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold',
        marginVertical: 10,
    },
    playButton: {
        backgroundColor: 'tomato',
        borderRadius: 5,
        paddingVertical: 10,
        paddingHorizontal: 20,
    },
    playButtonText: {
        color: 'white',
        fontWeight: 'bold',
    },
    categoryContainer: {
        marginBottom: 20,
    },
    categoryTitle: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
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
