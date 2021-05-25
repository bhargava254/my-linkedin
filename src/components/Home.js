import styled from 'styled-components'

import LeftSide from './../components/LeftSide'
import RightSide from './../components/RightSide'
import Main from './../components/Main'
import React from 'react'
 import {Redirect} from 'react-router-dom';
 import {connect} from 'react-redux'

const Home=(props) =>{
    return(
        <Container>
              {!props.user && <Redirect to="/" />}  
            <Section>
                <h5>
                    <a>Hiring ina hurry ? -</a>  </h5>
                    <p> Find talented pros in recorrd time with 
                        Upwork and keep business Moving
                    </p>
                   
            </Section>
            <LayOut>
               <LeftSide />
               <Main />
               <RightSide />
              
            </LayOut>
        </Container>
    )
}

const Container=styled.div`
padding-top:70px;
max-width:100%;
`;

const Content=styled.div`
max-width:1128px;
margin-left:auto;
margin-right:auto;

`;

const Section=styled.section`
min-height:50px;
padding:16px 0;
box-sizing:content-box;
text-align:center;
text-decoration:underline;
 justify-content: center;
 display:flex;
h5{
    color:#0a66c2;
    font-size:14px;
    a{
        font-weight:700;
    }
}
p{
    font-size:14px;
    color:#434549;
    padding-top: 23px;
    padding-left:10px;
    font-weight:600;
}
@media(max-width:768px){
    flex-direction: column;
    padding:0 5px;

p{
    padding-top:0px;
    padding-left:0px;
}
}
`;

const LayOut=styled.div`
display: grid;
grid-template-areas: 'leftside main rightside';
grid-template-columns: minmax(0,5fr) minmax(0.12fr) 
minmax(300px,7fr);
column-gap: 25px;
row-gap: 25px;
grid-template-rows: auto;
margin:25px 0;
@media(max-width:768px){
    display:flex;
    flex-direction: column;
    padding: 0px 5px; 
}
`;

const mapStateToProps=(state)=>{
    return{
        user:state.userState.user,
    };
};


export default connect(mapStateToProps)(Home)