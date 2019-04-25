import React, {Component} from 'react';
import '../App.css'
import {getAlbums, getPosts, getTracks} from "../store/actions/postActions";
import connect from "react-redux/es/connect/connect";
import ImgThumbnail from "../components/UI/ImgThumbnail";
import {Link, NavLink} from "react-router-dom";


class Main extends Component {

    // componentDidMount() {
    //     this.props.getArtists();
    // }

    getAlbums = e => {
      console.log(e.target);
    };

    selectChangeHandler = e => {
        this.setState({
            [e.target.id]: e.target.value
        });
    };

    inputChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    };

    fileChangeHandler = event => {
        this.setState({
            [event.target.name]: event.target.files[0]
        });
    };

    render() {
        return (
            <div className="App">
                <div className="post_thumbnail">
                    <ImgThumbnail image={this.props}/>
                    <div>
                        Time
                    </div>
                    <div>
                        Author
                    </div>
                    <div className="post_text_div"><NavLink to="/post_info">Post Title</NavLink></div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    // artists: state.response.artists,
    // albums: state.response.albums,
    // tracks: state.response.tracks,
    // state: state.response
});

const mapDispatchToProps = dispatch => ({
    // getArtists: () => dispatch(getPosts()),
    // getAlbums: () => dispatch(getAlbums()),
    // getTracks: () => dispatch(getTracks()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);