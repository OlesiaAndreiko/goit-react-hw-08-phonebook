import { useAuth } from 'hooks';
import { Link } from 'react-router-dom';

export default function ProfilePage() {
const {user: {  name, email, avatar }}= useAuth();

  return <div style={{padding:"100px"}}>
    
  <h2>{name}</h2>
  <img alt={name} src={avatar.includes("gravatar") ? avatar : `http://localhost:8080/${avatar}`} width="300px" />
  <p>{email}</p>
  <Link to="edit">Edit Profile</Link>
  </div>;
}
