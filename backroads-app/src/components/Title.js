const Title = ({ titleFirst, titleSecond }) => {
  return (
    <div className="section-title">
      <h2>
        {titleFirst} <span>{titleSecond}</span>
      </h2>
    </div>
  );
};
export default Title;
