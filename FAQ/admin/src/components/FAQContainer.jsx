import Wrapper from "../assets/wrappers/FAQContainer";

const FAQContainer = ({ question, answer, category, createdAt, updatedAt }) => {
  return (
    <Wrapper>
      <div className="faq-container">
        <h3 className="faq-question">{question}</h3>
        <p className="faq-answer">{answer}</p>
        <div className="faq-meta">
          <span className="faq-category">Category: {category}</span>
          <div className="faq-timestamps">
            <span>Created: {new Date(createdAt).toLocaleDateString()}</span>
            <span>
              Last Updated: {new Date(updatedAt).toLocaleDateString()}
            </span>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default FAQContainer;
