import FaqAnswerPage from '../_components/FaqAnswerPage';

const Page = () => {
  return (
    <FaqAnswerPage
      title="Are there any recurring charges to use Best Free Keylogger?"
      question="Is this a one-time payment or subscription?"
      answer={[
        'Billing depends on the plan you choose at checkout; some offers are one-time while others can be recurring.',
        'Always review the checkout summary and invoice to confirm renewal terms before payment.',
        'This is placeholder billing content and should be replaced with official pricing policy text.'
      ]}
    />
  );
};

export default Page;
