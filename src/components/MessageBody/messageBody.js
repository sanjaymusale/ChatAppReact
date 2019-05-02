import React from 'react'
import { connect } from 'react-redux'



function MessageBody(props) {
    console.log(props)

    return (
        <div className="msg-container" id="messagesCont">
            <div className="messages">
                <div className="message-list-today">
                    <hr className="hr-text" data-content="TODAY" />
                </div>
                {props.messages.map((msg, i) => {
                    //const date = msg.date.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
                    const date = msg.date.getHours() + ':' + msg.date.getMinutes()

                    if (msg.type === 'SENT') {
                        return (
                            <div key={i + 1} className="message-list-sent ">
                                <div className="message-date-sent">
                                    {date}
                                </div>
                                <div className="message-content-sent tri-right left-top">
                                    <span>{msg.message}</span>
                                </div>
                            </div>
                        )
                    }
                    else {
                        return (
                            <div class="message-list-recieved">
                                <div class="message-date-received">
                                    {date}
                                </div>
                                <div class="message-content-recieved tri-left right-top">
                                    <span>{msg.message}</span>
                                </div>
                            </div>
                        )
                    }

                })}




                {/* <div class="message-list-recieved">
                    <div class="message-date-received">
                        10.57
          </div>
                    <div class="message-content-recieved tri-left right-top">
                        <span>Yo! Send it to my assistant and well review it during the year</span>
                    </div>
                </div>

                <div class="message-list-sent">
                    <div class="message-date-sent">
                        11:03
          </div>
                    <div class="message-content-sent tri-right left-top">
                        <span>But Mark!</span>
                    </div>
                </div>
                <div class="message-list-recieved">
                    <div class="message-content-recieved blocked">
                        <span>You were blocked by user</span>
                    </div>
                </div>*/}
            </div>

        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        messages: state
    }
}
export default connect(mapStateToProps)(MessageBody)