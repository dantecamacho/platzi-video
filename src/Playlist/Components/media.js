import React,{PureComponent} from 'react'
import './media.css'
import PropTypes from 'prop-types'

class Media extends PureComponent{
    state={
        author:'Dante Camacho'
    }
    
    //  constructor(props){
    //      super(props)
    //      this.handleClick=this.handleClick.bind(this)
    //      this.state={
    //          author:props.author
    //      }
    //  }
    // handleClick=(event)=>{
    //     // console.log(this.props.image)
    //     // this.setState({
    //     //     author:'Jaen Gonzalez'
    //     // })
    // }
    render(){
        return (
        <div className="Media" onClick={this.props.handleClick}>
            <div className="Media-cover">
                <img
                className="Media-image"
                src={this.props.cover}
                alt=":)"
                width={240}                
                height={160}                
                />
                <h3 className="Media-title">{this.props.title}</h3>
                <p className="Media-author">{this.props.author}</p>
            </div>
        </div>
        )
    }
}
Media.propTypes={
    cover: PropTypes.string,
    title: PropTypes.string.isRequired,  
    author: PropTypes.string,
    type: PropTypes.oneOf(['video','audio']),
}
export default Media;


