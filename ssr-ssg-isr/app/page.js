export default async function Home() {
  // let data = await fetch('https://api.vercel.app/blog', {cache: 'no-store'})
  // let data = await fetch("https://api.vercel.app/blog");
      let data = await fetch('https://api.vercel.app/blog', {next: {revalidate: 3600}})

  let posts = await data.json();
  return (
    <div>
      <h1>Hello from Home Page.</h1>
      <ui>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ui>
    </div>
  );
}
