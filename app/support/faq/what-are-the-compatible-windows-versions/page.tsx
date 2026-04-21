import FaqAnswerPage from '../_components/FaqAnswerPage';

const Page = () => {
  return (
    <FaqAnswerPage
      title="What are the compatible Windows versions?"
      question="Which Windows versions are supported?"
      answer={[
        'The product supports modern Windows versions commonly used on home and business PCs.',
        'For best compatibility, keep your operating system fully updated and verify architecture requirements before install.',
        'This is placeholder compatibility content and should be replaced with your exact supported-version matrix.'
      ]}
    />
  );
};

export default Page;
