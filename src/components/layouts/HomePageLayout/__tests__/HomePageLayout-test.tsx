/**
*
* HomePageLayout Test
*
*/


import React from 'react';
import {render} from '@testing-library/react-native';

import HomePageLayout from '../HomePageLayout';

test('HomePageLayout', () => {
  const tree = renderer
    .create(
      <HomePageLayout />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
