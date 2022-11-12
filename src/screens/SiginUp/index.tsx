import { useState } from 'react'
import { Button } from '../../components/Form/Button'
import { Input } from '../../components/Form/Input'
import { Container } from './styles'

import auth from '@react-native-firebase/auth'
import { Alert } from 'react-native'

export function SiginUp() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  function handleCadastrar() {
    if (password === confirmPassword) {
      auth()
        .createUserWithEmailAndPassword(email, password)
        .then(() => {
          console.log('User account created & signed in!')
        })
        .catch(error => {
          console.log(error)
        })
    } else {
      Alert.alert('Senhas não conferem')
    }
  }
  return (
    <Container>
      <Input placeholder="E-mail" onChangeText={setEmail} />
      <Input placeholder="Senha" onChangeText={setPassword} secureTextEntry />
      <Input
        placeholder="Confirme a senha"
        onChangeText={setConfirmPassword}
        secureTextEntry
      />
      <Button title="Cadastrar" onPress={handleCadastrar} />
    </Container>
  )
}
