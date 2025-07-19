import styled from "styled-components";

export const Card = styled.article`
  background-color: white;
  width: 100%;

  box-shadow: 0 0 5px black;
  border-radius: 5px;

  padding: 2rem;
  display: flex;
  flex-direction: column;

  align-items: center;
  gap: 10px;
`;

export const ProductImage = styled.img`
  /* width: 100%; */
  width: 250px;
  height: 400px;
  object-fit: contain;
  /* margin: 0 auto; */
`;

export const ProductTitle = styled.h1`
  font-weight: 500;
  font-size: 1.2rem;
  margin-top: 1rem;
`;

export const ReviewPriceWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 1rem;
`;

export const Review = styled.span``;

export const Price = styled.strong``;

export const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
  width: 100%;
`;

export const AddToCartButton = styled.button`
  border: none;
  border-radius: 5px;
  height: 40px;
  /* padding: 0 1rem; */

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2px;

  background-color: blue;
  color: white;
  font-size: 0.75rem;
  width: 100%;

  svg {
    font-size: 0.7rem;
  }
`;

export const RemoveFromCartButton = styled.button`
  border: none;
  border-radius: 5px;
  height: 40px;
  /* padding: 0 1rem; */

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2px;

  background-color: violet;
  color: black;
  font-size: 0.75rem;
  width: 100%;

  svg {
    font-size: 0.7rem;
  }
`;
