import styled from 'styled-components'
import User from './../assests/user.svg'
import Photos from '@material-ui/icons/Photo';
import Events from '@material-ui/icons/Event';
import VideoCalls from '@material-ui/icons/VideoCall';
import Assignments from '@material-ui/icons/Assignment';
import Shared from './../assests/shared.jpg';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAltTwoTone';
import PanToolIcon from '@material-ui/icons/PanToolTwoTone';
import CommentIcon from '@material-ui/icons/Comment';
import ShareIcon from '@material-ui/icons/Share';
import SendIcon from '@material-ui/icons/Send';
import PostModal from './PostModal'
import {useState,useEffect} from 'react';
import {connect} from 'react-redux'
import ReactPlayer from 'react-player'

import {getArticlesAPI} from './../actions/index'

const Main=(props)=>{
const [showModal,setShowModal]=useState('close');


useEffect(() => {
    props.getArticles();
},[]);
    
const handleClick=(e)=>{
    e.preventDefault();
    if(e.target !==e.currentTarget){
        return;
    }

switch(showModal) {
    case 'open':
        setShowModal('close');
        break;
        case 'close':
            setShowModal('open');
            break;
            default:
                setShowModal("close");
                break;
}

};








    return(
        <>
        {

        props.articles.length===0 ? (<p>there is no articles for you </p>) :
       
(
        <Container>
<ShareBox>
    

<div>
    {props.user && props.user.photoURL ? (
        <img src={props.user.photoURL} />
):(
<img src={User}  alt=''/>
)

}
    <button onClick={handleClick} disabled ={props.loading ? true :false}>Start a post</button>
</div>
<div>
    <button>
      <Photos />
        <span>Photo</span>
    </button>

     <button>
        <VideoCalls />
        <span>Video</span>
    </button>


    <button>
<Events />
<span>Event</span>
    </button>

<button>
    <Assignments />
<span>Write Article</span>
</button> 


</div>
</ShareBox>
       
<Content>
    {
        props.loading && <i className="fas fa-spinner fa-spin" />
    } 


  {props.articles.length>0  && props.articles.map((article,key)=>(  
    
           <Article key={key}>
            <SharedActor>
                <a>   
                <img src={article.actor.image} />
                <div>
                    <span>{article.actor.title}</span>
                    <span> {article.actor.description}</span>
                    <span> {article.actor.date.toDate().toLocaleDateString()}</span>
                </div>
                </a>
                <button>
                <i class="fal fa-ellipsis-h"></i>
                </button>
            </SharedActor>
            <Description>
                {article.description}
            </Description>
            <SharedImg>
                <a>
           {
               !article.sharedImg && article.video ? (<ReactPlayer width={'100%'} url={article.video} /> ):
               
               ( article.sharedImg && <img src={article.sharedImg} />)
           } 
           


         
                </a>
            </SharedImg>

<SocialCounts>
    <li>
        <button>
            <ThumbUpAltIcon /> 
            <PanToolIcon />
            <span>75</span>
        </button>
    </li>
    <li>
        <a>comments</a>
    </li>

</SocialCounts>
<SocialActions>     
<button>
    <ThumbUpAltIcon />
    <span>Like</span>
</button>
<button>
    <CommentIcon />
    <span>Comments</span>
</button>
<button>
    <ShareIcon />
    <span>Share</span>
</button>
<button>
    <SendIcon />
    <span>Send</span>
    </button>
           
    </SocialActions>
           </Article>
           
   ) )} 
           
           </Content>
        <PostModal  showModal={showModal} handleClick={handleClick} /> 


        </Container>
)}
 </>   
    
    
    );
};

const Container=styled.div`
grid-area: main;
`;


const CommonCard=styled.div`
text-align:center;
overflow:hidden;
margin-bottom:8px;
background-color: rgba;
border-radius:5px;
position: relative;
border:none;
box-shadow: 0 0 0 1px rgb(0 0 0/15%),0 0 0 rgb(0 0 0/20%);
`;

const ShareBox=styled(CommonCard)`
display:flex;
flex-direction: column;
color:#958b7b;
margin: 0 0 8px;
background:white;
div{
    button{
        outline:none;
        color:rgba(0,0,0, 0.6);
        line-height:1.5;
        min-height:40px;
        background:transparent;
        border:none;
        display:flex;
        align-items: center;
        font-weight:600;
    }
&:first-child{
    display:flex;
    align-items:center;
    padding: 0px 26px 0px 26px;
img{
    width:40px;
    border-radius: 50%;
    margin-right:8px;
}
button{
    margin: 4px 0px;
    flex-grow: 1;
    border-radius: 35px;
    padding-left:14px;
    border:1px solid rgba(0,0,0, 0.15);
    background-color: white;
    text-align:left;
}

}
&:nth-child(2){
    display:flex;
    flex-wrap:wrap;
    justify-content: space-around;
    padding-bottom: 4px;
    button{
        img{
            margin:0 4px 0 -2px;
        }
        span{
            color:#78b6f9;
        }
    }
}
}
`;

const Article=styled(CommonCard)`
padding:0px;
margin: 0 0 8px;
overflow: hidden;
`;

const SharedActor=styled.div`
padding-right:40px;
flex-wrap:nowrap;
padding: 12px 16px 0;
margin-bottom:8px;
align-items: center;
display:flex;
a{
    margin-right:12px;
    flex-grow:1;
    overflow:hidden;
    display:flex;
    text-decoration:none;
    img{
        width:48px;
        height:48px;
    }
    &>div{
        display:flex;
        flex-direction: column;
        flex-grow: 1;
        flex-basis:0;
        margin-left: 8px;
        overflow:hidden;
        span{
            text-align: left;
            &:first-child{
                font-size: 14px;
                font-weight: 700;
                color:rgba(0,0,0,1);
            }
            &:nth-child(n+1){
                font-size:12px;
                color:rgba(0,0,0,0.6);
            }
        }
    }
}
button{
    position:absolute;
    right:12px;
    top:0px;
    background:transparent;
border:none;
outline:none;
}

`;


const Description=styled.div`
padding:0 16px;
overflow: hidden;
color:rgba(0,0,0,0.9);
font-size:14px;
text-align:left;
`;

const SharedImg=styled.div`
margin-top:8px;
width:100%;
display: block;
position:relative;
background-color: #f9fafb;
img{
    object-fit: contain;
    width:100%;
    height:100%;
    }
`;

const SocialCounts=styled.ul`
line-height:1.3;
display:flex;
align-items:flex-start;
overflow:auto;
padding: 8px 0;
/* border-bottom: 1px solid #e9e54f; */
list-style:none;
li{
    margin-right:5px;
    font-size:12px;
    button{
        display:flex;
    }
}
`;

const SocialActions=styled.div`
align-items:center;
display:flex;
justify-content: flex-start;
margin:0px;
min-height:40px;
padding: 4px 8px;
button{
    display:inline-flex;
    align-items: center;
    padding:8px;
    color:#0a66c2;
    border:none;
    @media(min-height:768px){
span{
    margin-left:8px;
}
    }
}
`;

const Content=styled.div`
text-align:center;
&>i {
    width:30px;
}
`;

const mapStateToProps=(state)=>{
    return{
        loading:state.articleState.loading,
        user:state.userState.user,
         articles:state.articleState.articles, 
    };
}
const mapDispatchToProps=(dispatch)=>({
 getArticles: ()=>dispatch(getArticlesAPI()),
});



export default connect(mapStateToProps,mapDispatchToProps)(Main)