import React from "react"
import * as renderer from 'react-test-renderer'
import {mount} from 'enzyme'
import Icon from '../icon'

describe('icon', () => {
  it('render correctly', () => {
    const json = renderer.create(<Icon name='wechat'/>).toJSON()
    expect(json).toMatchSnapshot()
  })
  it('click event', () => {
    const fn = jest.fn()
    const component = mount(<Icon name='wechat' onClick={fn}/>)
    component.find('svg').simulate('click')
    expect(fn).toBeCalled()
  })
})

