import FaqAnswerPage from '../_components/FaqAnswerPage';

const Page = () => {
  return (
    <FaqAnswerPage
      title="Can I install Best Free Keylogger on a remote computer?"
      question="Can I install and manage the app on a different computer remotely?"
      answer={[
        'Yes, you can install it on another computer if you have physical or authorized remote access to that machine.',
        'For best results, complete installation directly on the target device, then verify settings like startup mode and log delivery.',
        'This is placeholder help content and can be replaced with your final support policy text later.'
      ]}
    />
  );
};

export default Page;
