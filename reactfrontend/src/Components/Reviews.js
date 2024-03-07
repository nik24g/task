// src/components/Reviews.js
import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { socket } from '../socket';
const Reviews = () => {
    const navigate = useNavigate();
    const [reviews, setReviews] = useState([]);
    const fetchReviews = useCallback(async()=>{
        const res = await fetch('http://localhost:8000/')
        const data = await res.json()
        setReviews(data.data.reviews)
    }, [])
    useEffect(() => {
        fetchReviews()
    }, [fetchReviews]);

    const handleEdit = (id) => {
        navigate(`/${id}`)
    };

    const handleDelete = (id) => {
        const reviewId = id;
        fetch(`http://localhost:8000/${reviewId}`, {
            method: 'DELETE',
        })
            .then((response) => {
                if (response.ok) {
                    console.log(`Review with ID ${reviewId} deleted successfully.`);
                    fetchReviews()
                    socket.emit("update")
                } else {
                    console.error(`Error deleting review with ID ${reviewId}.`);
                }
            })
            .catch((error) => {
                console.error('Error sending DELETE request:', error);
            });

    };
    useEffect(() => {
        function onConnect() {
            console.log("connected success");
          }
      
          function onDisconnect() {
            console.log("disconnected success");
          }
      
          function updateEvent(value) {
            console.log("connected this update review event");
            fetchReviews()
          }
      
          socket.on('connect', onConnect);
          socket.on('disconnect', onDisconnect);
          socket.on('updateReview', updateEvent);
      
          return () => {
            socket.off('connect', onConnect);
            socket.off('disconnect', onDisconnect);
            socket.off('updateReview', updateEvent);
          };
    }, []);
    return (
        <div>
            <h2>Reviews</h2>
            <Link to={"/new"}>
        <button>Create new review</button>
      </Link>
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Content</th>
                        <th>Date-Time</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {reviews.map((review, i) => (
                        <tr key={i}>
                            <td>{review.review_title}</td>
                            <td>{review.review_content}</td>
                            <td>{review.createdAt}</td>
                            <td>
                                <button onClick={() => handleEdit(review.review_id)}>Edit</button>
                            </td>
                            <td>
                                <button onClick={() => handleDelete(review.review_id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Reviews;
