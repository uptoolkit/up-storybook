import React from 'react';
import { LinkableInterface } from './LinkableInterface';
import { Tag } from 'antd';

export type TagsProps = {
  items: LinkableInterface[]
}

export default function TagsLink({ items }: TagsProps) {
  return (
    <>
      { items.map((item) => <Tag key={item.key}><a href={item.link}>{item.name}</a></Tag>) }
    </>
  );
}
