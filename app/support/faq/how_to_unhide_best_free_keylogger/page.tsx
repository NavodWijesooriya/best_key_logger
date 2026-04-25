import FaqAnswerPage from '../_components/FaqAnswerPage';

const Page = () => {
  return (
    <FaqAnswerPage
      title="How to unhide Best Free Keylogger"
      question="I installed Best Free Keylogger, and I opened the interface just after installing the program. I restarted my computer, and now I cannot remember how to unhide the interface."
      answer={[
        'Use the Hotkey or the Keyword to unhide Best Free Keylogger interface.',
        'Hotkey',
        'Default: Ctrl + Alt + Shift + K',
        'How to use: Press the key combination together.',
        'Keyword',
        'Default: unhide',
        'How to use: Invoke the Run dialog box on Windows using Windows + R and type in the unhide keyword. You do not need to press Enter.',
        'You can change the default hotkey and the default keyword in Settings > Security.',
        'If neither of the above methods work for you, download and run this file: BFK Unhider.exe.'
      ]}
    />
  );
};

export default Page;
