import ErrorPageContent from "../components/error-page-content/ErrorPageContent.jsx";
import Header from "../components/header/Header.jsx";
import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();

  let title = "An error occured";
  let message = "Something went wrong!";

  if (error.status === 500) {
    title = JSON.parse(error.data).message;
  }

  if (error.status === 404) {
    title = "Not Found!";
    message = "Could not find resourses or page";
  }

  return (
    <>
      <Header />
      <ErrorPageContent title={title}>
        <p>{message}</p>
      </ErrorPageContent>
    </>
  );
}
