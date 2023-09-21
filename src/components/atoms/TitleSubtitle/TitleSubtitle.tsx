/**
 *
 * TitleSubtitle
 *
 */

import React from 'react';
import {Text, View} from 'react-native';

import IconLabel from '@atoms/IconLabel';

import {TITLE} from './config';

import TitleSubtitleStyles from './styles';

import type {PropsType} from './types';

function TitleSubtitle({
  title,
  subtitle,
  whiteFont,
  showIcon,
}: PropsType): React.ReactElement {
  return (
    <View>
      <Text
        style={
          whiteFont
            ? TitleSubtitleStyles.nonPrioTitleStyle
            : TitleSubtitleStyles.prioTitleStyle
        }>
        {title}
      </Text>
      {subtitle !== undefined && (
        <IconLabel
          subtitle={subtitle}
          showIcon={showIcon}
          whiteFont={whiteFont}
        />
      )}
    </View>
  );
}

TitleSubtitle.defaultProps = {
  title: TITLE,
};

export default TitleSubtitle;
