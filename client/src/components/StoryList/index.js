import React from 'react';
import { Link } from 'react-router-dom';


const StoriesList = ({ stories }) => {

    if (!stories?.length) {
        return <h3 className="text-center text-white bg-dark rounded">No Stories Yet</h3>;
    }


    return (
        <div className="container-fluid mb-3">
            <div className='d-flex justify-content-center box-bg-dark text-white rounded-3'>
                <div className="px-5 pt-2 my-2 text-center border-bottom">
                    <h3 className="display-7 fw-bold">Your Stories</h3>
                </div>
            </div>

            <div className="px-4 py-5" id="featured-3">
                <div className="row row-cols-3">

                    {stories &&
                        stories.map((story) => (
                            <React.Fragment key={story}>
                                <div>
                                    <div className='col-sm-12 col-md-4 col-lg-4 col-xl-4'>
                                        <h2 className='p-1'>{story.storyTitle}</h2>
                                    </div>
                                    <div>{story.createdAt}</div>
                                    <div className='col text-truncate'>
                                        <p>{story.storyText}</p>

                                    </div>
                                    <div>
                                        <Link to={`/story/${story._id}`}>Click for full stories</Link>
                                    </div>
                                    <br />
                                    <div className='mb-5'>
                                        <form>

                                            <button type="button" className="btn btn-danger btn-sm px-4 mt-2"

                                            >Delete Story</button>
                                        </form>
                                    </div>

                                </div>
                            </React.Fragment>
                        ))}

                </div>

            </div>
            {/* Other User stories:*/}


        </div >
        // </div >
    )
}
export default StoriesList;