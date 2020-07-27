import classes from "../classes"

describe('classes', () => {
  it('接受 0 个参数', () => {
    const result = classes()
    expect(result).toEqual('')
  })
  it('接受 1 个参数', () => {
    const result = classes('abc')
    expect(result).toEqual('abc')
  })
  it('接受 2 个参数', () => {
    const result = classes('中文', 'abc')
    expect(result).toEqual('中文 abc')
  })
  it('接受 undefined null false', () => {
    const result = classes('中文', undefined, null, false, 'abc')
    expect(result).toEqual('中文 abc')
  })
})