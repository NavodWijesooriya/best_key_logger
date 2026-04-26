import FaqAnswerPage from '../_components/FaqAnswerPage';

const Page = () => {
  return (
    <FaqAnswerPage
      title="Does BFK work with applications other than web browsers?"
      question="Does BFK work with applications other than web browsers?"
      answer={[
        'Yes. Best Free Keylogger monitors keystrokes, clipboard items, internet usage, and application usage.',
        'This includes all applications running on the computer including web browsers, word processing applications, spreadsheet applications and such.'
      ]}
      relatedArticles={[
        {
          category: 'FAQ',
          title: 'Documentation',
          href: '/support/documentation',
        },
        {
          category: 'FAQ',
          title: 'Limit Application Monitoring on BFK',
          href: '/support/documentation#limit-monitoring',
        },
      ]}
    />
  );
};

export default Page;
