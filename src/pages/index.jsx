import { PlutoContext, withEth, withSol } from '@plutohq/pluto-react';
import { NextSeo } from 'next-seo';
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

  return (
    <PlutoContext.Provider value={value}>
      <NextSeo title="Pluto Crypto Checkout Quickstart" noindex />
      <CheckoutForm />
    </PlutoContext.Provider>
  );
}

export default withEth(withSol(Index));