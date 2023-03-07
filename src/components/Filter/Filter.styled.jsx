import styled from 'styled-components';

export const FilerWrap = styled.div`
  width: 538px;
  height: 90px;
  padding:0 20px 0;
  border-color: #e2e8f0;
  background-color: white;
  border-radius: 6px;
  box-shadow: 0px 4px 4px rgb(0, 0, 0, 15%);
`;

export const FieldCaption = styled.label`
  display: block;
  text-align: start;
  font-size: 1.25rem;
  /* margin-bottom: 10px; */
`;

export const ContactInput = styled.input.attrs({ autoComplete: 'off' })`
  display: block;
  width: 100%;
  height: 2.5rem;
  padding: 12px;
  font-size: 18px;
  color: #1a202c;
  background-color: #dce3ec;
  outline: 2px solid transparent;
  border: 1px solid transparent;
  border-radius: 4px;
  transition: border-color box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    border-color: #0088cc;
    box-shadow: 0 0 0 1px #3182ce;
  }
`;
