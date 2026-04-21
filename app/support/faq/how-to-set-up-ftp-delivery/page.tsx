import FaqAnswerPage from '../_components/FaqAnswerPage';

const Page = () => {
  return (
    <FaqAnswerPage
      title="How to set up FTP Delivery"
      question="How can I upload logs automatically to an FTP server?"
      answer={[
        'Enable FTP delivery in settings and enter the host, port, username, password, and target folder.',
        'Run a connection test before enabling schedule-based uploads to verify credentials and permissions.',
        'This is placeholder FTP configuration content and can be replaced with exact field-level instructions.'
      ]}
    />
  );
};

export default Page;
