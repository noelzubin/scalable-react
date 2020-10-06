import React from 'react';

import { DynamicModuleLoader } from 'redux-dynamic-modules-react';

export default function withDynamicModule(Component, modules) {
  const modulesArray = Array.isArray(modules) ? modules : [modules];

  function Wrapper(props) {
    return (
      <DynamicModuleLoader modules={modulesArray}>
        <Component {...props} />
      </DynamicModuleLoader>
    )
  }

  const { displayName } = Component;
  Wrapper.displayName = `withDynamicModuleLoader(${displayName})`;

  return Wrapper;
}
