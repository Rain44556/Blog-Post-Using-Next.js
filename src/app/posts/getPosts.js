export const getPosts = async () =>{
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
      const posts = res.json();
      // console.log(posts)
      return posts;
  }

  export const getPostsDetails = async (id) =>{
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
      const details = res.json();
      // console.log(details)
      return details;
  }