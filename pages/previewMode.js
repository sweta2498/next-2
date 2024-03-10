export const getStaticProps = (context) => {
  console.log(context.previewData.user);
  return {
    props: {
      data: context.preview ? "kashyap" : "mohit",
    },
  };
};
export default function PreviewMode({ data }) {
  return <h1>{data}</h1>;
}
