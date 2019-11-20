import React, { Component } from 'react';

class MyProfile extends Component {

state = {
    selectedFile: null
    }
fileSelectedHandler = event => {
    this.setState({
        selectedFile: event.target.file[0]
    })
}

fileUploadHandler = () => {
    axios.post('')
}

    render () {
        return (
            <div className="userimg">
                <input type="file" onChange={this.fileSelectedHandler}/>
                <button onClick={this.fileUploadHandler}>Upload</button>
            </div>
        )
    }
}
export default MyProfile;