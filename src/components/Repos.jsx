const Repos = ({ repos, isloading }) => {
  if (isloading) {
    return <h1 className="fetching">Fetching Repositories...</h1>;
  }

  return (
    <div className="repos">
      {repos.map(({ id, title }) => (
        <article key={id} className="repo">
          <h4>{title}</h4>
        </article>
      ))}
    </div>
  );
};

export default Repos;
