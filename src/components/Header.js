import styled from 'styled-components'
import HomeLogo from './../assests/linked -logo.svg'
import SearchIcon from '@material-ui/icons/Search';
import NavHome from './../assests/nav-home.svg'
import NavNetwork from './../assests/nav-network.svg'
import NavJobs from './../assests/nav-jobs.svg'
import NavNotifi from './../assests/nav-notifications.svg'
import NavMessage from './../assests/nav-messaging.svg'
import NavWork from './../assests/nav-work.svg'
import UserImage from './../assests/user.svg'
import DownIcon from './../assests/down-icon.svg'
import {connect} from 'react-redux'; 


import {signOutAPI} from './../actions/index'
const Header=(props)=>{
    return(
        <div>
            <Container>
                
                <Content>
                    <Logo>
                        <a href='/home'>
                            <img src={HomeLogo} />
                        </a>
                    </Logo>
                    <Search>
                        <div>
                            <input type='text' placeholder='Search' />
                        </div>
                        <SearchImage>    
                        <SearchIcon>

                        </SearchIcon>
                        </SearchImage>
                    </Search>
                    <Nav>
                        <NavListWrap>   
                        <NavList className='active'>
<a>
<img src={NavHome} />
<span>Home</span>
</a>
                        </NavList>
                        <NavList>
<a>
<img src={NavNetwork} />
<span>My Network</span>
</a>
                        </NavList>
                        <NavList>
<a>
<img src={NavJobs} />
<span>Jobs</span>
</a>
                        </NavList>
                        <NavList>
<a>
<img src={NavMessage} />
<span>Messaging</span>
</a>
                        </NavList>
                        <NavList>
<a>
<img src={NavNotifi} />
<span>Notifications</span>
</a>
                        </NavList>

                        <User>
<a>
    {props.user && props.user.photoURL ?
    (<img src={props.user.photoURL} alt='' />):
( <img src={UserImage} />) }
<span>Me</span>
<img src={DownIcon} />    
</a>
<SignOut onClick={()=>props.signOut()}>
    <a>Sign Out</a>
</SignOut>
                        </User>
                        <Work>

<a>
    <img src={NavWork} />
    <span>Work</span>
    <img src={DownIcon} />
</a>

                        </Work>
                        </NavListWrap>
                        </Nav>
               
                </Content>
            </Container>
        </div>
    )
}

const Container= styled.div`
background-color: white;
border-bottom: 1px solid rgba(0,0,0,0.08);
left: 0px;
padding: 0 24px;
position: fixed;
top: 0px;
width: 100vw;
z-index:100;
`;
const Content=styled.div`
display: flex;
align-items: center;
margin: 0 auto;
min-height:100px;
max-width:1120px;
font-size: 0px;
`;

const Search =styled.div`
opacity: 1;
flex-grow: 1;
position: relative;
div{
    max-width:280px;
    input{
        border:none;
        box-shadow:none;
        background-color: #eef3f8;
        border-radius: 2px;
        color:rgba(0,0,0, 0.9);
        width: 218px;
        padding: 0 8px 0 40px;
        line-height: 1.75;
        font-weight: 400;
        font-size: 14px;
        height:34px;
        border-color:#dce6f1;
        vertical-align: text-top;
    }
    }
`;

const Logo =styled.div``;

const SearchImage=styled.div`
width:40px;
position: absolute;
z-index:1;
top:10px;
left:2px;
border-radius:0 2px 2px 0;
margin:0px;
pointer-events: none;
display:flex;
justify-content: center;
transition:background-color 0.14s;
`;


const Nav=styled.nav`
margin-left: auto;
display: block;
@media(max-width:768px){
    position: fixed;
    left:0px;
    bottom:0px;
    background:white;
    width:100%
}
`;

const NavListWrap=styled.ul`
display:flex;
flex-wrap: nowrap;
list-style-type:none ;

.active{
    span:after{
        content:'';
        transform:scaleX(1);
        border-bottom:2px solid white;
        bottom:0px;
        left:0px;
        position: absolute;
        transition:transform 0.2s ease-in-out;
        width:100%;
        border-color:rgba(0,0,0,0.4);
    }
    }

`;

const NavList=styled.li`
display:flex;
align-items:center;
a{
    align-items:center;
    background: transparent;
    display: flex;
    flex-direction: column;
    font-size: 12px;
    font-weight:400;
    justify-content: center;
    line-height: 1.5;
     min-height: 42px;
     min-width:80px;
     position:relative;
     text-decoration: none;
span{
    color:rgba(0,0,0,0.6);
    display: flex;
    align-items: center;

}
 @media(max-width:768px){
    min-width:70px;
} 
}

&:hover,&:active{
    a{
        span{
            color:rgba(0,0,0,0.9);
        }
    }
}
`;
const SignOut=styled.div`
position:absolute;
top:45px;
background:white;
border-radius:0 0  5px 5px;
width:100px;
height:40px;
font-size:16px;
transition-duration:167ms;
text-align:center;
display: none;
`;

const User=styled(NavList)`

a>svg{
    width:24px;
    border-radius:50%;
}
a>img{
    width:24px;
    height:24px;
    border-radius:50%;
}
span{
    display: flex;
    align-items:center;
}
&:hover{
    ${SignOut}{
        align-items:center;
        display:flex;
        justify-content:center;
    }
}

`;
const Work=styled(User)`
border-left:1px solid rgba(0,0,0,0.08);
`;

const mapStateToProps=(state) =>{
    return{
        user:state.userState.user,
};
};

const mapDispatchToProps=(dispatch) =>({
    signOut:()=>dispatch(signOutAPI()),
});

export default connect(mapStateToProps,mapDispatchToProps) 
(Header);