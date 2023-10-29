import { SignBackground } from "@/components/common/images/signIn/signBackGround"
import SignUpPage from "@/components/pages/signUp/signUpPage"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const signUp = () => {
    return (
        <>
            <SignBackground />
            <SignUpPage />
            <ToastContainer />
        </>
    )
}
export default signUp