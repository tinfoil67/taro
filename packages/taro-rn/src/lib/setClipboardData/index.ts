import Clipboard from '@react-native-community/clipboard'
import { showToast } from '../showModal/toast'
import { successHandler, errorHandler } from '../../utils'

export function setClipboardData(opts: Taro.setClipboardData.Option): Promise<Taro.setClipboardData.Promised> {
  const { data, success, fail, complete } = opts

  if (typeof data !== 'string') {
    const res = {
      errMsg: 'setClipboardData:fail parameter error: parameter.data should be String'
    }
    return errorHandler(fail, complete)(res)
  }

  Clipboard.setString(data)
  const res = {
    errMsg: 'setClipboardData:ok',
    data,
  }
  showToast({
    title: '内容已复制'
  })
  return successHandler(success, complete)(res)
}
