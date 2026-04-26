import FaqAnswerPage from '../_components/FaqAnswerPage';

const Page = () => {
  return (
    <FaqAnswerPage
      title="Can I use information recorded with Best Free Keylogger as legal evidence?"
      question="Can information recorded with Best Free Keylogger be considered legal evidence?"
      answer={[
        'It is up to the relevant court of law to decide whether any information recorded with Best Free Keylogger should be considered as legal evidence.',
        'Please consult your lawyer regarding the matter before utilizing the program to collect information for legal purposes.'
      ]}
      relatedArticles={[
        {
          category: 'FAQ',
          title: 'Bestxsoftware Privacy Policy',
          href: '/privacy_policy',
        },
        {
          category: 'FAQ',
          title: 'End User License Agreement',
          href: '/support/documentation',
        },
      ]}
    />
  );
};

export default Page;
