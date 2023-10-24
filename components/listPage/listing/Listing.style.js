import { StyleSheet } from 'react-native'
import theme from '../../../utils/theme'

export const style = StyleSheet.create({
  listing: {
    padding: 15,
    backgroundColor: theme.primaryBackground,
    overflow: 'hidden',
    position: 'relative',
    justifyContent: 'space-between',
    borderBottomRightRadius: 50,
    borderTopRightRadius: 50
  },
  listingBorder: {
    padding: 2,
    margin: 5,
    backgroundColor: theme.border,
    overflow: 'hidden',
    borderBottomRightRadius: 50,
    borderTopRightRadius: 50

  },
  listingFlair: {
    backgroundColor: theme.borderHighlight,
    height: '100%',
    width: '50%',
    position: 'absolute',
    transform: 'rotate(36deg)',
    left: 10,
    top: 0
  },
  title: {
    fontFamily: 'Orbitron_400Regular',
    color: theme.primaryText
  },
  shipImage: {
    width: '90%',
    height: '1000%',
    objectFit: 'contain',
    position: 'absolute',
    right: -50,
    top: -50
  },
  gradientBackground: {
    width: '100%',
    height: '400%',
    position: 'absolute',
    left: 0,
    top: 0
  }
})

export default style
