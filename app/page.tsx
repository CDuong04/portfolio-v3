import Hero from '@/components/Hero';
import Intro from '@/components/Intro';
import Photos from '@/components/Photos';
import { ScrollProvider } from '@/components/Providers/ScrollProvider';
import RecentPosts from '@/components/RecentPosts';
import SectionContainer from '@/components/SectionContainer';
import TopTracks from '@/components/Spotify/TopTracks';
import Works from '@/components/Work/Works';
import { allCoreContent, sortedBlogPost } from '@/lib/utils/contentlayer';
import { allBlogs } from 'contentlayer/generated';
import { Suspense } from 'react';
import CommandBar from 'components/CommandBar.js';
import { allAuthors } from 'contentlayer/generated';
import { MDXLayoutRenderer } from '@/components/MDXComponents';
import AuthorLayout from '@/layouts/MDX/AuthorLayout';

export default function Page() {
  const sortedPosts = sortedBlogPost(allBlogs);
  const posts = allCoreContent(sortedPosts);
  const author = allAuthors.find((p) => p.slug === 'intro');
  if (!author) {
    return null;
  }

  return (
    <ScrollProvider>
      <Hero />
      <Intro />
      {/* <Works /> */}
      <SectionContainer>
        {/* <Photos /> */}
        <AuthorLayout content={author}>
          <MDXLayoutRenderer content={author} />
        </AuthorLayout>
        <Photos />
        <RecentPosts posts={posts} />
        <Suspense fallback="loading..">
          <TopTracks />
        </Suspense>
      </SectionContainer>
    </ScrollProvider>
  );
}
