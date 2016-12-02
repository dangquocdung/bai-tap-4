var Note = React.createClass(
  {
    render:function(){
      return(
        <p>{this.props.children}</p>
      )
    }
  }
);

var List = React.createClass(
  {
    add(){
      this.state.mang.push("NodeJS","ReactJS");
      this.setState(this.state);

    },
    getInitialState(){
      return {mang: ["Hello", "Hi", "KhoaPham"]};
    },
    render:function(){
      return(
        <div>
          <button onClick={this.add}>Them</button>
          {
            this.state.mang.map(function(note, index){
              return <Note key={index}>{note}</Note>
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
