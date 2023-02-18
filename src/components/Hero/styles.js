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

  @media (min-width: 600px) and (max-width: 1024px) {
    padding-top: 38rem;
  }

  @media (min-width: 1025px) {
    width: 1280px;
    padding-top: 7rem;
  }
  `;

export const Wrapper = styled.div`
  display: flex; 
  width: 100%;
  align-items: center;
  justify-content: center;
  justify-items: center;
  margin: 0 auto;

  @media (min-width: 600px) and (max-width: 1024px) {
    width: 80%;
    justify-content: flex-start;
  }

  @media (min-width: 1025px) {
    justify-content: flex-start;
    padding-left: 3rem;
  }
`;

  export const Logo = styled.div`
  display: flex;
  width: 7rem;
  height: 7rem;
  background-image: url(${logo});
  background-size: 7rem;

    @media (min-width: 600px) and (max-width: 1024px) {
    width: 12rem;
  height: 12rem;
  background-size: 12rem;
  }
    @media (min-width: 1025px) {
    width: 18rem;
  height: 18rem;
  background-size: 18rem;
  }
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
      font-size: 24px;
    }

    @media (min-width: 1025px) {
      font-size: 26px;
    }
  `

  export const Title = styled.h1`
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    font-size: 28px;
    line-height: 30px;
    letter-spacing: 2px;
    width: 180px;
    color: #FFFFFF;

    @media (min-width: 600px) and (max-width: 1024px) {
      font-size: 44px;
      padding-top: 0.5rem;
      letter-spacing: 3px;
      line-height: 40px;
    }

    @media (min-width: 1025px) {
      font-size: 64px;
      padding-top: 0.8rem;
      line-height: 65px;
    }
  `;

export const WrapperText = styled.div`
  display: flex; 
`;

export const DivStyled = styled.div`
  width: 100%;
  margin: 0 auto;
  text-align: center;

  @media (min-width: 600px) and (max-width: 1024px) {
    width: 80%;
  }

  @media (min-width: 1025px) {
    width: 70%;
    margin: 0;
    text-align: left;
    padding-left: 7rem;
  }
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

  @media (min-width: 600px) and (max-width: 1024px) {
    font-size: 52px;
  }

  @media (min-width: 1025px) {
    font-size: 66px;
    justify-content: flex-start;
    padding-top: 2rem;
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

    @media (min-width: 600px) and (max-width: 1024px) {
    font-size: 22px;
  }

  @media (min-width: 1025px) {
    width: 70%;
    padding: 1.2rem 0;
    font-size: 26px;

  }
`

export const DivButton = styled.div`
  margin: 0 auto;
  width: 100%;

  @media (min-width: 600px) and (max-width: 1024px) {
    max-width: 650px;
  }

  @media (min-width: 1025px) {
    width: 70%;
    margin: 0;
    padding: 0.5rem 1.5rem;
    display: flex;
  }
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

  @media (min-width: 1025px) {
    width: 50%;
    margin: 0 0.5rem 0 5.3rem ;
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

  @media (min-width: 1025px) {
    width: 25%;
    margin:0;
  }

`

export const Spacer = styled.div`
  padding-top: 0.5rem;
  
  @media (min-width: 600px) and (max-width: 1024px) {
    padding-top: 0.7rem;
  }
`

export const DivDates = styled.div`
  display: flex;
  margin: 0 auto;
  width: 90%;
  padding-top: 0.5rem;
  justify-content: center;
  
  @media (min-width: 1025px) {
    margin: 0;
    padding-left: 6.9rem;
    justify-content: flex-start;
  }
`

export const Calendar = styled.img`
width: 1.4rem;

  @media (min-width: 1025px) {
    width: 2rem;
  }
`

export const Dates = styled.p`
font-family: 'Poppins';
font-style: normal;
font-weight: 500;
font-size: 20px;
color: #FFFFFF;
padding: 0 0.5rem;

@media (min-width: 1025px) {
    font-size: 25px;
    padding: 0 0.8rem;
    padding-top: 0.2rem;

  }
`