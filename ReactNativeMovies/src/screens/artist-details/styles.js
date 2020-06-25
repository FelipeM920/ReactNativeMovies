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
  summaryText: {
    color: '#0294A5',
    fontSize: 16,
    lineHeight: 19,
    paddingLeft: 20,
    paddingBottom: 20,
    marginVertical: 18,
    borderBottomWidth: 3,
    borderBottomColor: '#0294A5',
  },
  placeBirthText: {
    paddingLeft: 10,
    paddingBottom: 16,
    fontSize: 14,
    lineHeight: 16,
  },
  biographyText: {
    textAlign: 'left',
    paddingHorizontal: 10,
    fontSize: 14,
    lineHeight: 20,
  }
});
