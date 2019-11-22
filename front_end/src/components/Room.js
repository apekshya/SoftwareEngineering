import React from 'react'; 
import '../App.css';
import logo from './au.png';
import fire from './fire';
class Room extends React.Component {
  constructor(props,context){
    super(props,context)
  this.changeMessage = this.changeMessage.bind(this)
  this.sendMessage = this.sendMessage.bind(this)
  this.state = {
    message:'',
    messages: []
  }
}
componentDidMount(){
  console.log('componentDidMount')
  fire.database().ref('messages/').on('value',(snapshot)=>{
    const currentMessages = snapshot.val()
    if (currentMessages!= null){
      this.setState({
        messages:currentMessages
      })
    }
  })
}
changeMessage(event){
  this.setState({
    message: event.target.value
  })
}
sendMessage(event){
  const nextMessage = {
    id:this.state.messages.length,
    text:this.state.message
  }
 fire.database().ref('messages/'+nextMessage.id).set(nextMessage)
  
}
  render(){
    const currentMessage = this.state.messages.map((message,i) => {
    return (
      <li key = {message.id}>{message.text}</li>
    )
    })
    return(
  <div>
    <img src={logo} alt="Anderson University"></img>
    <ol>
      {currentMessage}
      </ol>
      <input  onChange={this.changeMessage} type="text" placeholder="Message"/>
      <button onClick ={this.sendMessage}>POST</button>
    </div>
  ); 
    }
}

export default Room;
