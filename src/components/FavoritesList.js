import React, { Component } from 'react';
import { connect } from 'react-redux';
import RecipeItem from './RecipeItem';
import { Link } from 'react-router-dom';

class FavoritesList extends Component {
  render() {
    return (
      <div>
        <div>
          <h4 className="link">
            <Link to="/"> Home </Link>
          </h4>
          <h4>Favorite Recipes</h4>
        </div>
        <ul>
          {this.props.favoriteRecipes.map((recipe, index) => {
            return (
              <RecipeItem key={index} favoriteButton={false} recipe={recipe} />
            );
          })}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { favoriteRecipes: state.favoriteRecipes };
}

export default connect(
  mapStateToProps,
  null
)(FavoritesList);
