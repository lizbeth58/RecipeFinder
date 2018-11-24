import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setRecipes } from '../actions/index';
import {
  Form,
  FormControl,
  FormGroup,
  ControlLabel,
  Button
} from 'react-bootstrap';

class SearchRecipes extends Component {
  constructor() {
    super();

    this.state = {
      ingredients: '',
      dish: ''
    };
  }

  search() {
    const { ingredients, dish } = this.state;
    const { setRecipes } = this.props;

    const cors = 'https://cors-anywhere.herokuapp.com/';
    const url = `${cors}http://www.recipepuppy.com/api/?i=${ingredients}&q=${dish}`;

    fetch(url, { method: 'GET' })
      .then(response => response.json())
      .then(json => setRecipes(json.results));
  }

  render() {
    return (
      <Form className="input" inline>
        <FormGroup>
          <ControlLabel>Ingredients</ControlLabel>{' '}
          <FormControl
            onChange={event =>
              this.setState({ ingredients: event.target.value })
            }
            type="text"
            placeholder="garlic, chicken"
          />
        </FormGroup>{' '}
        <FormGroup>
          <ControlLabel>Dish</ControlLabel>{' '}
          <FormControl
            onChange={event => this.setState({ dish: event.target.value })}
            type="text"
            placeholder="adobo"
          />
        </FormGroup>{' '}
        <Button onClick={() => this.search()}>Submit</Button>
      </Form>
    );
  }
}

//function mapStateToProps() {}

export default connect(
  null,
  { setRecipes }
)(SearchRecipes);
