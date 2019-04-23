import React, {Component} from 'react';
import ImageThumbnail from "./ImageThumbnail";
import {Link} from "react-router-dom";
import {getAlbums, getArtist} from "../store/actions/musicActions";
import connect from "react-redux/es/connect/connect";

class AlbumInfo extends Component {

    componentDidMount() {
        const id = this.props.match.params.id;
        this.props.getArtist(id);
        this.props.getAlbums(id);
    }

    getTracks = id => {
      console.log(id);
    };

    render() {
        console.log(this.props.match.params);
        if (this.props.artist) console.log(this.props.artist);
        return (
            <div>
                <div className="column">
                    <Link to="/">Главная</Link>
                    <p className="album_p">Альбомы</p>
                    <div className="one_artist">
                    {this.props.artist ? <div className="artist_thumbnail" key={this.props.artist._id}  onClick={this.getTracks}>
                            <ImageThumbnail image={this.props.artist.image}/>
                            <p>{this.props.artist.name}</p>
                            <p>{this.props.artist.description}</p>
                        </div> : null}
                    </div>
                    {this.props.albums ? this.props.albums.map(item => {
                        return <div className="artist_thumbnail" key={item._id}>
                            <ImageThumbnail image={item.image}/>
                            <p>{item.title}</p>
                            <p>{item.year}-год</p>
                            <Link to={"/track_info/" + item._id}>Трэки</Link>
                        </div>
                    }) : null}
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    artist: state.response.artist,
    albums: state.response.albums,
});

const mapDispatchToProps = dispatch => ({
    getArtist: (id) => dispatch(getArtist(id)),
    getAlbums: (artistId) => dispatch(getAlbums(artistId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AlbumInfo);