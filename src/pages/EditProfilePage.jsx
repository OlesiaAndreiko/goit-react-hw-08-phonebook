import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { updateAvatar } from 'redux/auth/auth.operations';

export default function EditProfilePage() {
  const [file, setFile] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleUpload = () => {
    dispatch(updateAvatar(file));
    navigate('/profile');
  };

  const handleChange = event => {
    setFile(event.target.files[0]);
  };

  return (
    <div style={{padding:"120px"}}>
      <input type="file" name="avatar" onChange={handleChange} />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
}
