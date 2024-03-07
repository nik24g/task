import React, { useCallback, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useParams } from "react-router";

export default function Review() {
    const navigate = useNavigate();
    const params = useParams();
    const [formData, setFormData] = useState({
        title: "",
        content: ""
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        // You can handle form submission logic here
        if (params.id) {
            const response = await fetch(`http://localhost:8000/update`, {
                method: 'PUT',
                body: JSON.stringify(formData),
                headers: {
                    "Content-Type": "application/json",
                },
            });
            const data = await response.json()
            if (data.code === 200) {
                console.log("review updated");

            } else {
                console.log("something went wrong");
            }
        }
        else {
            const response = await fetch(`http://localhost:8000/new`, {
                method: 'POST',
                body: JSON.stringify(formData),
                headers: {
                    "Content-Type": "application/json",
                },
            });
            const data = await response.json()
            if (data.code === 201) {
                console.log("review created");

            } else {
                console.log("something went wrong");
            }
        }

    };
    const handleCancel = () => {
        navigate("/")
    }
    const fetchReview = useCallback(async () => {
        const res = await fetch(`http://localhost:8000/${params.id}`)
        const data = await res.json()
        setFormData({
            id: params.id,
            title: data.data.review.review_title,
            content: data.data.review.review_content
        })
    }, [])
    useEffect(() => {
        if (params.id) {
            fetchReview()
        }
    }, [])
    const handleReset = ()=> {
        if(params.id){
            fetchReview()
        }
        else{
            setFormData({
                title: "",
                content: ""
            })
        }
    }
    return (
        <div>
            <h1>Review</h1>

            <form onSubmit={handleSubmit} >
                <div>
                    <label htmlFor="title">Title:
                    </label>
                    <input type="text" name="title" id="title" onChange={handleChange} value={formData.title} />
                </div>
                <div>
                    <label htmlFor="content">Content: </label>
                    <input type="text" name="content" id="content" onChange={handleChange} value={formData.content} />
                </div>
                <button type='submit'>Save</button>
                <button type='button' onClick={handleReset}>Reset</button>
                <button type='button' onClick={handleCancel}>Cancel</button>
            </form>
        </div>
    )
}
