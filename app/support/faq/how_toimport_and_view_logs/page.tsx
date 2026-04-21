import FaqAnswerPage from '../_components/FaqAnswerPage';

const Page = () => {
  return (
    <FaqAnswerPage
      title="How to import and view logs"
      question="How do I load exported logs and read them in the viewer?"
      answer={[
        'Open the logs section, choose import, and select a supported export file.',
        'After import, filter by date or app category to review entries faster.',
        'This is placeholder log-view guidance and can be expanded with file format notes.'
      ]}
    />
  );
};

export default Page;
