const Footer = () => {
  return (
    <div
      style={{
        justifyContent: 'center',
        width: '100%',
        fontSize: '12px',
        marginBottom: 'var(--common-margin)',
      }}
    >
      <p>
        Designed in Figma, with a color scheme based on my profile picture. Used
        MUI components for styling. Layout inspired by{' '}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.brittanychiang.com/"
        >
          Brittany Chiang.
        </a>
      </p>
    </div>
  );
};

export default Footer;
