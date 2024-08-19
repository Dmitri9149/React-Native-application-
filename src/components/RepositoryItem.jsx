import { View, Image, StyleSheet } from 'react-native';
import Text from './Text'

const styles = StyleSheet.create({
  image: {
    height: 50,
    width: 50,
  },
});

const formatCounts = (value) => { 
  return (
    value <  1000 
    ? value 
    : (value/1000).toFixed(1) + 'k'
  )
}

const RepositoryItem = ({repository}) => {
    return (
      <View>
        <Image style={styles.image} source={{uri: repository.ownerAvatarUrl}}></Image>
        <Text>Full name: {repository.fullName}</Text>
        <Text>Description: {repository.description}</Text>
        <Text>Language: {repository.language}</Text>
        <Text>Full name: {repository.fullName}</Text>
        <Text>Stars: {formatCounts(repository.stargazersCount)}</Text>
        <Text>Forks: {formatCounts(repository.forksCount)}</Text>
        <Text>Rating: {repository.ratingAverage}</Text>
        <Text>Reviews: {repository.reviewCount}</Text>
      </View>
    )
  };

  export default RepositoryItem;