import Link from 'next/link';
import { getAllPosts } from '../lib/posts';
import { motion } from 'framer-motion';

export default function Home() {
  const posts = getAllPosts();

  return (
     <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}>
        
    <div>
      <h1>My Blog</h1>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <Link href={`/posts/${post.id}`}>
              {post.title}
            </Link>
            
            <small> — {post.date}</small>
          </li>
        ))}
      </ul>
    </div>
    </motion.div>
  );
}

