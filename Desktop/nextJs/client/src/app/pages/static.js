export default function StaticPage({ message }) {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Static Page</h1>
      <p>{message}</p>
    </div>
  );
}

export async function getStaticProps() {
  return {
    props: {
      message: "This page was built at build time 🚀",
    },
  };
}
