import FaqAnswerPage from '../_components/FaqAnswerPage';

const Page = () => {
  return (
    <FaqAnswerPage
      title="How to get the license key"
      question="Where can I find my activation key after purchase?"
      answer={[
        'Your key is usually delivered to the email address used at checkout.',
        'If you cannot find it, search your inbox and spam folder for your order receipt or key delivery message.',
        'This is placeholder key-delivery content and should be aligned with your real purchase system.'
      ]}
    />
  );
};

export default Page;
