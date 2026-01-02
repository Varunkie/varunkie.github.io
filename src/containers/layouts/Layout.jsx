import { Suspense } from 'react';

import Theme from '../../controllers/contexts/ThemeContext';
import Data from '../../controllers/contexts/DataContext';

const Layout = ({ children, transitionStage, displayLocation, ...rest }) => {
  return (
    <Data>
      <Theme className={`text-font outfit relative flex flex-col bg-div selection:bg-select selection:text-select-bold`}>
        <Suspense fallback={<main className="min-h-screen grow" />}>
          <main className={`${transitionStage} grow flex flex-col relative`} {...rest}>
            {children}
          </main>
        </Suspense>
      </Theme>
    </Data>
  );
};

export default Layout;
