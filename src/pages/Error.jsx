import ErrorPageContent from "../components/error-page-content/ErrorPageContent.jsx";
import Header from "../components/header/Header.jsx";
import { useRouteError } from "react-router-dom";
import { translation } from "../utils/translations.js";
import { useSelector } from "react-redux";

export default function ErrorPage() {
  const error = useRouteError();
  const language = useSelector((state) => state.lang.language);

  let title = translation[language].anErrorOccured;
  let message = translation[language].somethingWentWrong;

  if (error.status === 500) {
    title = JSON.parse(error.data).message;
  }

  if (error.status === 404) {
    title = translation[language].notFound;
    message = translation[language].couldNotFindResOrPage;
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
