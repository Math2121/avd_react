import styled from "styled-components";

export const Container = styled.section`
  max-width: 1120px;
  margin: 0 auto;
  
  nav {
    padding-top: 2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .logo {
      img {
        width: 8rem;
        height: auto;
        object-fit: cover;
      }
    }
  }
  .btn-header {
    background-color: var(--red);
    display: flex;
    align-items: center;
    border: 0;
    border-radius:8px;
    padding:1rem;
    height: 2rem;
    color:white;
    text-align: center;
    transition: all 0.5s ease;
    &:hover{
      transform: scale(0.9);
    }

  }
  .icon-header {
    width: 1rem;
    height: 1rem;
    color: white;
  }
`;
