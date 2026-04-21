import FaqAnswerPage from '../_components/FaqAnswerPage';

const Page = () => {
  return (
    <FaqAnswerPage
      title="How to set up Email Delivery"
      question="How can I automatically receive logs by email?"
      answer={[
        'Open the delivery settings, enable email reports, and enter a destination inbox.',
        'Save your SMTP credentials, run a test send, and confirm messages are not blocked by spam filters.',
        'This is placeholder setup guidance and can be updated with exact screenshots later.'
      ]}
    />
  );
};

export default Page;
