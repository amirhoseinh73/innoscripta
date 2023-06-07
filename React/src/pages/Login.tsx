import Copyright from "../components/footer/Copyright"
import Header from "../components/header/Header"
import SignIn from "../components/SignIn"

const Login = function () {
  return (
    <div className="container mx-auto">
      <Header />
      <SignIn />
      <Copyright />
    </div>
  )
}

export default Login
