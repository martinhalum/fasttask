/**
 *
 * Button Test
 *
 */

import React from 'react';
import {render} from '@testing-library/react-native';

import Button from '../Button';

describe('Button', () => {
  // Renders a primary FilledButton with label and onPress function
  it('should render a primary FilledButton with label and onPress function', () => {
    const onPress = jest.fn();
    const tree = render(
      <Button label="Test" type="primary" onPress={onPress} />,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  // Renders an outlined Button with label and onPress function
  it('should render an outlined Button with label and onPress function', () => {
    const onPress = jest.fn();
    const tree = render(
      <Button label="Test" type="outlined" onPress={onPress} />,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  // Renders a submit Button with label and onPress function
  it('should render a submit Button with label and onPress function', () => {
    const onPress = jest.fn();
    const tree = render(
      <Button label="Test" type="submit" onPress={onPress} />,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  // Renders a secondary FilledButton with label and onPress function
  it('should render a secondary FilledButton with label and onPress function', () => {
    const onPress = jest.fn();
    const tree = render(
      <Button label="Test" type="secondary" onPress={onPress} />,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  // Renders a FilledButton with left icon, label, and onPress function
  it('should render a FilledButton with left icon, label, and onPress function', () => {
    const onPress = jest.fn();
    const tree = render(
      <Button
        label="Test"
        leftIcon="leftIcon"
        type="primary"
        onPress={onPress}
      />,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  // Renders a FilledButton with right icon, label, and onPress function
  it('should render a FilledButton with right icon, label, and onPress function', () => {
    const onPress = jest.fn();
    const tree = render(
      <Button label="Test" type="primary" rightIcon="icon" onPress={onPress} />,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  // Renders a FilledButton with custom color, label, and onPress function
  it('should render a FilledButton with custom color, label, and onPress function', () => {
    const onPress = jest.fn();
    const tree = render(
      <Button
        label="Test"
        type="primary"
        onPress={onPress}
        customColor="red"
      />,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  // Renders a FilledButton with text color, label, and onPress function
  it('should render a FilledButton with text color, label, and onPress function', () => {
    const onPress = jest.fn();
    const tree = render(
      <Button label="Test" type="primary" textColor="red" onPress={onPress} />,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  // Renders a FilledButton with left alignment, label, and onPress function
  it('should render a FilledButton with left alignment, label, and onPress function', () => {
    const onPress = jest.fn();
    const tree = render(
      <Button label="Test" leftAlign={true} onPress={onPress} />,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  // Renders a disabled FilledButton with label
  it('should render a disabled FilledButton with label', () => {
    const tree = render(<Button label="Test" disabled={true} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  // Renders a FilledButton with no label and onPress function
  it('should render a FilledButton with no label and onPress function', () => {
    const onPress = jest.fn();
    const tree = render(<Button label="" onPress={onPress} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  // Renders a FilledButton with no onPress function and label
  it('should render a FilledButton with no onPress function and label', () => {
    const tree = render(<Button label="Test" type="primary" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  // Renders a FilledButton with no label and no onPress function
  it('should render a FilledButton with no label and no onPress function', () => {
    const tree = render(<Button label="" onPress={undefined} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  // Renders an OutlinedButton with no label and onPress function
  it('should render an OutlinedButton with no label and onPress function', () => {
    const tree = render(
      <Button label="" type="outlined" onPress={undefined} />,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  // Renders an OutlinedButton with no onPress function and label
  it('should render an OutlinedButton with no onPress function and label', () => {
    const tree = render(<Button label="Test" type="outlined" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  // Renders a Button with an invalid type and label
  it('should render a Button with an invalid type and label', () => {
    const onPress = jest.fn();
    const tree = render(
      <Button label="Test" type="invalid" onPress={onPress} />,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  // Renders an OutlinedButton with no label and no onPress function
  it('should render an OutlinedButton with no label and no onPress function', () => {
    const tree = render(
      <Button label="" type="outlined" onPress={undefined} />,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  // Renders a FilledButton with left alignment, left icon, right icon, custom color, text color, and onPress function
  it('should render a FilledButton with left alignment, left icon, right icon, custom color, text color, and onPress function', () => {
    const onPress = jest.fn();
    const tree = render(
      <Button
        label="Test"
        leftAlign={true}
        leftIcon="left-icon"
        rightIcon="right-icon"
        type="primary"
        customColor="custom-color"
        textColor="text-color"
        disabled={false}
        onPress={onPress}
      />,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  // Renders a FilledButton with left alignment, left icon, right icon, custom color, text color, and disabled state
  it('should render a FilledButton with left alignment, left icon, right icon, custom color, text color, and disabled state', () => {
    const onPress = jest.fn();
    const tree = render(
      <Button
        label="Test"
        leftAlign={true}
        leftIcon="left-icon"
        rightIcon="right-icon"
        type="primary"
        customColor="red"
        textColor="white"
        disabled={true}
        onPress={onPress}
      />,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  // Renders an OutlinedButton with custom color, text color, and onPress function
  it('should render an OutlinedButton with custom color, text color, and onPress function', () => {
    const onPress = jest.fn();
    const tree = render(
      <Button
        label="Test"
        type="outlined"
        onPress={onPress}
        customColor="red"
        textColor="blue"
      />,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  // Renders a Button with a long label and onPress function
  it('should render a Button with a long label and onPress function', () => {
    const onPress = jest.fn();
    const longLabel = 'This is a very long label for the button';
    const tree = render(
      <Button label={longLabel} onPress={onPress} />,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  // Renders an OutlinedButton with custom color, text color, and disabled state
  it('should render an OutlinedButton with custom color, text color, and disabled state', () => {
    const tree = render(
      <Button
        label="Test"
        type="outlined"
        customColor="red"
        textColor="blue"
        disabled={true}
      />,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
