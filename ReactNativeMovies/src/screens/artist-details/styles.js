import {StyleSheet, Dimensions} from 'react-native';

const {width} = Dimensions.get('window');

export default StyleSheet.create({
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    height: 355,
    width,
    backgroundColor: 'transparent',
  },
  name: {
    fontSize: 30,
    color: '#FFFFFF',
  },
  extraInfo: {
    fontSize: 14,
    color: '#FFFFFF',
  },
  infoContainer: {
    position: 'absolute',
    bottom: 0,
    padding: 15,
  },
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
    backgroundColor: 'transparent',
  },
  summaryContainer: {
    flex:1,
  },
  summary: {
    color: '#0294A5',
    fontSize: 16,
    lineHeight: 19,
    paddingLeft: 20,
  },
});
