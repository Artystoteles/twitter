import "./RecTags.css";

const RecTags = () => {
  return (
    <div className="recomended-tags-container">
      <div className="recomended-tags-header">
        <h2>Najpopularniejsze dla Ciebie</h2>
      </div>
      <div className="tags-list">
        <div className="tag-container">
          <p> Forbes </p>
        </div>
        <div className="tag-container">
          <p>Wersow</p>
        </div>
        <div className="tag-container">
          <p>Mensa International</p>
        </div>
        <div className="tag-container">
          <p>Wardęga</p>
        </div>
      </div>
    </div>
  );
};

export default RecTags;
