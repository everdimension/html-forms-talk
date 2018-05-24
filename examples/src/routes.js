import React from 'react';
import { RepeatPassword } from './components/RepeatPassword';

export const routes = [
  {
    path: '/',
    action: context => {
      context
        .next()
        .then(component => {
          context.render(component);
        })
        .catch(e => {
          console.log('err', e);
        });
    },
    children: [
      {
        path: '',
        action: () => <p>hello</p>,
      },
      {
        path: '/repeat-password',
        action: () => <RepeatPassword />,
      },
    ],
  },
];
