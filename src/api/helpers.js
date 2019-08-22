import axios from 'axios'
const errOK = 0
export function get (url) {
  return function (params) {
    return axios.get(url, { params }).then((res) => {
      const { errno, data } = res.data
      debugger
      console.log(res)
      if (errno === errOK) {
        console.log(data)
        return data
      }
    }).catch(() => { })
  }
}
