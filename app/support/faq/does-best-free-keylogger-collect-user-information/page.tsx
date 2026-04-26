import FaqAnswerPage from '../_components/FaqAnswerPage';

const Page = () => {
  return (
    <FaqAnswerPage
      title="Does Best Free Keylogger collect user information?"
      question="What user information is collected by default?"
      answer={[
        'No. Best Free Keylogger does not collect user information.',
        'All the information recorded during monitoring activities are in your control, and you can choose what should happen to them. When reports are sent via email, LAN, FTP or USB, it is up to you to decide the destination.',
        'For more information, please read our Privacy Policy.'
      ]}
      relatedArticles={[
        {
          category: 'Blog',
          title: 'How to install Best Free Keylogger',
          href: '/blog',
        },
        {
          category: 'FAQ',
          title: 'How to retrieve a lost license key',
          href: '/support/faq/how-to-retrieve-a-lost-licence-key',
        },
        {
          category: 'Blog',
          title: 'How to activate Pro version',
          href: '/blog',
        },
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
