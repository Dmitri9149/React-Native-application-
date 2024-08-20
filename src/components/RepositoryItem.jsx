import { View, Image, StyleSheet } from 'react-native';
import Text from './Text';
import theme from '../theme';

const styles = StyleSheet.create({
  image: {
    height: 50,
    width: 50,
  },
  flexContainer: {
    display: 'flex',
    marginLeft: 10,
//    marginRight: 10,
    rowGap: 10,
    backgroundColor: theme.background.textBackgroundLight,
  },
  asRow: {
    display: 'flex',
    flexDirection: 'row',
    columnGap: 10,
    paddingTop: 10,
    paddingRight: 20,
  },
  asRow2: {
    display: 'flex',
    flexDirection: 'row',
  },
  asRow3: {
    display: 'flex',
    flexDirection: 'row',
    marginRight: 70,
    justifyContent: 'space-around'
//    columnGap: 70
  },
  asColumn: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  asColumn1: {
    display: 'flex',
    flexDirection: 'column',
    rowGap: 5,
  },
  wrapText: {
    paddingRight: 50, 
    flex:1, 
    flexWrap: 'wrap'

  }

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
          <View style={styles.asColumn1}>
            <Text fontWeight={'bold'} fontSize={'body'}>Full name: {repository.fullName}</Text>
            <View >
              <Text style={styles.wrapText} fontSize={'body'}>Description: {repository.description}</Text>
            </View>
            <View style={styles.asRow2}>
              <Text style={{padding: 5, borderRadius: 5}} color={'white'} fontSize={'subheading'} background={'blue'}>{repository.language}</Text>
            </View>
          </View>
        </View>
        <View style={styles.asRow3}>
          <View style={styles.asColumn}>
            <Text fontWeight={'bold'}>{formatCounts(repository.stargazersCount)}</Text>           
            <Text>Stars</Text>
          </View>
          <View style={styles.asColumn}>
            <Text fontWeight={'bold'}>{formatCounts(repository.forksCount)}</Text>           
            <Text>Forks</Text>
          </View>
          <View style={styles.asColumn}>
            <Text fontWeight={'bold'}>{repository.reviewCount}</Text>
            <Text>Reviews</Text>
          </View>
          <View style={styles.asColumn}>
            <Text fontWeight={'bold'}>{repository.ratingAverage}</Text>
            <Text>Rating</Text>
          </View>

        </View>
      </View>
    )
  };

  export default RepositoryItem;