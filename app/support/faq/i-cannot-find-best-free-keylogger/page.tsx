import FaqAnswerPage from '../_components/FaqAnswerPage';

const Page = () => {
  return (
    <FaqAnswerPage
      title="I cannot find Best Free Keylogger on my computer"
      question="The app window is hidden. How can I locate and open it again?"
      answer={[
        'Try the configured hotkey or keyword to show the interface.',
        'If startup was disabled or the app was removed by security software, reinstall and add trusted exceptions as needed.',
        'This is placeholder troubleshooting content and can be extended with detailed recovery steps.'
      ]}
    />
  );
};

export default Page;
