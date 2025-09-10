import { ProgramPageContent } from './program-page-content'

interface ProgramPageProps {
  params: Promise<{
    slug: string
  }>
}

export default async function ProgramPage({ params }: ProgramPageProps) {
  const { slug } = await params

  return <ProgramPageContent slug={slug} />
}