import Head from 'next/head';
import head from 'next/head';

import { Fragment } from 'react';
import FeaturedPosts from '../components/home-page/featured-posts';

import Hero from '../components/home-page/hero';
import { getFeaturedPosts } from '../lib/posts-util';

function HomePage(props) {
  return (
    <Fragment>
      <Head>
        <title>Violet</title>
        <meta name='description' content='Violet Software Solutions Home Page' />
      </Head>
      <Hero />
      <FeaturedPosts posts={props.posts} />
    </Fragment>
  );
}

export function getStaticProps() {
  const featuredPosts = getFeaturedPosts();

  return {
    props: {
      posts: featuredPosts,
    },
  };
}

export default HomePage;
