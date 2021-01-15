import type { NextApiRequest, NextApiResponse } from 'next'

export default async function devToProxyRouter(
  _req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  const blogPosts = await getBlogPosts()
  res.json(blogPosts)
}

async function getBlogPosts() {
  // ? This only returns the last 30 blog posts, so if I ever become a blog-baller this will need a refactor.
  const { DEVTO_USERNAME, DEVTO_API_KEY } = process.env

  const blogUrl = `https://dev.to/api/articles?username=${DEVTO_USERNAME}&api-key=${DEVTO_API_KEY}`

  const response = await fetch(blogUrl, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' }
  })

  if (!response.ok) throw new Error(`HTTP-Error (${response.status}): ${response.text}`)

  return response.json()
}
