import { Imports } from ".";

const PageTitle = ({ search }) => {
  const { PageTitleContainer } = Imports;

  return (
    <PageTitleContainer>
      {search === "" ? (
        <div className="page-title">
          <h1>
            Popular Movies{" "}
            <span className="usage-message">
              (Double-tap to add to watch list)
            </span>
          </h1>
        </div>
      ) : (
        <div className="page-title">
          <p>Search {"   "}</p>
          <span className="usage-message">
            (Double-tap to add to watch list)
          </span>
          <h1>{search}</h1>
        </div>
      )}
    </PageTitleContainer>
  );
};

export default PageTitle;
