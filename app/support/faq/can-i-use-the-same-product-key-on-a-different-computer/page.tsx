import FaqAnswerPage from '../_components/FaqAnswerPage';

const Page = () => {
  return (
    <FaqAnswerPage
      title="Can I use the same product key on a different computer?"
      question="Can one product key be reused across multiple devices?"
      answer={[
        'In most cases, a license key is tied to one device unless your plan includes multiple seats.',
        'If you changed computers, contact support with your order details to request key transfer help.',
        'This is placeholder licensing text and can be replaced with exact plan terms.'
      ]}
    />
  );
};

export default Page;
