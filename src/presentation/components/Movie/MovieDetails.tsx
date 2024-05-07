import { View, Text, FlatList } from 'react-native';
import { FullMovie } from '../../../core/entities/movie.entity';
import { Formatter } from '../../../config/helpers/formatters';
import { Cast } from '../../../core/entities/cast.entity';
import { CastActor } from '../cast/CastActor';

interface Props {
  movie: FullMovie;
  cast: Cast[];
}

export const MovieDetails = ({ movie, cast }: Props) => {
  return (
    <>
      <View
        style={{
          marginHorizontal: 20,
          backgroundColor: '#1f2937',
          padding: 8,
          borderRadius: 18,
        }}
      >
        <View style={{ flexDirection: 'row' }}>
          <Text style={{ color: 'white' }}>{movie.rating}</Text>
          <Text style={{ marginLeft: 5, color: 'white' }}>
            - {movie.genres.join(', ')}
          </Text>
        </View>
        <Text
          style={{
            fontSize: 23,
            fontStyle: 'italic',
            marginTop: 10,
            fontWeight: 'bold',
            color: 'white',
          }}
        >
          Historia
        </Text>
        <Text style={{ fontSize: 16, color: 'white' }}>
          {movie.description}
        </Text>
        <Text
          style={{
            fontSize: 23,
            fontStyle: 'italic',
            marginTop: 10,
            fontWeight: 'bold',
            color: 'white',
          }}
        >
          Presupuesto
        </Text>
        <Text style={{ fontSize: 18, color: 'white' }}>
          {Formatter.currency(movie.budget)}
        </Text>
        <View style={{ marginTop: 10, marginBottom: 4 }}>
          <Text
            style={{
              fontSize: 23,
              marginVertical: 10,
              fontWeight: 'bold',
              marginHorizontal: 20,
              color: 'white',
            }}
          >
            Actores
          </Text>
          <FlatList
            data={cast}
            keyExtractor={item => item.id.toString()}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => <CastActor actor={item} />}
          />
        </View>
      </View>
    </>
  );
};
