import Link from 'next/link'

const Form = ({ isLogin, errorMessage, onSubmit }) => (
  <div className="card text-center mx-auto my-5" style={{maxWidth: "25rem"}}> 
  <form onSubmit={onSubmit} className="card-body"> 
    <label>
      <span>Username</span>
      <input type="text" className="form-control w-100" name="username" required />
    </label>
    <label>
      <span>Password</span>
      <input type="password" className="form-control" name="password" required />
    </label>
    {!isLogin && (
      <label>
        <span>Repeat password</span>
        <input type="password" className="form-control" name="rpassword" required />
      </label>
    )}

    <div className="py-2">
      {isLogin ? (
        <>
          <button type="submit"  className="btn btn-primary mb-2">Login</button>
          <div>
          <Link href="/signup" legacyBehavior>
            <a>I don't have an account</a>
          </Link>
          </div>
        </>
      ) : (
        <>
          <button type="submit" className="btn btn-primary mb-2">Signup</button>
          <div>
          <Link href="/login" legacyBehavior>           
            <a>I already have an account</a>
          </Link>
          </div>
        </>
      )}
    </div>

    {errorMessage && <p className="error">{errorMessage}</p>}

  </form>
  </div>
)

export default Form
