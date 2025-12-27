import { getAllPosts, getPostBySlug } from '../../lib/posts';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Post() {
  const router = useRouter();
  const { slug } = router.query;
  const post = getPostBySlug(slug);
  if (!post) return <div>Post not found</div>;
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}>
     <Link 
  href="/" 
  style={{ color: '#fff', backgroundColor: '#f00', padding: '10px' }}
>
  Back
</Link>
      <div>
        <h1>{post.title}</h1>
        <p>{post.date}</p>
        <p>{post.content}</p>
      </div>
    </motion.div>
  );
}

// Optional: Pre-render all post pages at build time (SSG)
export async function getStaticPaths() {
  const posts = getAllPosts();
  const paths = posts.map(post => ({ params: { slug: post.id } }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug);
  return { props: { post } };
}