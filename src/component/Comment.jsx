import React from 'react';
import firebase from "gatsby-plugin-firebase"
import Comment from './Comment'
import { Styled } from "theme-ui"

export default ({slug}) => {
    const [comment, setComment] = React.useState();
    const [name, setName] = React.useState();
    const handlePostComment = e=>{
        e.preventDefault();
        if(comment && name){
            try{
                firebase.firestore().collection('comments').add({
                    comment,
                    name,
                    createdOn: new Date(),
                    slug: slug
                })
                setComment('')
            }catch(err){

            }
        }
    }
    return <form>
        <Styled.h4>
        Name
        <input style={{width:'100%'}}  value={name} onChange={e=>setName(e.target.value)}/>
        </Styled.h4>
        <Styled.h4>
            Comment
        <textarea  style={{width:'100%'}} rows={4} value={comment} onChange={e=>setComment(e.target.value)}></textarea>
        </Styled.h4>
        <button onClick={handlePostComment}>POST</button>
    </form>
}