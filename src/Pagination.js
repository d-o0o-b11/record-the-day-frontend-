import styled from "styled-components";

const Pagination = ({ total, limit, page, setPage, setcount_p }) => {
  const numPages = Math.ceil(total / limit);

  return (
    <>
      <Nav>
        {Array(numPages)
          .fill()
          .map((_, i) => (
            <Button
              key={i}
              onClick={() => {
                setPage(i);
                setcount_p(i);
              }}
              aria-current={page === i ? "page" : null}>
              {i + 1}
            </Button>
          ))}
      </Nav>
    </>
  );
};

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  margin: 16px;
`;

const Button = styled.button`
  border: none;
  border-radius: 8px;
  padding: 8px;
  margin: 0;
  background: #e4e0d5;
  color: #5e503f;
  font-size: 1rem;

  &:hover {
    background: tomato;
    cursor: pointer;
    transform: translateY(-2px);
  }

  &[disabled] {
    background: #977a5c;
    cursor: revert;
    transform: revert;
  }

  &[aria-current] {
    background: #ffcd4a;
    font-weight: bold;
    cursor: revert;
    transform: revert;
  }
`;

export default Pagination;
