import * as React from 'react';

import Foco from '../src';

export default { title: 'Render Prop' };

export const propRender = () => {
  return (
    <Foco
      onClickOutside={() => alert('click out')}
      render={wrapperProps => (
        <div
          {...wrapperProps}
          style={{ border: '1px solid skyblue', textAlign: 'center' }}
        >
          <p>
            Hola! Render prop is provided. Clicks outside would trigger alerts
          </p>
        </div>
      )}
    />
  );
};

// propRender.storyName =  'Render Prop'

const propChildren = () => {
  return (
    <Foco onClickOutside={() => alert('click out')}>
      {wrapperProps => (
        <div
          {...wrapperProps}
          style={{ border: '1px solid skyblue', textAlign: 'center' }}
        >
          <p>
            Hola! Function as children prop is provided. Clicks outside would
            trigger alerts
          </p>
        </div>
      )}
    </Foco>
  );
};

// propChildren.storyName = 'Prop Children';

export const propComponent = () => {
  return (
    <Foco
      onClickOutside={() => alert('click out')}
      component="div"
      style={{ border: '1px solid skyblue', textAlign: 'center' }}
    >
      <p>
        Hola! Component prop is provided. Clicks outside would trigger alerts
      </p>
    </Foco>
  );
};

// propComponent.storyName = 'Prop Component';
