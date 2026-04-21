import FaqAnswerPage from '../_components/FaqAnswerPage';

const Page = () => {
  return (
    <FaqAnswerPage
      title="Is Best Free Keylogger undetectable?"
      question="Will the software always run without being detected?"
      answer={[
        'No software can guarantee complete invisibility in every environment or security setup.',
        'Detection behavior can vary based on antivirus settings, system policy, and installed protections.',
        'This is placeholder detectability guidance and can be replaced with your official product statement.'
      ]}
    />
  );
};

export default Page;
