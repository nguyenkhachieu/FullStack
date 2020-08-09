import React, { useState } from 'react';
import {
  Container,
  ListGroup,
  ListGroupItem,
  Button
} from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import {v4 as uuid} from 'uuid'

const ShoppingList = (props) => {
    const [ items, setItems ] = useState([
        { id: uuid(), name: 'Eggs' },
        { id: uuid(), name: 'Milk' },
        { id: uuid(), name: 'Steak' },
        { id: uuid(), name: 'Water' },
    ])
    console.log('items', items)
  return (
    <div>
      <Container>
          <Button color="dark" style={{ marginBottom: '20px' }} onClick={() => {
              const name = prompt('Enter Item');
              if (name) {
                setItems([...items, { id: uuid(), name: name }])
              }
          }}>Add Item</Button>
          <ListGroup>
              <TransitionGroup className="shopping-list">
                  {items && items.map((data) => {
                      return (
                        <CSSTransition key={data.id} timeout={500} classNames="fade">
                          <ListGroupItem>
                              <Button
                                className="remove-btn"
                                color="danger"
                                size="sm"
                                onClick={() => {
                                  setItems(items.filter(item => {
                                      return item.id !== data.id
                                  }));
                                }}
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

export default ShoppingList;