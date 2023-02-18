import styled from 'styled-components';
import mb from '../../assets/images/mb.webp';
import tb from '../../assets/images/tb.webp';
import db from '../../assets/images/db.webp';
import logo from '../../assets/images/logo.png';

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 910px;
  background-repeat: no-repeat;
  /* background-size: cover; */
  background-position: top center;
  background-image: url(${mb});

  @media (min-width: 600px) and (max-width: 1024px) {
    height: 1300px;
    background-image: url(${tb});
  }

  @media (min-width: 1025px) {
    background-image: url(${db});
    height: 1080px;
  }

`;

export const Content = styled.div`
  padding-top: 23rem;
  margin: 0 auto;

  @media (min-width: 1025px) {
    width: 1280px;
  }
  `;

export const Wrapper = styled.div`
  display: flex; 
  width: 100%;
  align-items: center;
  justify-content: center;
  justify-items: center;
  margin: 0 auto;
  
`;

  export const Logo = styled.div`
  display: flex;
  width: 7rem;
  height: 7rem;
  background-image: url(${logo});
  background-size: 7rem;
  `;

  export const Text = styled.div`
    width: 100%;
    flex-wrap: wrap;
    align-content: center;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
    letter-spacing: 0.465em;
    color: #FFFFFF;

    @media (min-width: 600px) and (max-width: 1024px) {

    }
  `

  export const Title = styled.h1`
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 28px;
    line-height: 30px;
    letter-spacing: 2px;
    width: 180px;
    color: #FFFFFF;
  `;

export const WrapperText = styled.div`
  display: flex; 
`;

export const DivStyled = styled.div`
  width: 100%;
  margin: 0 auto;
  text-align: center;
`;

export const CTA = styled.h1`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: 36px;
  line-height: 112.5%;
  color: #FFFFFF;

  b {
    color: #23D2CE
  }
`

export const Paragraph = styled.p`
  padding: 1rem;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 112.5%;
  color: #FFFFFF;
`

export const DivButton = styled.div`
  margin: 0 auto;
  width: 100%;
`

export const Input = styled.input`
  display: block;
  width: 80%;
  height: 70px;
  margin: 0 auto;
  background: #212121;
  border-radius: 6px;
  border: none;
  color: #8B8B8B;
  font-family: 'Poppins';
  font-size: 1.2rem;
  font-weight: 500;
  padding-left: 1rem;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  
  &::placeholder {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: 1rem;
  color: #8B8B8B;
}
`;

export const Button = styled.button`
  display: block;
  width: 80%;
  height: 70px;
  margin: 0 auto;
  background: #1CF1ED;
  border-radius: 4px; 
  border: none;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  font-family: 'Poppins';
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  color: #000000;
  text-transform: uppercase;

  &:hover {
    cursor: pointer;
    background: rgba(35,177,174,1);
  }

`

export const Spacer = styled.div`
  padding-top: 0.4rem;
`

export const DivDates = styled.div`
  display: flex;
  margin: 0 auto;
  width: 90%;
  padding-top: 0.5rem;
  justify-content: center;
  

`

export const Calendar = styled.img`
width: 1.4rem;
`

export const Dates = styled.p`
font-family: 'Poppins';
font-style: normal;
font-weight: 500;
font-size: 20px;
color: #FFFFFF;
padding: 0 0.5rem;
`