export default function Purchase() {
  return '';
}

export async function getServerSideProps() {
  return {
    redirect: {
      destination: '/eth',
    },
  };
}
