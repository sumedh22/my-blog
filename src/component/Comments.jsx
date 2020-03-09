import React from 'react';
import Comment from './Comment'
import { Styled } from "theme-ui"
import firebase from "gatsby-plugin-firebase"
import TimeAgo from 'react-timeago'

export default ({slug}) => {
    const [comments, setComments] = React.useState([]);

    React.useEffect(() => {
        firebase.firestore().collection('comments').where('slug',"==",slug).orderBy('createdOn')
        .onSnapshot(snapshot => {
            const res = [];
            snapshot.forEach(d => {
                res.push({ id: d.id, ...d.data() })
            });
            setComments(res)
        })
      }, [slug])

    return <Styled.ul style={{ listStyle: 'none' , margin:0}}>
        {comments.map(com => {
            return <Styled.li style={{boxShadow:'0px 0px 6px -2px', padding:'1em'}} key={com.id}>
                
                <div style={{fontSize:'small'}}>{com.name}</div>
                <TimeAgo live={false} style={{fontSize:'xx-small'}} date={com.createdOn.toDate()} />
                <Styled.p>{com.comment}</Styled.p>
            </Styled.li>
        })}
        <Styled.li>
            <Comment slug={slug}/>
        </Styled.li>
    </Styled.ul>
}