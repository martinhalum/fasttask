/**
*
* Button Test
*
*/


import React from 'react';
import {render} from '@testing-library/react-native';

import Button from '../Button';

test('Button', () => {
  const tree = renderer
    .create(
      <Button />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
