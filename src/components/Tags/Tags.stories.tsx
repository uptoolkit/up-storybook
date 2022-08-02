import React from 'react';
import Tags, { TagsProps } from './Tags';
import { faker } from '@faker-js/faker';

export default {
  title: 'Atoms/Tags with link',
  component: Tags,
};

export const Default = (props: TagsProps) => <Tags {...props} items={[
  {
    key: 1,
    name: 'Exemple of component',
    link: '/'
  },
  {
    key: 2,
    name: faker.name.findName(),
    link: '/'
  }
]}/>;
