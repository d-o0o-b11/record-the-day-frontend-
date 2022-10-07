import styled from "styled-components";

const Pagination = ({total, limit, page, setPage, setcount_p})=>{
    const numPages = Math.ceil(total / limit);
  
console.group(numPages)

    return(
        <>
        <Nav>
            <Button onClick={() => setPage(page-1)} disabled={page === 0}>
            &lt;
            </Button>
            {Array(numPages)
            .fill()
            .map((_, i) => (
                <Button
                key={i}
                onClick={() => {setPage(i); setcount_p(i)}}
                aria-current={page === i ? "page" : null}
                >
                {i + 1}
                </Button>
            ))}
            <Button onClick={() => setPage(page)} disabled={page === numPages}>
            &gt;
            </Button>
        </Nav>
        </>
    )

}

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
  background: #E4E0D5;
  color: #5E503F;
  font-size: 1rem;

  &:hover {
    background: tomato;
    cursor: pointer;
    transform: translateY(-2px);
  }

  &[disabled] {
    background: #977A5C;
    cursor: revert;
    transform: revert;
  }

  &[aria-current] {
    background: #FFCD4A;
    font-weight: bold;
    cursor: revert;
    transform: revert;
  }
`;

export default Pagination