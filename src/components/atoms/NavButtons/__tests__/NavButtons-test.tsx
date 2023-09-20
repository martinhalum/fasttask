/**
*
* NavButtons Test
*
*/


import React from 'react';
import {render} from '@testing-library/react-native';

import NavButtons from '../NavButtons';

test('NavButtons', () => {
  const tree = renderer
    .create(
      <NavButtons />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
