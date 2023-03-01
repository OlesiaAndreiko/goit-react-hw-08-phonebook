export const RegisterForm = () => {

const handleSubmit = event => {
    event.preventDefault();

    const form = event.target.elements;

}


  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <label>
        Username
        <input type="text" name="name" />
      </label>

      <label>
        Email
        <input type="email" name="email" />
      </label>

      <label>
        Password
        <input type="password" name="password" />
      </label>
      <button type="submit">Register</button>
    </form>
  );
};
