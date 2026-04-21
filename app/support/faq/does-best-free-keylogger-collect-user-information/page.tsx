import FaqAnswerPage from '../_components/FaqAnswerPage';

const Page = () => {
  return (
    <FaqAnswerPage
      title="Does Best Free Keylogger collect user information?"
      question="What user information is collected by default?"
      answer={[
        'By default, activity logs are stored locally according to the options you enable in settings.',
        'No extra analytics should be assumed unless clearly described in your privacy policy and release notes.',
        'This is placeholder privacy content and should be aligned with your official policy.'
      ]}
    />
  );
};

export default Page;
