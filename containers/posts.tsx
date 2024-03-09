import { Container } from '@/components/container'

interface Props {
  posts: any
}

export const Posts = ({ posts }: Props) => {
  return (
    <section className='scroll-mt-28'>
      <Container>
        {posts.map((post: any) => (
          <p key={post.slug.current}>{post.title}</p>
        ))}
      </Container>
    </section>
  )
}
