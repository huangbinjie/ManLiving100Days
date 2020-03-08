export function UnimplementedError(message = '还没实现') {
  return Error(message)
}

export function UnexpectValueError() {
  return Error()
}