import React, { Component } from 'react';
import axios from 'axios';

class HttpComp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
    };
  }
  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(res => {
      console.log(res)

      this.setState({posts: res.data})
    })
    .catch(err => {
      console.log(err)
    })
  }
  render() {
    const { posts } = this.state
    return (
    <div>
      Http post
      {
        posts.length ?
        posts.map(p =>
          <div key={p.id}><b>Title:</b> {p.title} </div>) : null
      }
    </div>);
  }
}
export default HttpComp;