import * as S from './styles';
import calendar from '../../assets/images/calendar.svg';

const Hero = () => (
  <S.Container>
    <S.Content>
      <S.Wrapper>
        <S.Logo />
        <S.WrapperText>
        <S.Text>
          IMERSÃO
          <S.Title>
            Crypto Investidor
          </S.Title>
        </S.Text>
        </S.WrapperText>
      </S.Wrapper>

      <S.DivStyled>
        <S.CTA>
          Aprenda <b>investir</b> de
          forma inteligente e
          assertiva
        </S.CTA>

        <S.Paragraph>
          O método comprovado para investir da melhor
          forma e lucrar todos os dias no mercado de
          criptomoedas.
        </S.Paragraph>
      </S.DivStyled>

      <S.DivButton>
        <S.Input placeholder="Digite seu melhor e-mail:" />
          <S.Spacer />  
        <S.Button>
          Me Inscrever
        </S.Button>
      </S.DivButton>

      <S.DivDates>
        <S.Calendar src={calendar} alt="calendar"/>
        <S.Dates>
          21, 22 e 23 de março às 19h
        </S.Dates>
      </S.DivDates>
    </S.Content>
  </S.Container>
);

export default Hero;