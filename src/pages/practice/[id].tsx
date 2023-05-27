import React from "react";
import PracticeContainer from "src/components/routes/practice/PracticeContainer";
import { apiCall } from "src/core/api-requests/axios";

type Props = {
  question: {};
};

const practice = ({ question }: Props) => {
  return <PracticeContainer question={question} />;
};

export default practice;

// This function gets called at build time
export async function getStaticPaths() {
  // Call an external API endpoint to get posts
  const res: any = await apiCall({ key: "all_questions" });
  const questions = res.data;

  // Get the paths we want to pre-render based on posts
  const paths = questions.map((question: any) => ({
    params: { id: question.id },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: "blocking" };
}

// This also gets called at build time
export async function getStaticProps({ params }: { params: any }) {
  // params contains the post `id`.
  // If the route is like /posts/1, then params.id is 1
  let question = {};
  let notFound = true;
  try {
    const res: any = await apiCall({
      key: "fetch_question",
      params: { question_id: params.id },
    });
    question = res?.data;
    notFound = question ? false : true;
  } catch (error) {}

  // Pass post data to the page via props
  return { props: { question }, revalidate: 86400, notFound: notFound };
}
