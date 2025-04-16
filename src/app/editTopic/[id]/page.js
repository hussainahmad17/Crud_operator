import EditPage from '@/app/components/editPage';

const getContent = async (id) => {
  try {
    const res = await fetch(`http://localhost:3000/api/topics/${id}`, { cache: "no-store" });
    if (!res.ok) {
      throw new Error("Failed to fetch topic");
    }
    return res.json();
  } catch (error) {
    console.error(error);
  }
};

const page = async (context) => {
  // Await the params before destructuring
  const resolvedParams = await context.params;
  const { id } = resolvedParams;
  const { topic } = await getContent(id);
  const { title, description } = topic;
  
  return (
    <>
      <EditPage id={id} title={title} description={description} />
    </>
  );
};

export default page;
