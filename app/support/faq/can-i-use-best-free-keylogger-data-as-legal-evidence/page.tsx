import FaqAnswerPage from '../_components/FaqAnswerPage';

const Page = () => {
  return (
    <FaqAnswerPage
      title="Can I use data recorded with Best Free Keylogger as legal evidence?"
      question="Are logs and screenshots accepted as legal evidence?"
      answer={[
        'Legal acceptance depends on local law, consent requirements, and how the data was collected.',
        'Before relying on recorded data in legal cases, consult a qualified lawyer in your jurisdiction.',
        'This is placeholder legal guidance and should be reviewed by legal counsel before publication.'
      ]}
    />
  );
};

export default Page;
