import FaqAnswerPage from '../_components/FaqAnswerPage';

const Page = () => {
  return (
    <FaqAnswerPage
      title="What are the compatible Windows versions?"
      question="Which Windows versions are supported?"
      answer={[
        'Best Free Keylogger is compatible with Windows 7, Windows 8, Windows 8.1, and Windows 10.'
      ]}
      relatedArticles={[
        {
          category: 'Blog',
          title: 'How to install Best Free Keylogger',
          href: '/blog',
        },
        {
          category: 'Blog',
          title: 'Getting Started with Best Free Keylogger',
          href: '/blog',
        },
        {
          category: 'Blog',
          title: 'How to activate Pro version',
          href: '/blog',
        },
        {
          category: 'FAQ',
          title: 'Can I install BFK on a remote computer?',
          href: '/support/faq/can-i-install-on-a-remote-computer',
        },
        {
          category: 'FAQ',
          title: 'Is Best Free Keylogger completely undetectable',
          href: '/support/faq/is-best-free-keylogger-undetectable',
        },
      ]}
    />
  );
};

export default Page;
