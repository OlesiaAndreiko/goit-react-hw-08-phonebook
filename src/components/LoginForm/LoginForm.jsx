

export const LoginForm = () => {

    const handleSubmit = event => {
        event.preventDefault();
    
        const form = event.target.elements;
    
    }
    
    
      return (
        <form onSubmit={handleSubmit} autoComplete="off">
          
          <label>
            Email
            <input type="email" name="email" />
          </label>
    
          <label>
            Password
            <input type="password" name="password" />
          </label>
          <button type="submit">Log In</button>
        </form>
      );
    };
    