import styled from "styled-components";

const Wrapper = styled.section`
  height: 6rem;
  margin-top: 2rem;
  display: flex;
  align-items: center;
  justify-content: center; /* Centered for a more professional layout */
  flex-wrap: wrap;
  gap: 0.75rem;

  /* Pagination Container */
  .btn-container {
    background: #1e1e2f; /* Modern dark background */
    border-radius: 8px; /* Smoother rounded corners */
    display: flex;
    padding: 0.5rem;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2); /* Subtle shadow */
  }

  /* Page Number Buttons */
  .page-btn {
    background: transparent;
    border: none;
    width: 45px;
    height: 40px;
    font-weight: 600;
    font-size: 1.2rem;
    color: #00bcd4; /* Elegant cyan accent */
    border-radius: 6px;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
  }

  .page-btn:hover {
    background: #00bcd4;
    color: white;
    transform: scale(1.1);
  }

  /* Active Page Button */
  .active {
    background: #00bcd4;
    color: white;
    font-weight: bold;
    box-shadow: 0px 4px 8px rgba(0, 188, 212, 0.5);
  }

  /* Prev and Next Buttons */
  .prev-btn,
  .next-btn {
    background: #2b2b3c; /* Darker shade for contrast */
    border: none;
    border-radius: 6px;
    width: 100px;
    height: 40px;
    color: #00bcd4;
    text-transform: capitalize;
    letter-spacing: 0.05rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    cursor: pointer;
    font-size: 1rem;
    transition: all 0.3s ease-in-out;
  }

  .prev-btn:hover,
  .next-btn:hover {
    background: #00bcd4;
    color: white;
    transform: scale(1.05);
    box-shadow: 0px 4px 8px rgba(0, 188, 212, 0.5);
  }

  /* Dots for Pagination */
  .dots {
    display: grid;
    place-items: center;
    font-size: 1.5rem;
    color: #aaa;
    cursor: default;
  }
`;

export default Wrapper;
