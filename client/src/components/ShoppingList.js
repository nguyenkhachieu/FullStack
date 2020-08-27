import React, { useState, useEffect } from 'react';
import {
  Container,
  ListGroup,
  ListGroupItem,
  Button
} from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import {v4 as uuid} from 'uuid';
import { connect } from 'react-redux';
import PropsTypes from 'prop-types';
import {bindActionCreators} from 'redux';

import * as itemAction from '../actions/itemAction';

const ShoppingList = (props) => {
  const { item } = props;
  useEffect(() => {
    props.actions.getItems();
  },[]);

  const onDeleteClick = (id) => {
    props.actions.deleteItems(id);
  }
  return (
    <div>
      <Container>
        <ListGroup>
            <TransitionGroup className="shopping-list">
                {item && item.items.map((data) => {
                    return (
                      <CSSTransition key={data.id} timeout={500} classNames="fade">
                        <ListGroupItem>
                            <Button
                              className="remove-btn"
                              color="danger"
                              size="sm"
                              onClick={() => onDeleteClick(data.id)}
                              style={{ marginRight: '5px' }}
                            >&times;</Button>
                            {data.name}
                          </ListGroupItem>
                      </CSSTransition>
                    )
                })}
              </TransitionGroup>
          </ListGroup>
      </Container>
    </div>
  );
}

ShoppingList.PropsTypes = {
  getItems: PropsTypes.func.isRequired,
  item: PropsTypes.object.isRequired,
}

function mapDispatchToProps(dispatch) {
  //Whenever FetchWeather is called the result will be passed
  //to all reducers
  return {actions: bindActionCreators(Object.assign({}, itemAction), dispatch)};
}

const mapStateToProps = (state) => {
  return {
    item: state.item
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingList);