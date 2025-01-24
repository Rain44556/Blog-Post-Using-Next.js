import React from 'react';
import { getPostsDetails } from '../getPosts';

const page = async ({params}) => {
   const details = await getPostsDetails(params.id);
   console.log(details)
   const {title, body} = details;
    return (
        <div className="card bg-purple-300 w-4/5 shadow-xl h-64 py-10 mx-auto my-20">
             <div className="card-body">
                
             <h2 className="card-title ">{title}</h2>
                 <p>{body}</p>
             </div>
         </div>

 );
};

export default page;