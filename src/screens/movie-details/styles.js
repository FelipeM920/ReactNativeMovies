import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  image: {
    height: 277,
    width,
    backgroundColor: 'transparent',
  },
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    backgroundColor: 'transparent',
  },
  genreContainer: {
    position: 'absolute',
    bottom: 0,
    padding: 15,
  },
  genreText: {
    fontSize: 18,
    lineHeight: 21,
  },
  infoContainer: {
    paddingHorizontal: 15,
  },
  details: {
    fontSize: 13,
    lineHeight: 15,
    marginVertical: 10,
  },
  synopsis: {
    marginVertical: 15,
  },
  synopsisTitle: {
    fontWeight: '500',
    fontSize: 18,
    lineHeight: 21,
    paddingBottom: 10,
  },
  synopsisOverview: {
    fontSize: 14,
    lineHeight: 20,
  },
  cast: {
    paddingBottom: 10,
    borderBottomWidth: 3,
    borderBottomColor: '#0294A5',
  },
  castText: {
    fontSize: 16,
    lineHeight: 19,
    color: '#0294A5',
    paddingHorizontal: 35,
  },
});