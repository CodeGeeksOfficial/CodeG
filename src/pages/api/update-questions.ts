import allowCors from "src/utils/allowCors";

const handler = async (req: any, res: any) => {
  try {
    // this should be the actual path not a rewritten path
    // e.g. for "/blog/[slug]" this should be "/blog/post-1"

    await res.revalidate(`/practice`)
    return res.json({ success: `Successfully updated questions list` })
  } catch (err) {
    // If there was an error, Next.js will continue
    // to show the last successfully generated page
    return res.status(500).send('Error revalidating')
  }
}

export default allowCors(handler);
