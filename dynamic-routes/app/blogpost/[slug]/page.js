export default function BlogPost({ params }) {
    // throw new Error("This is a test error for the blog post page.");
    let languages = ["java", "javascript", "python", "c++", "css"];
    if(languages.includes(params.slug)) {
        return (
            <div>
                <h1>Blog Post</h1>
                <p>My Post : {params.slug}</p>
                <p>This is a programming language post.</p>
            </div>
        );
    }else{
        return (
            <div>
                <p>Post not found.</p>
            </div>
        );
    }
  return (

    <div>
      <h1>Blog Post</h1>
      {/* //fetch your blogpost by its slug */}
      <p>My Post : {params.slug}</p>
    </div>
  );
}