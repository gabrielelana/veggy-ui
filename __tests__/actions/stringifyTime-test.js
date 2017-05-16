import stringifyTime from '../../src/app/main/actions/stringifyTime'

describe('stringifyTime', () => {
  test('6000 should return 00:06', () => {
    expect('00:06').toEqual(stringifyTime(6000))
  })

  test('1500000 should return 25:00', () => {
    expect('25:00').toEqual(stringifyTime(1500000))
  })

  test('1499000 should return 24:59', () => {
    expect('24:59').toEqual(stringifyTime(1499000))
  })

  test('0 should return 00:00', () => {
    expect('00:00').toEqual(stringifyTime(0))
  })
})
