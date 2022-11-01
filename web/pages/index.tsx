interface HomeProps {
  count: string;
}

export default function Home({ count }: HomeProps) {
  return <>TEST: {count}</>;
}

export const getServerSideProps = async () => {
  const response = await fetch("http://localhost:3333/pools/count");
  const {count} = await response.json();

  return {
    props: {
      count,
    },
  };
};
