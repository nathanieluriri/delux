export default function EmbeddedPage() {
    return (
      <div style={{ width: '100vw', height: '100vh', overflow: 'hidden',margin:'auto',justifyContent:'center',alignItems:'center' }}>
        <iframe
          src="https://www.affiliatemarketing.com.ng/" // Replace with the URL you want to embed
          width="100%"
          height="100%"
          style={{ border: 'none' }}
        />
      </div>
    );
  }
  