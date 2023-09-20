/**
 *
 * CardDetails
 *
 */

import React from 'react';

import Card from '@atoms/Card';
import TitleSubtitle from '@atoms/TitleSubtitle';
import PriorityMarker from '@atoms/PriorityMarker';

import {SUBTITLE, TITLE} from './config';

import type {PropsType} from './types';

function CardDetails({
  title,
  subtitle,
  prio,
  isPrio,
}: PropsType): React.ReactElement {
  return (
    <Card isPrio={isPrio}>
      <PriorityMarker label={prio} isPrio={isPrio} />
      <TitleSubtitle
        title={title}
        subtitle={subtitle}
        whiteFont={isPrio}
        showIcon
      />
    </Card>
  );
}

CardDetails.defaultProps = {
  title: TITLE,
  subtitle: SUBTITLE,
};

export default CardDetails;
