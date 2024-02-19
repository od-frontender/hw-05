const renderArray = arr => {
  return arr.length ? (
    <ol>
      {arr.map((item, index) => {
        return <li key={index}>{Array.isArray(item) ? renderArray(item) : item}</li>;
      })}
    </ol>
  ) : null;
};

const renderObject = obj => {
  return Object.keys(obj).length ? (
    <ul>
      {Object.keys(obj).map((key, index) => {
        return (
          <li key={index}>
            {key}:
            {typeof obj[key] === `object`
              ? Array.isArray(obj[key])
                ? renderArray(obj[key])
                : obj[key] !== null && renderObject(obj[key])
              : obj[key]}
          </li>
        );
      })}
    </ul>
  ) : null;
};

export { renderObject, renderArray };
