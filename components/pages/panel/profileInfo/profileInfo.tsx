// import { useUserStore } from "@/lib/slices/userSlice"
import style from "./profileInfo.module.css"

export const ProfileIF = () => {

    // const { user } = useUserStore()


    return (
        <div className={style.profilePage}>
            <h1>Personal Information</h1>
            <div className={style.inputsPart}>
                <label htmlFor="name">Name :</label>
                <input type="text" id="name" />
            </div>
            <div className={style.inputsPart}>
                <label htmlFor="lastName">LastName :</label>
                <input type="text" id="lastName" />
            </div>
            <div className={style.inputsPart}>
                <label htmlFor="companyName">Company Name :</label>
                <input type="text" id="companyName" />
            </div>
            <div className={style.inputsPart}>
                <label htmlFor="phoneNumber">Phone Number :</label>
                <input type="text" id="phoneNumber" disabled />
            </div>
            <div className={style.inputsPart}>
                <label htmlFor="email">Email :</label>
                <input type="email" id="email" disabled />
            </div>
            <div className={style.inputsPart}>
                <p id="phoneNumber">Create At :</p>
                <p>asdasds</p>
            </div>
            <div className={style.inputsPart}>
                <label htmlFor="phoneNumber">Professional Title :</label>
                <p>asdasdasd</p>
            </div>
            <button type="button" className={style.uploadBTtn}>Update</button>
        </div>
    )
}