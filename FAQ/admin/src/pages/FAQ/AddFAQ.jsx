import Wrapper from "../../assets/wrappers/FAQForm";
const AddFAQ = () => {
  return (
    <Wrapper>
      <form>
        <h2>{"Add FAQ"}</h2>
        <div className="form-group">
          <label htmlFor="question">Question</label>
          <input type="text" id="question" placeholder="Enter the question" />
        </div>
        <div className="form-group">
          <label htmlFor="answer">Answer</label>
          <textarea id="answer" placeholder="Enter the answer" />
        </div>
        <div className="form-group">
          <label htmlFor="category">Category</label>
          <input type="text" id="category" placeholder="Enter the category" />
        </div>
        <div className="form-actions">
          <button type="submit" className="btn submit-btn">
            {"Add FAQ"}
          </button>
        </div>
      </form>
    </Wrapper>
  );
};

export default AddFAQ;
