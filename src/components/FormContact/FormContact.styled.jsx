import styled from 'styled-components';

export const Form = styled.form.attrs({ autoComplete: 'off' })`
  width: 538px;
  height: 260px;
  padding:15px 20px 10px;
  border-color: #e2e8f0;
  background-color: white;
  border-radius: 6px;
  box-shadow: 0px 4px 4px rgb(0, 0, 0, 15%);
`;

export const BtnContact = styled.button.attrs({ type: 'submit' })`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 40px;
  font-family: inherit;
  font-weight: 700;
  font-size: 16px;
  line-height: 1.88;
  letter-spacing: 0.06em;
  color: #fff;
  background-color: #0088cc;
  margin-top: 25px;
  box-shadow: 0px 4px 4px rgb(0, 0, 0, 15%);
  border-radius: 4px;
  border-color: transparent;
  cursor: pointer;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    background-color: #007ab8;
  }
`;

export const FieldCaption = styled.label`
  display: block;
  margin-bottom: 10px;
  text-align: start;
  font-size: 1.25rem;
  line-height: 30px;
  font-weight: 500;
`;

export const ContactInput = styled.input`
  display: block;
  width: 100%;
  height: 2.5rem;
  padding: 12px;
  font-size: 18px;
  color: #1a202c;
  background-color: #dce3ec;
  outline: 2px solid transparent;
  border-color: #dce3ec;
  border: 1px solid transparent;
  border-radius: 4px;
  transition: border-color box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    border-color: #0088cc;
    box-shadow: 0 0 0 1px #3182ce;
  }
`;
