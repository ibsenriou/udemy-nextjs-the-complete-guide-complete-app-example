import AllPosts from "../../components/posts/all-posts";

const DUMMY_POSTS = [
  {
    slug: 'getting-started-with-nextjs',
    title: 'Getting Started With NextJS',
    image: 'getting-started-nextjs.png',
    excerpt:
      'NextJs is the React app for production - it makes building fullstack React apps and sites easier.',
    date: '2022-02-10',
  },
  {
    slug: 'getting-started-with-nextjs2',
    title: 'Getting Started With NextJS',
    image: 'getting-started-nextjs.png',
    excerpt:
      'NextJs is the React app for production - it makes building fullstack React apps and sites easier.',
    date: '2022-02-10',
  },
  {
    slug: 'getting-started-with-nextjs3',
    title: 'Getting Started With NextJS',
    image: 'getting-started-nextjs.png',
    excerpt:
      'NextJs is the React app for production - it makes building fullstack React apps and sites easier.',
    date: '2022-02-10',
  },
  {
    slug: 'getting-started-with-nextjs4',
    title: 'Getting Started With NextJS',
    image: 'getting-started-nextjs.png',
    excerpt:
      'NextJs is the React app for production - it makes building fullstack React apps and sites easier.',
    date: '2022-02-10',
  },
];

function AllPostsPage() {
  return <AllPosts posts={DUMMY_POSTS}/>
}

export default AllPostsPage;