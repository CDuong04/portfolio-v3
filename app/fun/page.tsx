import { MDXLayoutRenderer } from '@/components/MDXComponents';
import FunLayout from '@/layouts/MDX/FunLayout';
import MainLayout from '@/layouts/MainLayout';
import { allAuthors } from 'contentlayer/generated';

export const metadata = {
  title: 'Fun - Charlie Duong',
  description: 'Some fun things - Charlie Duong',
};

export default function Uses() {
  const author = allAuthors.find((p) => p.slug === 'fun');

  if (!author) {
    return null;
  }

  return (
    <MainLayout>
      <FunLayout>
        <MDXLayoutRenderer content={author} />
      </FunLayout>
    </MainLayout>
  );
}
