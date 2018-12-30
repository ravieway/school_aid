import React from 'react'
import Dropzone from 'react-dropzone'

class SendImage extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      imageLoaded: false,
      accept: null
    }
  }

  setPic = (acceptedFile) => {
    this.setState({
      imageLoaded: true,
      accept: acceptedFile
    })
    this.props.getImage(acceptedFile);
  }

   onDrop = (acceptedFiles, rejectedFiles) => {
     if(acceptedFiles){
        var reader = new FileReader();
        reader.readAsDataURL(acceptedFiles[0]); 
        reader.onloadend = () => {
          let base64data = reader.result;
          this.setPic(base64data);
        }
     }
   }

   render() {
    if(this.state.imageLoaded){
      return <img height="300px" alt="not_loaded" src={this.state.accept}/>
    }else{
      return (
        <Dropzone onDrop={this.onDrop} accept ="image/jpeg,image/png">
          {({getRootProps, getInputProps, isDragActive}) => {
            return (
              <div
                {...getRootProps()}
                
              >
                <input {...getInputProps()} />
                {
                  isDragActive ?
                    <p>Drop files here...</p> :
                    <p>Try dropping some files here, or click to select files to upload.</p>
                }
              </div>
            )
          }}
        </Dropzone>
      );
    }
  }
}

export default SendImage;
