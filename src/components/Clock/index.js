import {Component} from 'react'
import './index.css'

class Clock extends Component {
  constructor(props) {
    super(props)
    this.state = {date: new Date()}

    console.log('calling Constructor')
  }

  componentDidMount() {
    console.log('component DIt Mount')

    this.timeID = setInterval(this.thick, 1000)
  }

  componentWillUnmount() {
    console.log('component will mount')
    clearInterval(this.timeID)
  }

  thick = () => {
    this.setState({date: new Date()})
  }

  render() {
    const {date} = this.state
    console.log(date)
    return (
      <div className="clock-container">
        <h1 className="heading">Clock</h1>
        <p className="time">{date.toLocaleTimeString()}</p>
      </div>
    )
  }
}
export default Clock
