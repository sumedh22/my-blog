import React from 'react';
import firebase from "gatsby-plugin-firebase"

export default ({slug}) => {
    const [comment, setComment] = React.useState();
    const [name, setName] = React.useState();
    const handlePostComment = e=>{
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
    return <React.Fragment>
        <input style={{width:'100%'}}  value={name} onChange={e=>setName(e.target.value)}/>
        <textarea style={{width:'100%'}} rows={4} value={comment} onChange={e=>setComment(e.target.value)}></textarea>
        <button onClick={handlePostComment}>post</button>
    </React.Fragment>
}