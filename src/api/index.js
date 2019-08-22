import { get } from './helpers'

const userList = get('api/userList')
const submitModify = get('api/modify')
export {
  userList,
  submitModify
}
