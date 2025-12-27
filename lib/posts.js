export const getAllPosts = () => {
  return [
    {
      id: 'hello-world',
      title: 'Hello, World!',
      date: '2025-12-26',
      content: 'This is your first blog post.',
    },
    {
      id: 'nextjs-basics',
      title: 'Next.js Basics',
      date: '2025-12-27',
      content: 'Learn how Next.js works...',
    }
  ];
};

export const getPostBySlug = (slug) => {
  return getAllPosts().find(post => post.id === slug);
};
