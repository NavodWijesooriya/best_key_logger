import React from 'react';


// import heroImage from './assets/hero_illustration.svg';
const keyloggerImage = '/assets/blog/email-delivery-configuration-guide.png';
const antivirusImage = '/assets/blog/how-to-add-an-antivirus-exception.png';
const emailImage = '/assets/blog/top-10-free-keylogger-software.png';

const styles = {
  page: {
    fontFamily: 'sans-serif',
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '20px',
  },
  // --- Hero Section Styles (from image_0.png) ---
  hero: {
    display: 'flex',
    flexDirection: 'column' as 'column',
    alignItems: 'center',
    textAlign: 'center' as 'center',
    marginBottom: '60px',
  },
  title: {
    fontSize: '2.5rem',
    color: '#333',
    marginBottom: '30px',
  },
  illustration: {
    maxWidth: '600px',
    height: 'auto',
  },
  // --- Featured Posts Styles (from image_1.png) ---
  featured: {
    //
  },
  sectionHeading: {
    fontSize: '1.5rem',
    color: '#555',
    marginBottom: '30px',
  },
  postGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '30px',
  },
  postCard: {
    backgroundColor: '#fff',
    border: '1px solid #e0e0e0',
    borderRadius: '8px',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column' as 'column',
    textAlign: 'center' as 'center',
    boxShadow: '0 2px 5px rgba(0,0,0,0.05)', // Subtle shadow like in the image
  },
  postImage: {
    width: '100%',
    height: 'auto',
    display: 'block', // Prevents extra space at the bottom of the image
  },
  postContent: {
    padding: '20px',
  },
  postTitle: {
    margin: '0',
    fontSize: '1.2rem',
    color: '#333',
    lineHeight: '1.4',
  },
};

const BestxsoftwareBlog: React.FC = () => {
  const posts = [
    {
      title: 'Top 10 free keylogger software',
      image: keyloggerImage,

    },
    {
      title: 'How to add an Antivirus Exception',
      image: antivirusImage,

    },
    {
      title: 'Email Delivery Configuration Guide',
      image: emailImage,

    },
  ];

  return (
    <div style={styles.page}>
      {/* --- Hero Section --- */}
      <section style={styles.hero}>
        <h1 style={styles.title}>Welcome to Bestxsoftware Blog!</h1>
        {/* <img src={heroImage} alt="Person on couch illustration" style={styles.illustration} /> */}
      </section>

      {/* --- Featured Posts Section --- */}
      <section style={styles.featured}>
        <h2 style={styles.sectionHeading}>Featured Posts</h2>
        <div style={styles.postGrid}>
          {posts.map((post, index) => (
            <div key={index} style={styles.postCard}>
              {/* Image is placed outside postContent to go edge-to-edge */}
              <img src={post.image} alt={post.title} style={styles.postImage} />
              <div style={styles.postContent}>
                <h3 style={styles.postTitle}>{post.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default BestxsoftwareBlog;