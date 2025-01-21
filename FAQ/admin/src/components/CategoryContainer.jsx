import Wrapper from "../assets/wrappers/CategoryContainer";
import { Link, Form } from "react-router-dom";

const CategoryContainer = ({
  _id,
  name,
  description,
  createdAt,
  updatedAt,
}) => {
  return (
    <Wrapper>
      <div className="category-container">
        <div className="category-header">
          <h3>{name}</h3>
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
        <div className="category-actions">
          <Link
            to={`/dashboard/editcategory/${_id}`}
            className="btn update-btn"
          >
            Update
          </Link>
          <Form action={`/dashboard/deletecategory/${_id}`} method="post">
            <button className="btn delete-btn" type="submit">
              Delete
            </button>
          </Form>
        </div>
      </div>
    </Wrapper>
  );
};

export default CategoryContainer;
