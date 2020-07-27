import * as React from "react"
import * as ReactDom from 'react-dom'
import Icon from './icon/icon'

const fn = (eventType: string) => {
  console.log(eventType)
}

const App: React.FunctionComponent = () => {
  return (
    <>
      <Icon name='wechat' onClick={fn.bind(null, 'click')}/>
      <Icon name='alipay' onMouseEnter={fn.bind(null, 'mouseEnter')}/>
      <Icon name='QQ' onMouseLeave={fn.bind(null, 'mouseLeave')}/>
    </>
  )
}

ReactDom.render(<App/>, document.querySelector('#root'))
