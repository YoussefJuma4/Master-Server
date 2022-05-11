import React from 'react';
import AceEditor from 'react-ace';
// https://securingsincity.github.io/react-ace/


import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/ext-language_tools";
import "ace-builds/src-noconflict/theme-monokai";



class CodeEditor extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            text:"",
            client:null,
            roomName:props.roomName
        };
    }
    // onChange(newValue){
    //     this.setState({text: newValue});
    //     this.sendText(newValue)
    // }
    // componentDidMount() {
    //     let self = this;
    //     let room = this.state.roomName;
    //     this.state.client = new WebSocket(`wss://localhost:5001/ws?name=${room}`);
        
        // this.state.client.onmessage = function(event) {
        //     var x = event.data;
        //     var z = x.split('\x00');
        //     var y = z[0];
        //     self.updateText(y);
        // };
    // }
    // updateText = (key) => {
    //     this.setState({text: key})
    // }

    // sendText = (key) => {
    //     ;
    // }

    render(){
    return(
        <div className='codeeditor'>
             <AceEditor
                placeholder="Placeholder Text"
                mode="javascript"
                theme="monokai"
                name="blah2"
                // onLoad={this.onLoad}
                // onChange={(e) => this.onChange(e)}
                fontSize={14}
                showPrintMargin={true}
                showGutter={true}
                highlightActiveLine={true}
                value={this.state.text}
                setOptions={{
                    enableBasicAutocompletion: false,
                    enableLiveAutocompletion: false,
                    enableSnippets: false,
                    showLineNumbers: true,
                    tabSize: 2,
                }}
                width='600px'
            />
         </div>
        );
        }
}
export default CodeEditor;