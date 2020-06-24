import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    marginVertical: 10,
    marginHorizontal: 5,
    flex: 1,
    backgroundColor: '#fff',
  },
  imageContainer: {
    flex: 1,
    height: 180,
    width: 150,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  image: {
    borderTopLeftRadius: 2.5,
    borderTopRightRadius: 2.5,
    flex: 1,
  },
  bottomTextContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: 150,
    padding: 10,
    justifyContent: 'center',
  },
  bottomText: {
    textAlign: 'center',
    fontSize: 14,
  },
});
