import FaqAnswerPage from '../_components/FaqAnswerPage';

const Page = () => {
  return (
    <FaqAnswerPage
      title="How to retrieve a lost licence key"
      question="I lost my key email. How can I recover my licence key?"
      answer={[
        'Contact support with your purchase email and payment details to verify ownership.',
        'Once validated, support can resend your key or recovery instructions.',
        'This is placeholder recovery guidance and can be replaced with your final support workflow.'
      ]}
    />
  );
};

export default Page;
