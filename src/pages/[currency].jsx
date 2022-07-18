import { loadPluto } from '@plutohq/pluto-js';
import { PlutoConfig } from '@plutohq/pluto-react';
import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';
import React from 'react';
import CheckoutForm from '../components/CheckoutForm';
import currencies from '../constants/currencies.json';

export default function Currency() {
  const router = useRouter();
  const pluto = loadPluto(process.env.NEXT_PUBLIC_PLUTO_PUBLISHABLE_TEST_KEY);

  return (
    <PlutoConfig pluto={pluto}>
      <NextSeo title="Pluto Crypto Checkout Quickstart" noindex />
      <CheckoutForm currencyCode={router.query.currency} />
    </PlutoConfig>
  );
}

export async function getServerSideProps({ query }) {
  const currency = currencies.find((c) => c.code === query.currency);

  if (!currency) return {
    redirect: {
      destination: '/eth',
    },
  };

  return { props: {} };
}
