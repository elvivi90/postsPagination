import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import './posts.css';



const Posts = ({posts, loading}) => {




    return (
        <div className='posts'>
            {!loading ? (
                <div className='container'>
                    {posts.map((post) => (
                            <div className='post'>
                                <div className='box'>
                                    <h3>{post.title}</h3>
                                    <img src={post.image} alt={"altimage"} />
                                    <a href={post.PageUrl}>{post.PageUrl}</a>
                                </div>
                            </div>
                    ))}
                </div>
            ) : (
                <CircularProgress />
            )}
        </div>
    );


}

export default Posts;