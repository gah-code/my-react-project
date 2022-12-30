export async function getPosts() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  if (!response.ok) {
    throw new Response('Failed to fetch posts.', { status: 500 });
  }
  return response.json();
}

export async function getPost(id) {
  return fetch('https://jsonplaceholder.typicode.com/posts/' + id);
}
