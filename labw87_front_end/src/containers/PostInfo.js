import React, {Component} from 'react';
import {Link, NavLink} from "react-router-dom";
//import {getAlbums, getArtist} from "../store/actions/postActions";
import connect from "react-redux/es/connect/connect";
import ImgThumbnail from "../components/UI/ImgThumbnail";
import FormElement from "../components/UI/FormElement";

class PostInfo extends Component {

    state = {
      comment: '',
    };

    inputChangeHandler = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    };

    submitFormHandler = e => {
        e.preventDefault();
        //this.props.loginUser({...this.state});
        console.log('this is comment submit')
    };

    getFieldError = fieldName => {
        return this.props.error && this.props.error.errors && this.props.error.errors[fieldName] && this.props.error.errors[fieldName].message;
    };

    render() {

        return (
            <div>
                <div className="post_thumbnail">
                    <ImgThumbnail image={this.props}/>
                    <div>
                        Time
                    </div>
                    <div>
                        Author
                    </div>
                    <div className="post_text_div">
                        Title
                    </div>
                    <div className="post_text_div">
                        Description
                    </div>
                </div>
                <div>
                    <p>Comments</p>
                    <div className="comments_list_div">
                        <span>This is time</span>
                        <span>This is author</span>
                        <p className="comments_list_p">This is comments text</p>
                    </div>
                    <div className="comment_form_div">
                        <form  onSubmit={this.submitFormHandler} className="comment_form">
                            <label htmlFor="description">Comment</label>
                            <textarea
                                className="textarea"
                                id="comment"
                                name="comment"
                                value={this.state.comment}
                                onChange={this.inputChangeHandler}
                                style={this.props.error ? {"background": "red"} : null} />
                            <button type="submit">Comment</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    // artist: state.response.artist,
    // albums: state.response.albums,
});

const mapDispatchToProps = dispatch => ({
    // getArtist: (id) => dispatch(getArtist(id)),
    // getAlbums: (artistId) => dispatch(getAlbums(artistId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PostInfo);