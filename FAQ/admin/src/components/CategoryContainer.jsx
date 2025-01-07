import Wrapper from "../assets/wrappers/CategoryContainer";
const CategoryContainer = ({ category, description, createdAt, updatedAt }) => {
  return (
    <Wrapper>
      <div className="category-container">
        <div className="category-header">
          <h3>{category}</h3>
          <p>{description}</p>
        </div>
        <div className="category-details">
          <p>
            <strong>Created At:</strong> {createdAt}
          </p>
          <p>
            <strong>Updated At:</strong> {updatedAt}
          </p>
        </div>
      </div>
    </Wrapper>
  );
};

export default CategoryContainer;
