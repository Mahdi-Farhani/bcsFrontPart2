import { SignBackground } from "@/components/common/images/signIn/signBackGround"
import { SignInPage } from "@/components/pages/signIn/signInPage"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const signIn = () => {
    return (
        < >
            <SignBackground />
            {/* sign in part : */}
            <SignInPage />
            <ToastContainer />
        </>
    )
}
export default signIn