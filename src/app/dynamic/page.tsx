export const dynamic = 'force-dynamic';

const Page = () => {
  const date = new Date();

  return <p>{date.toISOString()}</p>;
};

export default Page;
