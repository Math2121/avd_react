import styled from "styled-components";

export const Container = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  margin-top: 5rem;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
  .post-wrapper {
    background-color: #fff;
    padding: 1rem;
    .post-title {
      text-align: center;
      margin-bottom: 1rem;
    }
    .event-info {
      div {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        gap: 0.5rem;
        margin-bottom: 1rem;
      }
    }
    .action-post {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 1rem;
      padding-top: 1rem;

      svg {
        cursor: pointer;
        transition: transform 0.5s ease;
        &:hover {
          transform: translateY(-8px);
        }
      }
    }
  }
  .icon-dash {
    width: 1rem;
    height: 1rem;
    color: var(--red);
  }
`;
