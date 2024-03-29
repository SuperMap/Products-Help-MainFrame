/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * @emails react-core
 */

import React from 'react';
import {colors} from 'theme';

const MetaTitle = ({children, title, cssProps = {}, onDark = false}) => (
  <div
    css={{
      color: onDark ? colors.subtleOnDark : colors.subtle,
      fontSize: 16,
      fontWeight: 700,
      lineHeight: 3,
      // textTransform: 'uppercase',
      letterSpacing: '0.08em',
      ...cssProps,
    }}>
    {children}
  </div>
);

export default MetaTitle;
