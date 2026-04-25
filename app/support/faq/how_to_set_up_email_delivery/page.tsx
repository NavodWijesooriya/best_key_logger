import FaqAnswerPage from '../_components/FaqAnswerPage';

const Page = () => {
  return (
    <FaqAnswerPage
      title="How to set up Email Delivery"
      question="I have installed Best Free Keylogger on one of my computers. I want to receive logs from that computer to my other computer via email. How can I set up Best Free Keylogger to deliver email reports?"
      answer={[
        'Go to Settings > Report Delivery > Delivery.',
        'Select your preferred Delivery Method: Encrypted File or HTML File.',
        'Go to Settings > Report Delivery > Email.',
        'Switch on Enable Email Sending.',
        'Enter the Email Address to receive reports.',
        'Enter the SMTP Details using the presets or enter the details according to your email service.',
        'Documentation - Email Configuration',
        'If your email service is not listed in the above table, please refer to their documentation for the relevant information or contact our support team.',
        'Enter the Email Username. This is usually the first portion of the email address. For example, if the email address is "johndoe128@gmail.com", the username is "johndoe128".',
        'Note: Outlook users are required to use their whole email address as the username too.',
        'Enter the password of the email account.',
        'Note: If Two Factor Authentication is enabled on the email account, an app password has to be used instead of the regular email password. If you need assistance, contact our support team.',
        'Enter Mail Subject.',
        'Click Test. If a test mail has been received in your mail inbox, the configuration is successful. If you run into any issues, contact our support team.'
      ]}
    />
  );
};

export default Page;
