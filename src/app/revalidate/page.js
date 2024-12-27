import revalidateBlog from "../actions";

export default function Page() {
  return (
    <>
    <button onClick={revalidateBlog}>Revalidate Blog</button>
    </>
  )
}
