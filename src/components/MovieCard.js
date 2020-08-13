import React from 'react';
import { addFavourite , removeFromFavourites} from '../actions';
import { connect } from 'react-redux';

class MovieCard extends React.Component {

  handleFavouriteClick = () => {
    const { movie } = this.props;
    this.props.dispatch(addFavourite(movie));
  }

  handleUnfavouriteClick = () => {
    const { movie } = this.props;
    this.props.dispatch(removeFromFavourites(movie));
  }
   
   render(){
    const { movie,isFavourite } = this.props;
      return (
        <div className="movie-card">
            <div className="left">
               <img alt="movie-poster" src={movie.Poster} />               
            </div>
            <div className="right">
                <div className="title">{movie.Title}</div>
                <div className="plot">{movie.Plot}</div>
                <div className="footer">
                    <div className="rating">{movie.imdbRating}</div>
                    {
                      isFavourite
                      ? <button className="unfavourite-btn" onClick={this.handleUnfavouriteClick}>Unfavourite</button>
                      : <button className="favourite-btn" onClick={this.handleFavouriteClick}>Favourite</button>
                    }
                </div>
            </div>
        </div>
      );
   }
  
}

function mapStateToProps(state){
  return{
   //as we just need dispatch property 
   // therfore we return empty object as dispatch is given to us by default
    
  };
}

export default connect(mapStateToProps)(MovieCard);


