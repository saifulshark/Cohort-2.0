export default function BusinessCard({ props }) {
  const { name, description, interests, links } = props;
  return (
    <>
      <div style={styles.container}>
        <h2 style={styles.name}>{name}</h2>
        <p style={styles.description}>{description}</p>
        <h3 style={styles.interestsContainer}>Interests</h3>
        <ul style={styles.interestsList}>
          {interests.map((interest, index) => (
            <li key={index} style={styles.interestItem}>
              {interest}
            </li>
          ))}
        </ul>
        <div style={styles.socialLinks}>
          {links.map((linkObj, index) => {
            const [platform, url] = Object.entries(linkObj)[0];
            return (
              <a href={url} key={index} target="_blank" rel="noopener noreferrer" style={styles.link}>
                {platform.charAt(0).toUpperCase() + platform.slice(1)}
              </a>
            )

          })}

        </div>
      </div>
    </>
  )
}

const styles = {
  container: {
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '20px',
    margin: '200px auto',
    maxWidth: '400px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    background: 'linear-gradient(to top, #fff1eb 0%, #ace0f9 100%)',
  },
  name: {
    fontSize: '24px',
    marginBottom: '10px',
    color: '#333',
  },
  description: {
    fontSize: '16px',
    color: '#555',
    marginBottom: '15px',
  },
  interestsContainer: {
    fontSize: '18px',
    marginBottom: '10px',
    color: '#333',
  },
  interestsList: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
  },
  interestItem: {
    fontSize: '14px',
    marginBottom: '5px',
    color: '#555',
  },
  socialLinks: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: '15px',
  },
  link: {
    textDecoration: 'none',
    color: '#fff',
    padding: '10px 15px',
    borderRadius: '5px',
    backgroundColor: '#007BFF',
    marginRight: '20px',
    marginTop: '10px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  },
}
