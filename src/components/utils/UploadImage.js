import React, { Component } from "react";
import Constant from "../../Constant";
import axios from "axios";


export default class UploadImage extends Component {
  state = {};

  change = (event) => {
    var image = URL.createObjectURL(event.target.files[0]);

    this.setState({ uploading: true });
    const data = new FormData();
    data.append("media", event.target.files[0]);
    let url = Constant.getAPI() + "/media/add";
    axios.post(url, data).then((res) => {
      console.warn(res);
      console.log(res.data.data[0].url)
      if (this.props.uploadGalleryImage !== undefined) { this.props.uploadGalleryImage(res.data.data[0].url, res.data.data[0].id); }
      this.setState({
        uploading: false,
        image: res.data.data.url,
      });
    });
  };

  render() {
    return (
      <div>
        <input
          type="file"
          class="custom-file-input"
          id={this.props.id}
          className="form-control"
          onChange={this.change}
          required
          
          // value={this.props.image || ''}
        />
        {/* <WriteBlog image={this.state.image}/> */}
      </div>
    );
  }
}
