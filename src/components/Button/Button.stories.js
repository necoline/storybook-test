import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, select } from '@storybook/addon-knobs';

import theme from '../../theme'
import Button from '.';

//children, active, hideText, size, variation, radius, type, element: El, ...rest

storiesOf('Button', module).addDecorator(withKnobs)
  .add('default', () => 
  <Button
    theme={theme.main}
    variation={select(
      'Variation',
      [
        'base-plain',
        'base-raised-light',
        'base-raised-semidark',
        'base-raised-dark',
        'primary-raised-light',
        'primary-raised-semidark',
        'primary-raised-dark',
        'primary-plain',
        'danger-raised-dark',
        'danger-plain',
        'achromic-plain',
        'achromic-glass'
      ],
      'base-plain'
      )}
    size={select('Size', ['small', 'medium', 'large', 'xlarge'], 'medium')}
    radius={select('Radius', ['ellipsoid', 'square', 'default'], 'default')}
    onClick={action('On Click')}
    >
    Primary
  </Button>
  )
