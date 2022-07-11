import { PlutoContext, withEth, withSol } from '@plutohq/pluto-react';
import React from 'react';
import CheckoutForm from '../components/CheckoutForm';

function Index() {
  const value = React.useMemo(
    () => ({
      key: process.env.NEXT_PUBLIC_PLUTO_PUBLISHABLE_TEST_KEY,
      options: {
        serverUrl: 'https://api.prism.rest/v1',
      },
    }),
    [],
  );

  console.log(process.env.NEXT_PUBLIC_PLUTO_PUBLISHABLE_TEST_KEY);

  return (
    <PlutoContext.Provider value={value}>
      <CheckoutForm />
    </PlutoContext.Provider>
  );
}

export default withEth(withSol(Index));