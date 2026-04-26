import FaqAnswerPage from '../_components/FaqAnswerPage';

const Page = () => {
  return (
    <FaqAnswerPage
      title="I cannot find Best Free Keylogger on my computer"
      question="I had installed Best Free Keylogger on my computer. It has disappeared after I rebooted my computer. What happened?"
      answer={[
        'Some antivirus programs falsely identify monitoring software as spyware. In such cases, they tend to block, delete, or interrupt the functionality of the monitoring program.',
        'It could be that your issue was caused by your antivirus program. Please make sure that you add Best Free Keylogger folder to the list of exceptions on your antivirus software.'
      ]}
      relatedArticles={[
        {
          category: 'Documentation',
          title: 'Unhide Best Free Keylogger GUI',
          href: '/support/documentation#unhide',
        },
        {
          category: 'FAQ',
          title: 'How to unhide Best Free Keylogger',
          href: '/support/faq/how_to_unhide_best_free_keylogger',
        },
        {
          category: 'Blog',
          title: 'How to install Best Free Keylogger',
          href: '/blog',
        },
        {
          category: 'Blog',
          title: 'How to add an Antivirus Exception',
          href: '/blog/how-to-add-an-antivirus-exception',
        },
      ]}
    />
  );
};

export default Page;
