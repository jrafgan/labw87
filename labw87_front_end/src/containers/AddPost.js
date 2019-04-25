import React, {Fragment, Component} from 'react';
import FormElement from "../components/UI/FormElement";
import {loginUser} from "../store/actions/usersActions";
import {connect} from "react-redux";

class NewPost extends Component {

    state = {
        title: '',
        description: '',
        image: null,
    };

    inputChangeHandler = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    };

    submitFormHandler = e => {
        e.preventDefault();
        this.props.loginUser({...this.state});
    };

    getFieldError = fieldName => {
        return this.props.error && this.props.error.errors && this.props.error.errors[fieldName] && this.props.error.errors[fieldName].message;
    };

    fileChangeHandler = event => {
        this.setState({
            [event.target.name]: event.target.files[0]
        });
    };

    render() {
        return (
            <div className="main_comment_div">
                <div className="comment_div">
                    <h2>Post</h2>
                    {this.props.error &&
                    <div className="alert">
                        {this.props.error.error || this.props.error.global}
                    </div>}
                    <form onSubmit={this.submitFormHandler} className="form">
                        <FormElement
                            propertyName="title"
                            title="Title"
                            type="text"
                            value={this.state.title}
                            onChange={this.inputChangeHandler}
                            placeholder="Enter username you registered with"
                            autocomplete="current-username"
                            error={this.getFieldError('title')}
                        />
                        <label htmlFor="description">Description</label>
                        <textarea
                            className="textarea"
                            id="description"
                            name="description"
                            value={this.state.description}
                            onChange={this.inputChangeHandler}
                            style={this.props.error ? {"background": "red"} : null} />

                        <label htmlFor="image">Image</label>
                        <input
                            type="file"
                            name="image" id="image"
                            onChange={this.fileChangeHandler}
                        />

                        <div>
                            <button type="submit">Post</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    error: state.users.loginError,
});

const mapDispatchToProps = dispatch => ({
    loginUser: userData => dispatch(loginUser(userData))
});

export default connect(mapStateToProps, mapDispatchToProps)(NewPost);