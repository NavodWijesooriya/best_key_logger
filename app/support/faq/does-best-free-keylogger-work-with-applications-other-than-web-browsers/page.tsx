import FaqAnswerPage from '../_components/FaqAnswerPage';

const Page = () => {
  return (
    <FaqAnswerPage
      title="Does Best Free Keylogger work with applications other than web browsers?"
      question="Can it log activity in desktop apps, chats, and documents?"
      answer={[
        'Yes, the logger can capture input from many desktop applications, not only browser tabs.',
        'Coverage can vary by app type, permissions, and security protections on the operating system.',
        'This is placeholder compatibility content and can be expanded with app-by-app details.'
      ]}
    />
  );
};

export default Page;
