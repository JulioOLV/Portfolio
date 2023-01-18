import NextHead from 'next/head';

const Head = ({ ...otherProps }) => {
  return (
    <div>
      <NextHead>{otherProps.children}</NextHead>
    </div>
  );
};

export default Head;
