import React, { useContext, useState, Component } from 'react';
import context from 'react-bootstrap/esm/AccordionContext';
import styled from "styled-components";
import Header from './header';
import counterContext from '../counterContext';
const Info = styled.div`
    opacity: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.2);
    z-index: 3;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.5s ease;
    cursor: pointer;
  `;

const Container = styled.div`
    flex: 1;
    margin: 5px;
    min-width: 280px;
    height: 350px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f5fbfd;
    position: relative;
  
    &:hover ${Info}{
      opacity: 1;
    }
  `;

const Circle = styled.div`
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background-color: white;
    position: absolute;
  `;

const Image = styled.img`
    height: 75%;
    z-index: 2;
  `;

const Icon = styled.div`

   color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
    transition: all 0.5s ease;
    &:hover {
     color:white;
      transform: scale(1.1);
    }
  `;

const Product = ({ item }) => {
  const { counter, increment } = useContext(counterContext)
//console.log(item);
  return (
    <Container>
      <Circle />
      <Image src={item.image} />
      <Info>
        <Icon>
          <div onClick={increment}>Add To Cart</div>
        </Icon>
      </Info>
    </Container>
  );
};

export default Product;
