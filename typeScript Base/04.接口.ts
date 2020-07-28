interface login {
  name: string,
  passwrod: string,
  mobilePhone: number,
  authCode: number
}
const loginParams: login = {
  name: '123456',
  passwrod: 'Aa123456',
  mobilePhone: 13247252330,
  authCode: 123456
}
interface register extends login {
  nickname: string
}
const registerParams: register = {
  name: '123456',
  nickname: '123456789',
  passwrod: 'Aa123456',
  mobilePhone: 13247252330,
  authCode: 123456
}
