var Note = React.createClass(
  {
    render:function(){
      return(
        <div>
          <img src={this.props.src} />
          <p>{this.props.children}</p>
        </div>
      )
    }
  }
);

var List = React.createClass(
  {
    add(){
      this.state.mang.unshift({srcHinh: "images/1.jpg", noidung: "1"},{srcHinh: "images/2.jpg", noidung: "2"});
      this.setState(this.state);

    },
    getInitialState(){
      return {mang: [
                      {srcHinh: "images/1.jpg", noidung: "1"},
                      {srcHinh: "images/2.jpg", noidung: "2"},
                      {srcHinh: "images/3.jpg", noidung: "3"},
                      {srcHinh: "images/4.jpg", noidung: "4"},
                      {srcHinh: "images/5.jpg", noidung: "5"}
                    ]};
    },
    render:function(){
      return(
        <div>
          <button onClick={this.add}>Them</button>
          {
            this.state.mang.map(function(note, index){
              return <Note key={index} src={note.srcHinh}>{note.noidung}</Note>
            })
          }
        </div>

      )
    }
  }
);

ReactDOM.render(

  <div>

    <List />


  </div>
  , document.getElementById("root")
);
