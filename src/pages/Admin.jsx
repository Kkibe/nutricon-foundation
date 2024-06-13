import { AddAPhoto, Forward} from '@mui/icons-material'
import React, {useContext, useEffect, useState } from 'react';
import { addNews, auth } from '../firebase';
import { AuthContext } from '../AuthContext';
import { NavLink } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { Helmet } from 'react-helmet-async';
import Loader from '../components/Loader/Loader';

export default function Admin() {
  const [error, setError] = useState(null);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);
  const [category, setCategory] = useState('nutrition');
  const {currentUser} = useContext(AuthContext);
  const [loading, setLoading] = useState(true);
  
  const handleSubmit = (e) => {
      e.preventDefault();
      if(!title && !description && !image){
          return setError("Enter all fields to continue");
      }
      addNews({title, description, category: category, image}, setError, setLoading);
  }

  useEffect(() => {
      error && setTimeout(() => {
        setError(null);
      }, 1000);
    }, [error]);
    
    useEffect(() => {
      !currentUser && window.history.back();
    }, [currentUser]);

    useEffect(() => {
      setLoading(false);
    }, []);
    
    const handleLogOut = () => {
      signOut(auth);
    };
  return (
    <div className='admin'>
        <Helmet>
            <meta charSet="utf-8" />
            <title>Admin Taxa Kenya - Fair Taxes, Just Kenya: Unite for Equity and Accountability.</title>
            <link rel="canonical" href={window.location.hostname} />
            <base href={window.location.hostname}></base>
            <meta name="description" content={"Taxa Kenya is dedicated to combating tax discrimination and injustices in Kenya. Through education, advocacy, and community engagement, we are committed to advocating for fair and equitable tax policies that benefit all citizens."}/>
        </Helmet>
        <h1>Post a blog <NavLink className='btn' onClick={handleLogOut}>Log Out</NavLink></h1>
        {!loading && <form onSubmit={handleSubmit}>
            <label htmlFor="title">post title:</label>
            <textarea type="text"  placeholder="Write your post title here..." name='title'  required value={title} onChange={(e) => setTitle(e.target.value)}/>
            <label htmlFor="image">post image:</label>
            <div className="image">
                <input type="file"  placeholder="enter post image" name='image' required onChange={(e) => {
                    setImage(e.target.files[0]);
                }}/>
                {image ? <img src={URL.createObjectURL(image)} alt="" /> : <>
                    <h4>Click to browse</h4>
                    <p>or</p>
                    <h4>Drag and drop to upload</h4>
                    <AddAPhoto className='icon'/>
                    </>
                }
            </div>
            <label htmlFor='category'>Select category:</label>
            <select defaultValue={'all'} placeholder="Select option" id='category' name='category'
              onChange={(e) =>setCategory(e.target.value)}>
              <option value="health" >Health</option>
              <option value="diabetes" >Diabetes</option>
              <option value="nutrition" >Nutrition</option>
              <option value="fitness" >Fitness</option>
            </select>
            <label htmlFor="description">post description:</label>
            <textarea placeholder="Write post content here..." name='description' id='description' required value={description} onChange={(e) => setDescription(e.target.value)}/>
            <button className='btn'>Publish <Forward /></button>
            {
              error && <h4 className='error'>{error}</h4>
            }
        </form>}
        {
          loading && <Loader />
        }
    </div>
  )
}
