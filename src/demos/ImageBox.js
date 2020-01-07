import React from 'react'
class ImageBox extends React.Component {
  render () {
    let percentage = this.props.file.percentage ? (this.props.file.percentage * 100).toFixed(1) + '%' : '0%';
    return (
      <div id={this.props.file.file.id} className="file-item thumbnail">
        <img alt={this.props.file.file.name} src={this.props.file.thumbSrc}></img>
        <div className="info">{this.props.file.file.name}</div>
        <div className="progress">
          <div className="progress-bar" style={{ width: percentage }}>
            <div className="progress-value">{percentage} </div>
          </div>
        </div>
      </div>
    )
  }
}
export default ImageBox;