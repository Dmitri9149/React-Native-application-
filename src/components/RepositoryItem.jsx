import { View, Image, StyleSheet } from 'react-native';
import Text from './Text'

const styles = StyleSheet.create({
  image: {
    height: 50,
    width: 50,
  },
  flexContainer: {
    display: 'flex'
  },
  asRow: {
    display: 'flex',
    flexDirection: 'row',
  },
  asRow1: {
    display: 'flex',
    flexDirection: 'row',
    flexGrow: 0,
    alignSelf: 'flex-start'
  },
  asColumn: {
    display: 'flex',
    flexDirection: 'column',
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
      <View style={styles.flexContainer}>
        <View style={styles.asRow}>
          <Image style={styles.image} source={{uri: repository.ownerAvatarUrl}}></Image>
          <View style={styles.asColumn}>
            <Text fontWeight={'bold'} fontSize={'subheading'}>Full name: {repository.fullName}</Text>
            <Text fontSize={'subheading'}>Description: {repository.description}</Text>
            <View style={styles.asRow1}>
              <Text fontSize={'subheading'} background={'blue'}>{repository.language}</Text>
            </View>
          </View>
        </View>
        <Text>Stars: {formatCounts(repository.stargazersCount)}</Text>
        <Text>Forks: {formatCounts(repository.forksCount)}</Text>
        <Text>Rating: {repository.ratingAverage}</Text>
        <Text>Reviews: {repository.reviewCount}</Text>
      </View>
    )
  };

  export default RepositoryItem;