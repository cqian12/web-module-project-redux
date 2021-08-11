import React from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import { removeFave } from '../actions/favesActions';


const FavoriteMovieList = (props) => {
    const favorites = props.favorites;

    const handleRemove = (id) => {
        props.removeFave(id)
    } 
    
    return (<div className="col-xs savedContainer">
        <h5>Favorite Movies</h5>
        {
            favorites.map(movie=>{
                return <div key={movie.id}>
                    <Link className="btn btn-light savedButton" to={`/movies/${movie.id}`}>
                        {movie.title}
                        <span onclick={() => {handleRemove(movie.id)}}><span class="material-icons" >remove_circle</span></span>
                    </Link> 
                </div>
            })
        }
    </div>);
}

const mapStateToProps = (state) => {
    return {
        favorites:state.favesReducer.favorites
    }
}

export default connect(mapStateToProps, {removeFave})(FavoriteMovieList);