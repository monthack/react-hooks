import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { CounterWithCustomHook } from './01-userState/CounterWithCustomHook';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <CounterWithCustomHook />
  </StrictMode>
);
