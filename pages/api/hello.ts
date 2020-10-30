// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (
  _req: unknown,
  res: { statusCode: number; json: (arg0: { name: string }) => void }
): void => {
  res.statusCode = 200
  res.json({ name: 'John Doe' })
}
