import React from 'react';
import { render } from '@testing-library/react';
import Tags from './Tags';

test('Tags can render items', () => {
    render(<Tags items={[{link: '/', name:'test', key: 1}]} />);
});
