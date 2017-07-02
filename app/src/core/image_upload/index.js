import React from 'react'
import {Image} from 'react-bootstrap'

export default class ImageUpload extends React.Component {
  constructor(props) {
    super(props);
    this.state = {file: '',imagePreviewUrl: ''};
  }

  handleSubmit(e) {
    e.preventDefault();
    // TODO: do something with -> this.state.file
    console.log('handle uploading-', this.state.file);
  }

  handleImageChange(e) {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result
      });
    }

    reader.readAsDataURL(file)
  }

  render() {
    let {imagePreviewUrl} = this.state;
    let $imagePreview = null;
    if (imagePreviewUrl) {
      $imagePreview = (<Image src={imagePreviewUrl} circle/>);
    } else {
      $imagePreview = (<Image src="http://appvn.com/public/frontend/img/avatar-default.png" circle />);
    }

    return (
      <div className="previewComponent">
        <div className="imgPreview">
          {$imagePreview}
        </div>
        <br/>
        <form>
          <input className="fileInput" 
            type="file" 
            onChange={(e)=>this.handleImageChange(e)} />
        </form>
      </div>
    )
  }
}