import * as React from "react"
import Icon from './icon'

const fn = (eventType: string) => {
  console.log(eventType)
}

const IconExample: React.FunctionComponent = () => {
  return (
    <>
      <Icon name='wechat' onClick={fn.bind(null, 'click')}/>
      <Icon name='alipay' onMouseEnter={fn.bind(null, 'mouseEnter')}/>
      <Icon name='QQ' onMouseLeave={fn.bind(null, 'mouseLeave')}/>
    </>
  )
}

export default IconExample

