import { Text, ScrollView, View } from 'react-native';
import { SafeArea } from '../../components/SafeArea';
import { useMovies } from '../../hooks/useMovies';
import { PosterCarousel } from '../../components/Movies/PosterCarousel';
import { HorizontalCarousel } from '../../components/Movies/HorizontalCarousel';
import { FullScreenLoader } from '../../../loaders/FullScreenLoader';

export const HomeScreen = () => {
  const {
    isLoading,
    nowPlaying,
    popular,
    topRated,
    upcoming,
    popularNextPage,
  } = useMovies();

  if (isLoading) {
    return <FullScreenLoader />;
  }

  return (
    <SafeArea>
      <ScrollView>
        <View style={{ marginTop: 20, paddingBottom: 30 }}>
          <PosterCarousel movies={nowPlaying} />
          <HorizontalCarousel
            movies={popular}
            title='Populares'
            loadNextPage={popularNextPage}
          />
          <HorizontalCarousel
            movies={topRated}
            title='Mejor calificadas'
          />
          <HorizontalCarousel
            movies={upcoming}
            title='Próximamente'
          />
        </View>
      </ScrollView>
    </SafeArea>
  );
};
