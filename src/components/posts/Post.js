import React from 'react';
import {Link } from 'react-navi';
import {useTheme} from '../../hooks';


const Posts = ({ id, title, content,username, short=false}) => {
    
    const {secondaryColor} = useTheme();
    let processedContent = content;
    if(short && content.length>30){
        processedContent = processedContent.substring(0,30)+'...';
    }

    return <div>
        <h3 style={{color:secondaryColor}}>{title}</h3>
        <div>{processedContent}</div>
        {short && <div>
            <br/>
            <Link href={`/posts/${id}`}>View Full Post </Link>
        </div>}
        <br/>
        <i>written by <b>{username}</b></i>
        <hr/>
    </div>
}

export default React.memo(Posts);