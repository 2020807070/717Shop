import Raect, { Component } from 'react'
import ReactDOM from 'react-dom'


class Notify extends Component {
    render() {
        return <div id="notify">
            <p>今天你吃饭了吗！</p>
        </div>
    }
}
class NotifyPortals extends Component {
    render() {
        let { wrapper } = this.props
        return ReactDOM.createPortal(<Notify />, wrapper)
    }
}


export default NotifyPortals