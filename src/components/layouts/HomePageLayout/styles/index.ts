/**
 *
 * HomePageLayout Styles
 *
 */

import {StyleSheet} from 'react-native';

import {MainTheme} from 'theme';

const HomePageLayoutStyles = StyleSheet.create({
  container: {
    height: '100%',
    paddingHorizontal: 22,
    marginBottom: 150,
    backgroundColor: MainTheme.colors.background,
  },
  spacer: {
    bottom: 100,
  },
});

export default HomePageLayoutStyles;
