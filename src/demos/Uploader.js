import React from 'react'
import Script from 'react-load-script'
import ImageBox from './ImageBox';

class Uploader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      uploader: null,
      fileList: [],
      loadWebuploader: false
    }
  }
  handleScriptLoad () {
    let uploader = window.WebUploader.create({

      // swf文件路径
      swf: '../uploader/staticUploader.swf',

      // 文件接收服务端。
      server: "https://www.mocky.io/v2/5cc8019d300000980a055e76",

      // 选择文件的按钮。可选。
      // 内部根据当前运行是创建，可能是input元素，也可能是flash.
      pick: '#picker',

      // 不压缩image, 默认如果是jpeg，文件上传前会压缩一把再上传！
      resize: false
    });

    // 当有文件被添加进队列的时候
    uploader.on('fileQueued', (file) => {
      this.state.uploader.makeThumb(file, (error, src) => {
        if (error) {
          return;
        }
        let fileList = this.state.fileList.slice();
        fileList = fileList.concat({ file: file, thumbSrc: src });
        this.setState({ fileList: fileList });
      }, 120, 120);
    });
    // 文件上传过程中创建进度条实时显示。
    uploader.on('uploadProgress', (file, percentage) => {
      let fileList = this.state.fileList.slice();
      let f = fileList.find(f => {
        return f.file.id === file.id
      });
      f.percentage = percentage;
      this.setState({ fileList: fileList })
    });
    this.setState({ uploader: uploader })
    console.log(uploader)
  }
  handleJqueryLoad = () => {
    this.setState({ loadWebuploader: true })
  }
  startUpload = () => {
    this.state.uploader.upload();
  }
  render () {
    return (
      <div className="WebUploader">
        <Script url="../uploader/jquery.min.js" onLoad={this.handleJqueryLoad.bind(this)} />
        {
          this.state.loadWebuploader ? <Script url="../uploader/webuploader.js" onLoad={this.handleScriptLoad.bind(this)} /> : null
        }
        <div id="uploader" className="wu-example">
          <div id="thelist" className="uploader-list">
            {
              this.state.fileList.map(file =>
                <ImageBox key={file.file.id} file={file} />
              )
            }
          </div>
          <div className="btns">
            <div id="picker">选择文件</div>
            <button id="ctlBtn" className="btn btn-default" onClick={this.startUpload}>开始上传</button>
          </div>
        </div>
      </div>
    )
  }
}
export default Uploader;