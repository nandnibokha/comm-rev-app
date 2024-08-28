import React, { useState } from 'react';
import './comm.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

const Comm = () => {
    const [name, setName] = useState('');
    const [rating, setRating] = useState(0);
    const [comment, setComment] = useState('');
    const [submissions, setSubmissions] = useState([]);

    const handleStarClick = (index) => {
        setRating(index + 1);
    };

    const handleCommentChange = (event) => {
        setComment(event.target.value);
    };

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const newSubmission = {
            name,
            comment,
            rating
        };
        setSubmissions([...submissions, newSubmission]);
        setName('');
        setComment('');
        setRating(0);
    };

    const renderStars = () => {
        return Array.from({ length: 5 }, (_, index) => (
            <span
                key={index}
                className={`star ${index < rating ? 'filled' : ''}`}
                onClick={() => handleStarClick(index)}
            >
                ★
            </span>
        ));
    };

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="card">
                            <div className="card-body">
                                <form onSubmit={handleSubmit}>
                                    <div className="form-group">
                                        <label htmlFor="name">Name</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="name"
                                            aria-describedby="nameHelp"
                                            placeholder="Enter Name"
                                            value={name}
                                            onChange={handleNameChange}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="comment">Comment</label>
                                        <textarea
                                            className="form-control"
                                            id="comment"
                                            rows="3"
                                            value={comment}
                                            onChange={handleCommentChange}
                                        ></textarea>
                                    </div>
                                    <div className="form-group">
                                        <label>Rating</label>
                                        <div className="rating">
                                            {renderStars()}
                                        </div>
                                    </div>
                                    <button
                                        type="submit"
                                        className="btn btn-primary"
                                    >
                                        Submit
                                    </button>
                                </form>
                                <div className="submitted-feedback">
                                    <h3>Submitted Feedback</h3>
                                    {submissions.length > 0 ? (
                                        submissions.map((submission, index) => (
                                            <div key={index} className="feedback-item">
                                                <p><strong>Name:</strong> {submission.name}</p>
                                                <p><strong>Comment:</strong> {submission.comment}</p>
                                                <p><strong>Rating:</strong> {submission.rating} Stars</p>
                                                <hr />
                                            </div>
                                        ))
                                    ) : (
                                        <p>No feedback yet.</p>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Comm;