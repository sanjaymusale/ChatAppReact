import React from 'react'
import { connect } from 'react-redux'
import { sendMessage } from '../redux/actions/message'
import { animateScroll } from 'react-scroll'

class MessageForm extends React.Component {
    constructor() {
        super()
        this.state = {
            message: ''
        }
    }

    scrollToBottom = () => {
        console.log('scroll to bottom')
        animateScroll.scrollToBottom({
            containerId: "messagesCont"
        });
    }

    handleChange = (event) => {
        const name = event.target.name
        const value = event.target.value
        this.setState({ [name]: value })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const data = {
            message: this.state.message,
            date: new Date(),
            type: 'SENT'
        }
        this.setState({ message: '' }, this.scrollToBottom)
        this.props.dispatch(sendMessage(data))
    }

    render() {
        const { message } = this.state
        return (
            <form>
                <div className="msg-input">
                    <input type="text" name="message" placeholder="Enter Your Message" value={message} onChange={this.handleChange} />
                </div>
                <div className="msg-send-button">
                    <input type="submit" value="SEND" onClick={this.handleSubmit} />
                </div>
            </form>
        )
    }
}

export default connect()(MessageForm)