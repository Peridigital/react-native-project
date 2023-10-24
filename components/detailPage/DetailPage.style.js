import { StyleSheet } from 'react-native'
import theme from '../../utils/theme'

export const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.primaryBackground,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  shipImage: {
    width: '100%',
    height: '70%',
    objectFit: 'contain',
    position: 'absolute'
  },
  titleContainer: {
    padding: 10,
    paddingRight: 20,
    borderBottomWidth: 2,
    borderTopWidth: 2,
    borderRightWidth: 2,
    borderColor: theme.border,
    borderBottomRightRadius: 150,
    alignSelf: 'flex-start',
    backgroundColor: theme.primaryBackground
  },
  title: {
    fontFamily: 'Orbitron_400Regular',
    color: theme.primaryText,
    fontSize: 25
  },
  detailText: {
    color: theme.primaryText,
    fontFamily: 'Orbitron_400Regular'

  },
  gradientBackground: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    left: 0,
    top: 0
  },
  detailContainer: {
    alignSelf: 'stretch',
    backgroundColor: theme.primaryBackground,
    padding: 15,
    borderTopWidth: 2,
    borderColor: theme.border

  },
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 5
  }
})

export default style
