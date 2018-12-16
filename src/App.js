import React, { Component } from 'react'
import EmojiPicker from 'emoji-picker-react' 
import JSEMOJI from 'emoji-js'
import './App.css'

class App extends Component {

  state = {
    text: '',
    showModal: false 
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  toggleModal = () => {
    this.setState(prevState => ({ showModal: !prevState.showModal }))
  }


  addEmoji = emojiName => {
    const jsemoji = new JSEMOJI() 
    jsemoji.img_set = 'emojione' 
    jsemoji.img_sets.emojione.path = 'https://cdn.jsdelivr.net/emojione/assets/3.0/png/32/'
    jsemoji.supports_css = false 
    jsemoji.allow_native = false  
    jsemoji.replace_mode = 'unified' 
    jsemoji.text_mode = true 
    jsemoji.include_title = true 
    jsemoji.replace_unified(`:${emojiName}:`)
    jsemoji.replace_colons(`:${emojiName}:`)
    let emoji = String.fromCodePoint(parseInt(emojiName, 16))
    this.setState({ text: this.state.text + emoji })
  }

  render() {
    return (
      <div className="App">
        <p>{this.state.text}</p>
        <input 
          type='text'
          name='text'
          value={ this.state.text }
          onChange={ this.onChange }
          placeholder='add some text'  />
        <i className="far fa-smile-wink icon" onClick={this.toggleModal} />
        { this.state.showModal ? <div className='Modal'>
          <EmojiPicker onEmojiClick={this.addEmoji} />
        </div>
        : null }
      </div>
    );
  }
}

export default App;

    //  jsemoji.img_sets.apple.path = 'http://my-cdn.com/emoji-apple-64/';
    //  jsemoji.img_sets.apple.sheet = 'http://my-cdn.com/emoji-apple-sheet-64.png';
    //  jsemoji.use_sheet = true 
    // jsemoji.init_env()
    // alert(jsemoji.replace_mode)
    // jsemoji.replace_mode = 'unified'
    // jsemoji.allow_native = false 
