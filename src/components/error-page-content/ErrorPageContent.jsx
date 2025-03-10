import "./ErrorPageContent.css";

export default function ErrorPageContent({ title, children }) {
  return (
    <div className="error-page">
      <div className="error-page__content">
        <h1 className="error-title">{title}</h1>
        {children}
      </div>
    </div>
  );
}
