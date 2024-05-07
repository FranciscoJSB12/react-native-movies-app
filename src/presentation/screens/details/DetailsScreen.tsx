import { ScrollView, Text } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { SafeArea } from '../../components/SafeArea';
import { RootStackParams } from '../../navigation/StackNavigation';
import { useMovie } from '../../hooks/useMovie';
import { MovieHeader } from '../../components/Movie/MovieHeader';
import { MovieDetails } from '../../components/Movie/MovieDetails';
import { FullScreenLoader } from '../../../loaders/FullScreenLoader';

interface Props extends StackScreenProps<RootStackParams, 'Details'> {}

export const DetailsScreen = ({ route }: Props) => {
  //const { movieId } = useRoute().params;
  const { movieId } = route.params;
  const { movie, cast = [], isLoading } = useMovie(movieId);

  if (isLoading) {
    return <FullScreenLoader />;
  }

  return (
    <SafeArea>
      <ScrollView>
        <MovieHeader
          poster={movie!.poster}
          title={movie!.title}
          originalTitle={movie!.originalTitle}
        />
        <MovieDetails
          movie={movie!}
          cast={cast}
        />
      </ScrollView>
    </SafeArea>
  );
};
