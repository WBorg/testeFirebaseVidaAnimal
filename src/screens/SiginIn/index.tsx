import { Button } from '../../components/Form/Button'
import { Input } from '../../components/Form/Input'
import { Container, Label, SignUp } from './styles'

export function SiginIn() {
  return (
    <Container>
      <Input placeholder="E-mail" />
      <Input placeholder="Senha" secureTextEntry />
      <SignUp>
        <Label>Ainda não tem cadastro? Faça aqui</Label>
      </SignUp>
      <Button title="Enviar" />
    </Container>
  )
}
