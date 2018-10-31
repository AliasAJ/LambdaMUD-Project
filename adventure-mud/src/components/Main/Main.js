import React from 'react';
import { Button, FormGroup, Input } from "reactstrap";
import styled from 'styled-components';


const MUDContainer = styled.div`
margin 20px;
border: 1px solid black;
background-color: white;
width: 200px;
height: 150px;
`

function MainPage() {

    return (
        <MUDContainer>
            <div className='headline'>title</div>
            <div className='content'>content</div>
            <FormGroup>
                <Input
                    type="password"
                    placeholder="Password"
                    name="password"
                />
                <Button color="success" size="large">
                    Send
          </Button>
            </FormGroup>
        </MUDContainer>
    );
}

export default MainPage;