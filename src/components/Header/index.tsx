import { Console } from 'console'
import logoimg from '../../assets/logo.svg'
import { Container, Content } from './styles'

export function Header() {
  return (
    <Container>
      <Content>
        <img src={logoimg} alt="MyMoney" />
        <button type="button">
          Nova transação
        </button>
      </Content>
    </Container>
  )
}