import React from 'react';
import { storiesOf } from '@storybook/react';
import Example from '../src';
import DemoContainer from '../tools/Container';

class Demo1 extends React.Component {

  render() {
    return (
      <DemoContainer>
        <Example />
      </DemoContainer>
    )
  }
}

storiesOf('Hook', module)
  .add('Demo1', () => <Demo1 />)