import FaqAnswerPage from '../_components/FaqAnswerPage';

const Page = () => {
  return (
    <FaqAnswerPage
      title="How to load reports"
      question="How do I open previously saved reports in the app?"
      answer={[
        'Open the Reports tab and select the report file or date range you want to review.',
        'Use filters to narrow by website, app, or time period to quickly find activity.',
        'This is placeholder reporting guidance and can be replaced with exact UI steps.'
      ]}
    />
  );
};

export default Page;
