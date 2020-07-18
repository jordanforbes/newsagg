import React, { useState }from 'react';

const NewsCard=props=>{
    const title = props.data.title
    const author = props.data.author
    const[score,setScore]= useState(0);
    const[color,setColor]= useState("");
    let thisAuthor =""
    if(author == null){
        console.log("anonymous")
        thisAuthor="unknown"
    }else{
        console.log(author)
        thisAuthor = author
    }
    const upVote=e=>{
        setScore(score+1)
        console.log("score",score)
        scoreChecker(e);
    }
    const downVote=e=>{
        setScore(score-1)
        console.log("score",score)
        scoreChecker(e);
    }
    const scoreChecker=e=>{
        if(score < 0){
            console.log("negative")
        }else{
            console.log("positive")
        }
    }
    return (
        <div className="row">
            <div className="col-sm-2 voting">
                <span className="positive score">
                    <strong>
                {score}
                    </strong>

                </span>
                <button onClick={()=>upVote()}className="btn-success arrow uparrow">&uarr;</button>
                <button onClick={()=>downVote()}className="btn-danger arrow downarrow">&darr;</button>
            </div>
            
            <div className="col-sm-7 text-left">
                <a href={props.data.url}>
                {title}
                </a>
            </div>
            <div className="col-sm-3 text-left">
                Written By: {thisAuthor}
            </div>
        </div>
    )
}


export default NewsCard