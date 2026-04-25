import FaqAnswerPage from '../_components/FaqAnswerPage';

const Page = () => {
  return (
    <FaqAnswerPage
      title="How to set up FTP Delivery"
      question="I need to upload logs and all screenshots recorded by Best Free Keylogger on one computer to an FTP host. How can I configure the program to upload the reports via FTP?"
      answer={[
        'Go to Settings > Report Delivery > Delivery.',
        'Select your preferred Delivery Method: Encrypted File or HTML File.',
        'Go to Settings > Report Delivery > FTP.',
        'Switch on Enable FTP Uploading.',
        'Enter the FTP Host address.',
        'Enter the name of the directory to receive logs.',
        'Enter the Username to access the FTP Host.',
        'Enter the Password to access the FTP Host.',
        'Click Test. If you run into any issues, contact our support team.'
      ]}
    />
  );
};

export default Page;
