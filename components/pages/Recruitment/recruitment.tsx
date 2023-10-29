import Image from "next/image";
import style from "./recruitment.module.css";
import mainImg from "@/asset/banner/23.jpg";
import React, { useReducer, useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { SuccessAlert, WarnAlert } from "@/components/common/alert/warnAlert";
import { GLOBAL_APIURL } from "@/constant/globalUrl";
import gender from "@/public/icons/image/recruitment/gender.png";
import location from "@/public/icons/image/recruitment/location.png";
import contract from "@/public/icons/image/recruitment/contract.png";
type FormState = {
  [key: string]: string;
};

type FormAction = {
  type: string;
  payload: {
    field: string;
    value: string;
  };
};
interface ReqForm {
  jobPosition: string;
  genders: string;
  locations: string;
  contractType: string;
}
const jobDate = [
  {
    jobPosition: "کارشناس فروش",
    genders: "مرد - زن",
    locations: "اصفهان - تهران - مشهد - تبریز",
    contractType: "تمام وقت",
  },
  {
    jobPosition: "کارشناس صادرات",
    genders: "مرد - زن",
    locations: "اصفهان",
    contractType: "تمام وقت",
  },
  {
    jobPosition: "کارشناس خرید داخلی",
    genders: "مرد - زن",
    locations: "اصفهان",
    contractType: "تمام وقت",
  },
  {
    jobPosition: "کارشناس خرید خارجی",
    genders: "مرد - زن",
    locations: "اصفهان",
    contractType: "تمام وقت",
  },
  {
    jobPosition: "کارشناس تحقیق و توسعه",
    genders: "مرد - زن",
    locations: "اصفهان",
    contractType: "تمام وقت",
  },
  {
    jobPosition: "کارشناس تحقیقات بازار",
    genders: "مرد - زن",
    locations: "اصفهان",
    contractType: "تمام وقت",
  },
  {
    jobPosition: "کارشناس دیجیتال مارکتینگ",
    genders: "مرد - زن",
    locations: "اصفهان",
    contractType: "تمام وقت",
  },
];
const initialState: FormState = {
  selectedDate: "",
  name: "",
  familyName: "",
  fatherName: "",
  nationalCode: "",
  birthCertificate: "",
  religion: "",
  religionTwo: "",
  placeOfBirth: "",
  placeOfIssue: "",
  dateOfBirth: "",
  maritalStatus: "",
  numberOfChildren: "",
  isMarried: "",
  militaryServiceStatus: "",
  exemptionType: "",
  insuranceHistory: "",
  insurancePeriod: "",
  address: "",
  postalCode: "",
  landlinePhone: "",
  phoneNumber: "",
  essentialContactNumber: "",
  gettingToKnowTheOrganization: "",
  jobTitle: "",
  typeOfCooperation: "",
  grade: "",
  fieldOfStudy: "",
  trainingCenter: "",
  gPA: "",
  studying: "",
  continuingEducation: "",
  organizations: "",
  fieldOfActivity: "",
  jobPosition: "",
  collaborationPeriod: "",
  lastSalary: "",
  terminationOfCooperation: "",
  organizationPhone: "",
  theTitleOfSkills: "",
  languages: "",
  software: "",
  colleagueAcquaintances: "",
  nameAndFamilyName: "",
  personsRelationship: "",
  employmentCompany: "",
  jobPositionTwo: "",
  phoneNumberTwo: "",
  drugs: "",
  drugsDisc: "",
  specialDisease: "",
  specialDiseaseDisc: "",
  rightsRequested: "",
  insuranceHistoryTwo: "",
};

const formReducer = (state: FormState, action: FormAction): FormState => {
  switch (action.type) {
    case "SET_FIELD":
      return {
        ...state,
        [action.payload.field]: action.payload.value,
      };
    default:
      return state;
  }
};
export const RecruitmentPage = () => {
  const [formState, dispatch] = useReducer(formReducer, initialState);
  const handleInputChange = (field: string, value: string) => {
    dispatch({
      type: "SET_FIELD",
      payload: {
        field,
        value,
      },
    });
  };
  const [years, setYears] = useState<string>("");
  const [month, setMonth] = useState<string>("");
  const [days, setDays] = useState<string>("");
  const handleFormSubmit = async (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
    if (!theTitleOfSkills) {
      WarnAlert("مهارت‌های خود را وارد نکردید");
    } else {
      if (!colleagueAcquaintances) {
        WarnAlert("اشنا داشتن در شرکت را مشخص نکردید");
      } else {
        if (!drugs) {
          WarnAlert("سابقه‌ی مصرف دخانیات را مشخص نکردید");
        } else {
          if (!specialDisease) {
            WarnAlert("بیماری خاصی داشتن را مشخص نکردید");
          } else {
            handleInputChange("dateOfBirth", `${years}/${month}/${days}`);
            if (confirm) {
              try {
                const response = await axios.post(
                  `${GLOBAL_APIURL}/api/forms/Recruitment`,
                  formState
                );
                SuccessAlert("ارسال شد");
              } catch (error) {
                console.error("Error:", error);
              }
            } else {
              WarnAlert(
                "صحت کلیه اطلاعات مندرج در این فرم را تایید نکرده اید !"
              );
            }
          }
        }
      }
    }
  };
  const [confirm, setConfirm] = useState<boolean>(false);
  const confirmHandler = () => {
    if (confirm) {
      setConfirm(false);
    } else {
      setConfirm(true);
    }
  };
  // inputs :

  const [name, setName] = useState<string>("");
  const [familyName, setFamilyName] = useState<string>("");
  const [fatherName, setFatherName] = useState<string>("");
  const [nationalCode, setNationalCode] = useState<string>("");
  const [birthCertificate, setBirthCertificate] = useState<string>("");
  const [religion, setReligion] = useState<string>("");
  const [religionTwo, setReligionTwo] = useState<string>("");
  const [placeOfBirth, setPlaceOfBirth] = useState<string>("");
  const [placeOfIssue, setPlaceOfIssue] = useState<string>("");
  const [year, setYear] = useState<string>("");
  const [monthTwo, setMonthTwo] = useState<string>("");
  const [dayTwo, setDayTwo] = useState<string>("");
  const [maritalStatus, setMaritalStatus] = useState<string>("");
  const [militaryServiceStatus, setMilitaryServiceStatus] =
    useState<string>("");
  const [insuranceHistory, setInsuranceHistory] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [postalCode, setPostalCode] = useState<string>("");
  const [landlinePhone, setLandlinePhone] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [essentialContactNumber, setEssentialContactNumber] =
    useState<string>("");
  useState<string>("");
  const [typeOfCooperation, setTypeOfCooperation] = useState<string>("");
  const [grade, setGrade] = useState<string>("");
  const [fieldOfStudy, setFieldOfStudy] = useState<string>("");
  const [studying, setStudying] = useState<string>("");
  const [continuingEducation, setContinuingEducation] = useState<string>("");
  const [theTitleOfSkills, setTheTitleOfSkills] = useState<string>("");
  const [colleagueAcquaintances, setColleagueAcquaintances] =
    useState<string>("");
  const [drugs, setDrugs] = useState<string>("");
  const [specialDisease, setSpecialDisease] = useState<string>("");
  // steps:
  const [stepOne, setStepOne] = useState<boolean>(true);
  const [stepTwo, setStepTwo] = useState<boolean>(false);
  const [stepThree, setStepThree] = useState<boolean>(false);
  const [stepFour, setStepFour] = useState<boolean>(false);
  // steps number
  const [stepNOne, setStepNOne] = useState<boolean>(true);
  const [stepNTwo, setStepNTwo] = useState<boolean>(false);
  const [stepNThree, setStepNThree] = useState<boolean>(false);
  const [stepNFour, setStepNFour] = useState<boolean>(false);
  const stepOneHandler = () => {
    if (!name) {
      WarnAlert("اسم را وارد نکردید");
    } else {
      if (!familyName) {
        WarnAlert("فامیلی را وارد نکردید");
      } else {
        if (!fatherName) {
          WarnAlert("اسم پدر را وارد نکردید");
        } else {
          if (!nationalCode) {
            WarnAlert("کدملی را وراد نکردید");
          } else {
            if (!birthCertificate) {
              WarnAlert("شماره شناسنامه را وارد نکردید");
            } else {
              if (!religion) {
                WarnAlert("دین خود را وارد نکردید");
              } else {
                if (!religionTwo) {
                  WarnAlert("مذهب خود را وارد نکردید");
                } else {
                  if (!placeOfBirth) {
                    WarnAlert("محل تولدتان را وارد نکردید");
                  } else {
                    if (!placeOfIssue) {
                      WarnAlert("محل صدور را وارد نکردید");
                    } else {
                      if (!year) {
                        WarnAlert("سال تولد را وارد نکردید");
                      } else {
                        if (!monthTwo) {
                          WarnAlert("ماه تولد را وارد نکردید");
                        } else {
                          if (!dayTwo) {
                            WarnAlert("روز تولد را وارد نکردید");
                          } else {
                            if (!maritalStatus) {
                              WarnAlert("وضعیت تاهل را مشحص نکردید");
                            } else {
                              if (!militaryServiceStatus) {
                                WarnAlert("وضعیت وظیفه نظام را مشخص نکردید");
                              } else {
                                if (!insuranceHistory) {
                                  WarnAlert(
                                    "سابقه‌ی پرداخت بیمه را مشخص نکردید"
                                  );
                                } else {
                                  if (!address) {
                                    WarnAlert("آدرس تان را وارد نکردید");
                                  } else {
                                    if (!postalCode) {
                                      WarnAlert("کد پستی را وارد نکردید");
                                    } else {
                                      if (!landlinePhone) {
                                        WarnAlert(
                                          "تلفن ثابت تان را وارد نکردید"
                                        );
                                      } else {
                                        if (!phoneNumber) {
                                          WarnAlert(
                                            "شماره تلفن همراه خود را وارد نکردید"
                                          );
                                        } else {
                                          if (!essentialContactNumber) {
                                            WarnAlert(
                                              "شماره تماس ضروری را وارد نکردید"
                                            );
                                          } else {
                                            if (!typeOfCooperation) {
                                              WarnAlert(
                                                "نوع همکاری را مشخص نکردید"
                                              );
                                            } else {
                                              setStepOne(false);
                                              setStepTwo(true);
                                              setStepNTwo(true);
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  };
  const stepTwoHandler = () => {
    if (!grade) {
      WarnAlert("مقطع تحصیلی را مشخص نکردید");
    } else {
      if (!fieldOfStudy) {
        WarnAlert("رشته تحصیلی را وارد نکردید");
      } else {
        if (!studying) {
          WarnAlert("مشغول به تحصیل بودنتان را مشخص نکردید");
        } else {
          if (!continuingEducation) {
            WarnAlert("قصد ادامه به تحصیل را مشخص نکردید");
          } else {
            setStepTwo(false);
            setStepThree(true);
            setStepNThree(true);
          }
        }
      }
    }
  };
  const stepBackTwoHandler = () => {
    setStepTwo(false);
    setStepOne(true);
    setStepNTwo(false);
  };
  const stepThreeHandler = () => {
    setStepThree(false);
    setStepFour(true);
    setStepNFour(true);
  };
  const stepBackThreeHandler = () => {
    setStepThree(false);
    setStepTwo(true);
    setStepNThree(false);
  };
  const stepBackFourHandler = () => {
    setStepFour(false);
    setStepThree(true);
    setStepNFour(false);
  };
  const RequestFun = ({
    jobPosition,
    genders,
    locations,
    contractType,
  }: ReqForm) => {
    return (
      <div className={style.recFormFirstPartP2}>
        <div className={style.recFormFirstPartP2V1}>
          <h3>{jobPosition}</h3>
          <div className={style.recFormFirstPartP2V1Detail}>
            {/* Gender */}
            <div className={style.recFormDetailPart}>
              <Image src={gender} width={30} height={30} alt="Gender Icon" />
              <p>{genders}</p>
            </div>
            {/* Location */}
            <div className={style.recFormDetailPart}>
              <Image src={location} width={30} height={30} alt="Gender Icon" />
              <p>{locations}</p>
            </div>
            {/* Type of Contract */}
            <div className={style.recFormDetailPart}>
              <Image src={contract} width={30} height={30} alt="Gender Icon" />
              <p>{contractType}</p>
            </div>
          </div>
        </div>
        <div className={style.recFormFirstPartP2V2}>
          <button className={style.btnRecFormRequest}>فرم درخواست</button>
        </div>
      </div>
    );
  };
  return (
    <div className={style.employmentPage}>
      <div className={style.imageTop}>
        <Image src={mainImg} alt="History" title="History" />
      </div>
      <div className={style.recruitmentForm}>
        <ul className={style.stepForm}>
          <li>
            <button className={style.listActive}>1</button>
          </li>
          <span className={style.listActive}></span>
          <li>
            <button className={stepNTwo ? style.listActive : ""}>2</button>
          </li>
          <span className={stepNTwo ? style.listActive : ""}></span>
          <li>
            <button className={stepNThree ? style.listActive : ""}>3</button>
          </li>
          <span className={stepNThree ? style.listActive : ""}></span>
          <li>
            <button className={stepNFour ? style.listActive : ""}>4</button>
          </li>
        </ul>
        {stepOne && (
          <div className={style.mainForm}>
            <p className={style.mainTitle}>مشخصات متقاضی</p>
            <div className={style.formPart1}>
              <div>
                <label htmlFor="name">*نام :</label>
                <input
                  required
                  type="text"
                  id="name"
                  placeholder="نام"
                  onChange={(e) => {
                    handleInputChange("name", e.target.value);
                    setName(e.target.value);
                  }}
                />
              </div>
              <div>
                <label htmlFor="familyName">*نام خانوادگی :</label>
                <input
                  required
                  type="text"
                  id="familyName"
                  placeholder="نام‌خانوادگی"
                  onChange={(e) => {
                    handleInputChange("familyName", e.target.value);
                    setFamilyName(e.target.value);
                  }}
                />
              </div>
              <div>
                <label htmlFor="fatherName">*نام پدر :</label>
                <input
                  required
                  type="text"
                  id="fatherName"
                  placeholder="نام پدر"
                  onChange={(e) => {
                    handleInputChange("fatherName", e.target.value);
                    setFatherName(e.target.value);
                  }}
                />
              </div>
              <div>
                <label htmlFor="nationalCode">*کدملی :</label>
                <input
                  required
                  type="text"
                  id="nationalCode"
                  placeholder="کدملی"
                  onChange={(e) => {
                    handleInputChange("nationalCode", e.target.value);
                    setNationalCode(e.target.value);
                  }}
                />
              </div>
              <div>
                <label htmlFor="birthCertificate">*شماره شناسنامه :</label>
                <input
                  required
                  type="text"
                  id="birthCertificate"
                  placeholder="شماره شناسنامه"
                  onChange={(e) => {
                    handleInputChange("birthCertificate", e.target.value);
                    setBirthCertificate(e.target.value);
                  }}
                />
              </div>
              <div>
                <label htmlFor="religion">*دین :</label>
                <input
                  required
                  type="text"
                  id="religion"
                  placeholder="دین"
                  onChange={(e) => {
                    handleInputChange("religion", e.target.value);
                    setReligion(e.target.value);
                  }}
                />
              </div>
              <div>
                <label htmlFor="religionTwo">*مذهب :</label>
                <input
                  required
                  type="text"
                  id="religionTwo"
                  placeholder="مذهب"
                  onChange={(e) => {
                    handleInputChange("religionTwo", e.target.value);
                    setReligionTwo(e.target.value);
                  }}
                />
              </div>
              <div>
                <label htmlFor="placeOfBirth">*محل تولد :</label>
                <input
                  required
                  type="text"
                  id="placeOfBirth"
                  placeholder="محل تولد"
                  onChange={(e) => {
                    handleInputChange("placeOfBirth", e.target.value);
                    setPlaceOfBirth(e.target.value);
                  }}
                />
              </div>
              <div>
                <label htmlFor="placeOfIssue">*محل صدور :</label>
                <input
                  required
                  type="text"
                  id="placeOfIssue"
                  placeholder="محل صدور"
                  onChange={(e) => {
                    handleInputChange("placeOfIssue", e.target.value);
                    setPlaceOfIssue(e.target.value);
                  }}
                />
              </div>
              <div className={style.birthDate}>
                <label htmlFor="dateOfBirth">*تاریخ تولد :</label>
                <div className={style.dateInput}>
                  <input
                    required
                    type="text"
                    id="years"
                    placeholder="سال"
                    onChange={(e) => {
                      setYears(e.target.value);
                      setYear(e.target.value);
                    }}
                  />
                  <input
                    required
                    type="text"
                    id="months"
                    placeholder="ماه"
                    onChange={(e) => {
                      setMonth(e.target.value);
                      setMonthTwo(e.target.value);
                    }}
                  />
                  <input
                    required
                    type="text"
                    id="days"
                    placeholder="روز"
                    onChange={(e) => {
                      setDays(e.target.value);
                      setDayTwo(e.target.value);
                    }}
                  />
                </div>
              </div>
              <div>
                <label htmlFor="maritalStatus">*وضعیت تاهل :</label>
                <select
                  required
                  onChange={(e) => {
                    handleInputChange("maritalStatus", e.target.value);
                    setMaritalStatus(e.target.value);
                  }}
                  name="maritalStatus"
                  id="maritalStatus"
                  className={style.maritalStatus}
                >
                  <option value="">انتخاب کنید</option>
                  <option value="مجرد">مجرد</option>
                  <option value="متاهل">متاهل</option>
                </select>
                <div>
                  <label htmlFor="numberOfChildren">
                    تعداد فرزند و افراد تحت تکلف :
                  </label>
                  <input
                    type="text"
                    id="numberOfChildren"
                    placeholder="تعداد فرزند و افراد تحت تکلف"
                    onChange={(e) => {
                      handleInputChange("numberOfChildren", e.target.value);
                    }}
                  />
                </div>
              </div>
              <div>
                <label htmlFor="militaryServiceStatus">
                  *وضعیت نظام وظیفه :
                </label>
                <select
                  required
                  onChange={(e) => {
                    handleInputChange("militaryServiceStatus", e.target.value);
                    setMilitaryServiceStatus(e.target.value);
                  }}
                  name="militaryServiceStatus"
                  id="militaryServiceStatus"
                  className={style.maritalStatus}
                >
                  <option value="">انتخاب کنید</option>
                  <option value="پایان خدمت">پایان خدمت </option>
                  <option value="معاف ">معاف</option>
                </select>
                <div>
                  <label htmlFor="exemptionType">نوع معافیت :</label>
                  <input
                    type="text"
                    id="exemptionType"
                    placeholder="نوع معافیت"
                    onChange={(e) => {
                      handleInputChange("exemptionType", e.target.value);
                    }}
                  />
                </div>
              </div>
              <div>
                <label htmlFor="insuranceHistory">
                  *آیا سابقه پرداخت بیمه دارید :
                </label>
                <select
                  required
                  onChange={(e) => {
                    handleInputChange("insuranceHistory", e.target.value);
                    setInsuranceHistory(e.target.value);
                  }}
                  name="insuranceHistory"
                  id="insuranceHistory"
                  className={style.maritalStatus}
                >
                  <option value="">انتخاب کنید</option>
                  <option value="بله">بله</option>
                  <option value="خیر">خیر</option>
                </select>
                <div>
                  <label htmlFor="insurancePeriod">مدت(به سال) :</label>
                  <input
                    type="text"
                    id="insurancePeriod"
                    placeholder="مدت(به‌سال)"
                    onChange={(e) => {
                      handleInputChange("insurancePeriod", e.target.value);
                    }}
                  />
                </div>
              </div>
              <div>
                <label htmlFor="address">*نشانی محل سکونت :</label>
                <textarea
                  required
                  id="address"
                  placeholder="نشانی محل سکونت"
                  onChange={(e) => {
                    handleInputChange("address", e.target.value);
                    setAddress(e.target.value);
                  }}
                />
              </div>
              <div>
                <label htmlFor="postalCode">*کدپستی منزل :</label>
                <input
                  required
                  type="text"
                  id="postalCode"
                  placeholder="کدپستی منزل "
                  onChange={(e) => {
                    handleInputChange("postalCode", e.target.value);
                    setPostalCode(e.target.value);
                  }}
                />
              </div>
              <div>
                <label htmlFor="landlinePhone">*تلفن ثابت :</label>
                <input
                  required
                  type="text"
                  id="landlinePhone"
                  placeholder="تلفن ثابت"
                  onChange={(e) => {
                    handleInputChange("landlinePhone", e.target.value);
                    setLandlinePhone(e.target.value);
                  }}
                />
              </div>
              <div>
                <label htmlFor="phoneNumber">*تلفن همراه :</label>
                <input
                  required
                  type="text"
                  id="phoneNumber"
                  placeholder=" شماره تلفن همراه*"
                  onChange={(e) => {
                    handleInputChange("phoneNumber", e.target.value);
                    setPhoneNumber(e.target.value);
                  }}
                />
              </div>
              <div>
                <label htmlFor="essentialContactNumber">
                  *شماره تماس ضروری :
                </label>
                <input
                  required
                  type="text"
                  id="essentialContactNumber"
                  placeholder="شماره تماس ضروری"
                  onChange={(e) => {
                    handleInputChange("essentialContactNumber", e.target.value);
                    setEssentialContactNumber(e.target.value);
                  }}
                />
              </div>
              <div>
                <label htmlFor="gettingToKnowTheOrganization">
                  نحوه ی آشنایی با سازمان :
                </label>
                <select
                  onChange={(e) => {
                    handleInputChange(
                      "gettingToKnowTheOrganization",
                      e.target.value
                    );
                  }}
                  name="gettingToKnowTheOrganization"
                  id="gettingToKnowTheOrganization"
                  className={style.maritalStatus}
                >
                  <option value="">انتخاب کنید</option>
                  <option value="دوستان و آشنایان">دوستان و آشنایان</option>
                  <option value="سایت">سایت</option>
                  <option value="تلگرام">تلگرام</option>
                  <option value="اینستاگرام">اینستاگرام</option>
                  <option value="لینکدین">لینکدین</option>
                  <option value="سایر">سایر</option>
                </select>
              </div>
            </div>
            <div className={style.formPart1}>
              <div>
                <label htmlFor="jobTitle">عنوان شغل مورد درخواست :</label>
                <input
                  type="text"
                  id="jobTitle"
                  placeholder=" عنوان شغل مورد درخواست"
                  onChange={(e) => {
                    handleInputChange("jobTitle", e.target.value);
                  }}
                />
              </div>
              <div>
                <label htmlFor="typeOfCooperation">*نوع همکاری :</label>
                <select
                  required
                  onChange={(e) => {
                    handleInputChange("typeOfCooperation", e.target.value);
                    setTypeOfCooperation(e.target.value);
                  }}
                  name="typeOfCooperation"
                  id="typeOfCooperation"
                  className={style.maritalStatus}
                >
                  <option value="">انتخاب کنید</option>
                  <option value="تمام وقت">تمام وقت</option>
                  <option value="پاره وقت">پاره وقت</option>
                  <option value="همکاری خارج از سازمان">
                    همکاری خارج از سازمان
                  </option>
                </select>
              </div>
            </div>
            <button
              className={style.buttonStepSubmit}
              type="button"
              onClick={stepOneHandler}
            >
              مرحله‌ی بعدی
            </button>
          </div>
        )}
        {stepTwo && (
          <div className={style.mainForm}>
            <p className={style.mainTitle}>سوابق تحصیلی</p>
            <div className={style.formPart1}>
              <div>
                <label htmlFor="grade">*مقطع تحصیلی :</label>
                <input
                  required
                  type="text"
                  id="grade"
                  placeholder="مقطع تحصیلی"
                  onChange={(e) => {
                    handleInputChange("grade", e.target.value);
                    setGrade(e.target.value);
                  }}
                />
              </div>
              <div>
                <label htmlFor="fieldOfStudy">*رشته تحصیلی :</label>
                <input
                  required
                  type="text"
                  id="fieldOfStudy"
                  placeholder="رشته تحصیلی"
                  onChange={(e) => {
                    handleInputChange("fieldOfStudy", e.target.value);
                    setFieldOfStudy(e.target.value);
                  }}
                />
              </div>
              <div>
                <label htmlFor="trainingCenter">نام مرکز آموزشی :</label>
                <input
                  type="text"
                  id="trainingCenter"
                  placeholder="نام مرکز آموزشی"
                  onChange={(e) =>
                    handleInputChange("trainingCenter", e.target.value)
                  }
                />
              </div>
              <div>
                <label htmlFor="gPA">معدل :</label>
                <input
                  type="text"
                  id="gPA"
                  placeholder="معدل"
                  onChange={(e) => handleInputChange("gPA", e.target.value)}
                />
              </div>
            </div>
            <div className={style.formPart1}>
              <div>
                <label htmlFor="studying">
                  *آیا در حال حاضر مشغول به تحصیل هستید :
                </label>
                <select
                  required
                  onChange={(e) => {
                    handleInputChange("studying", e.target.value);
                    setStudying(e.target.value);
                  }}
                  name="studying"
                  id="studying"
                  className={style.maritalStatus}
                >
                  <option value="">انتخاب کنید</option>
                  <option value="بله">بله</option>
                  <option value="خیر">خیر</option>
                </select>
              </div>
              <div>
                <label htmlFor="continuingEducation">
                  *آیا قصد ادامه تحصیل دارید :
                </label>
                <select
                  required
                  onChange={(e) => {
                    handleInputChange("continuingEducation", e.target.value);
                    setContinuingEducation(e.target.value);
                  }}
                  name="continuingEducation"
                  id="continuingEducation"
                  className={style.maritalStatus}
                >
                  <option value="">انتخاب کنید</option>
                  <option value="بله">بله</option>
                  <option value="خیر">خیر</option>
                </select>
              </div>
            </div>

            <div className={style.allStepButtons}>
              <button
                className={style.buttonStepSubmit}
                type="button"
                onClick={stepTwoHandler}
              >
                مرحله‌ی بعدی
              </button>
              <button
                className={style.buttonStepSubmit}
                type="button"
                onClick={stepBackTwoHandler}
              >
                مرحله‌ی قبلی
              </button>
            </div>
          </div>
        )}
        {stepThree && (
          <div className={style.mainForm}>
            <p className={style.mainTitle}>سوابق شغلی</p>
            <div className={style.formPart1}>
              <div>
                <label htmlFor="organizations">سازمان ها :</label>
                <input
                  type="text"
                  id="organizations"
                  placeholder="سازمان ها"
                  onChange={(e) =>
                    handleInputChange("organizations", e.target.value)
                  }
                />
              </div>
              <div>
                <label htmlFor="fieldOfActivity">زمینه‌های فعالیت :</label>
                <input
                  type="text"
                  id="fieldOfActivity"
                  placeholder="زمینه‌های فعالیت"
                  onChange={(e) =>
                    handleInputChange("fieldOfActivity", e.target.value)
                  }
                />
              </div>
              <div>
                <label htmlFor="jobPosition">سمت ها :</label>
                <input
                  type="text"
                  id="jobPosition"
                  placeholder="سمت شغلی"
                  onChange={(e) =>
                    handleInputChange("jobPosition", e.target.value)
                  }
                />
              </div>
              <div>
                <label htmlFor="collaborationPeriod">مدت همکاری :</label>
                <input
                  type="text"
                  id="collaborationPeriod"
                  placeholder="مدت همکاری"
                  onChange={(e) =>
                    handleInputChange("collaborationPeriod", e.target.value)
                  }
                />
              </div>
              <div>
                <label htmlFor="lastSalary">آخرین حقوق دریافتی :</label>
                <input
                  type="text"
                  id="lastSalary"
                  placeholder="آخرین حقوق دریافتی"
                  onChange={(e) =>
                    handleInputChange("lastSalary", e.target.value)
                  }
                />
              </div>
              <div>
                <label htmlFor="terminationOfCooperation">
                  علت قطع همکاری :
                </label>
                <input
                  type="text"
                  id="terminationOfCooperation"
                  placeholder="علت قطع همکاری"
                  onChange={(e) =>
                    handleInputChange(
                      "terminationOfCooperation",
                      e.target.value
                    )
                  }
                />
              </div>
              <div>
                <label htmlFor="organizationPhone">تلفن :</label>
                <input
                  type="text"
                  id="organizationPhone"
                  placeholder="تلفن"
                  onChange={(e) =>
                    handleInputChange("organizationPhone", e.target.value)
                  }
                />
              </div>
            </div>
            <div className={style.allStepButtons}>
              <button
                className={style.buttonStepSubmit}
                type="button"
                onClick={stepThreeHandler}
              >
                مرحله‌ی بعدی
              </button>
              <button
                className={style.buttonStepSubmit}
                type="button"
                onClick={stepBackThreeHandler}
              >
                مرحله‌ی قبلی
              </button>
            </div>
          </div>
        )}
        {stepFour && (
          <div className={style.mainForm}>
            <p className={style.mainTitle}>مهارت‌ها</p>
            <div className={style.formPart1}>
              <div>
                <label htmlFor="theTitleOfSkills">*عنوان مهارت ها :</label>
                <input
                  required
                  type="text"
                  id="theTitleOfSkills"
                  placeholder="عنوان مهارت‌ها"
                  onChange={(e) => {
                    handleInputChange("theTitleOfSkills", e.target.value);
                    setTheTitleOfSkills(e.target.value);
                  }}
                />
              </div>
            </div>
            <p className={style.mainTitle}>میزان آشنایی با زبان‌های خارجه</p>
            <div className={style.formPart1}>
              <div>
                <label htmlFor="languages">زبان ها :</label>
                <input
                  type="text"
                  id="languages"
                  placeholder="عنوان زبان ها"
                  onChange={(e) =>
                    handleInputChange("languages", e.target.value)
                  }
                />
              </div>
            </div>
            <p className={style.mainTitle}>میزان آشنایی با نرم‌افزارها</p>
            <div className={style.formPart1}>
              <div>
                <label htmlFor="software">نرم‌افزارها :</label>
                <input
                  type="text"
                  id="software"
                  placeholder="عنوان نرمافزار‌ها"
                  onChange={(e) =>
                    handleInputChange("software", e.target.value)
                  }
                />
              </div>
            </div>
            <div className={style.formPart2}>
              <label htmlFor="colleagueAcquaintances">
                *آیا فردی از بستگان یا آشنایان شما با گروه انتخاب یا هلدینگ
                بسپار شیمی سپیدان همکاری یا درآن مجموعه اشتغال بکار دارد :
              </label>
              <select
                required
                onChange={(e) => {
                  handleInputChange("colleagueAcquaintances", e.target.value);
                  setColleagueAcquaintances(e.target.value);
                }}
                name="colleagueAcquaintances"
                id="colleagueAcquaintances"
                className={style.maritalStatus}
              >
                <option value="">انتخاب کنید</option>
                <option value="بله">بله</option>
                <option value="خیر">خیر</option>
              </select>
            </div>
            <div className={style.formPart1}>
              <div>
                <label htmlFor="nameAndFamilyName">نام و نام‌خانوادگی :</label>
                <input
                  type="text"
                  id="nameAndFamilyName"
                  placeholder="نام و نام خانوادگی"
                  onChange={(e) =>
                    handleInputChange("nameAndFamilyName", e.target.value)
                  }
                />
              </div>
              <div>
                <label htmlFor="personsRelationship">نسبت فرد با شما :</label>
                <input
                  type="text"
                  id="personsRelationship"
                  placeholder="نسبت فرد با شما"
                  onChange={(e) =>
                    handleInputChange("personsRelationship", e.target.value)
                  }
                />
              </div>
              <div>
                <label htmlFor="employmentCompany">نام شرکت محل اشتغال :</label>
                <input
                  type="text"
                  id="employmentCompany"
                  placeholder="نام شرکت کحل اشتغال"
                  onChange={(e) =>
                    handleInputChange("employmentCompany", e.target.value)
                  }
                />
              </div>
              <div>
                <label htmlFor="jobPositionTwo">سمت سازمانی :</label>
                <input
                  type="text"
                  id="jobPositionTwo"
                  placeholder="سمت سازمانی"
                  onChange={(e) =>
                    handleInputChange("jobPositionTwo", e.target.value)
                  }
                />
              </div>
              <div>
                <label htmlFor="phoneNumberTwo">شماره تماس :</label>
                <input
                  type="text"
                  id="phoneNumberTwo"
                  placeholder="شماره تماس"
                  onChange={(e) =>
                    handleInputChange("phoneNumberTwo", e.target.value)
                  }
                />
              </div>
            </div>
            <div className={style.formPart1}>
              <div>
                <label htmlFor="drugs">
                  *آیا سابقه مصرف دخانیات یا مواد مخدر دارید :
                </label>
                <select
                  required
                  onChange={(e) => {
                    handleInputChange("drugs", e.target.value);
                    setDrugs(e.target.value);
                  }}
                  name="drugs"
                  id="drugs"
                  className={style.maritalStatus}
                >
                  <option value="">انتخاب کنید</option>
                  <option value="بله">بله</option>
                  <option value="خیر">خیر</option>
                </select>
              </div>
              <div>
                <label htmlFor="drugsDisc">توضیح دهید :</label>
                <textarea
                  id="drugsDisc"
                  onChange={(e) =>
                    handleInputChange("drugsDisc", e.target.value)
                  }
                />
              </div>
            </div>
            <div className={style.formPart1}>
              <div>
                <label htmlFor="specialDisease">
                  *آیا سابقه بیماری خاصی دارید :
                </label>
                <select
                  required
                  onChange={(e) => {
                    handleInputChange("specialDisease", e.target.value);
                    setSpecialDisease(e.target.value);
                  }}
                  name="specialDisease"
                  id="specialDisease"
                  className={style.maritalStatus}
                >
                  <option value="">انتخاب کنید</option>
                  <option value="بله">بله</option>
                  <option value="خیر">خیر</option>
                </select>
              </div>
              <div>
                <label htmlFor="specialDiseaseDisc">توضیح دهید :</label>
                <textarea
                  id="specialDiseaseDisc"
                  onChange={(e) =>
                    handleInputChange("specialDiseaseDisc", e.target.value)
                  }
                />
              </div>
            </div>
            <div className={style.formPart1}>
              <label htmlFor="rightsRequested">حقوق مورد درخواست :</label>
              <input
                type="text"
                id="rightsRequested"
                onChange={(e) =>
                  handleInputChange("rightsRequested", e.target.value)
                }
              />
            </div>
            <div className={style.formPart1}>
              <label htmlFor="insuranceHistoryTwo">سابقه‌ی بیمه :</label>
              <input
                type="text"
                id="insuranceHistoryTwo"
                onChange={(e) =>
                  handleInputChange("insuranceHistoryTwo", e.target.value)
                }
              />
            </div>
            <div className={style.formPart2}>
              <label htmlFor="confirmation">
                اینجانب صحت کلیه اطلاعات مندرج در این فرم را تایید میکنم.
              </label>
              <input
                type="checkbox"
                name="confirmation"
                id="confirmation"
                onClick={confirmHandler}
              />
            </div>

            <div className={style.allStepButtons}>
              <button
                className={style.buttonStepSubmit}
                type="button"
                onClick={handleFormSubmit}
              >
                ثبت و ارسال
              </button>
              <button
                className={style.buttonStepSubmit}
                type="button"
                onClick={stepBackFourHandler}
              >
                مرحله‌ی قبلی
              </button>
            </div>
          </div>
        )}

        {/* <div className={style.recFormFirstPart}>
          <div className={style.recFormFirstPartP1}>
            <h2>فرم درخواست همکاری و استخدام</h2>
            <p>در صورت تمایل به همکاری، تکمیل و ارسال فرم الزامی می باشد.</p>
          </div>
          <div>
            {jobDate.map((job, index) => (
              <>
                <RequestFun
                  jobPosition={job.jobPosition}
                  genders={job.genders}
                  locations={job.locations}
                  contractType={job.contractType}
                />
              </>
            ))}
          </div>
        </div> */}
      </div>
    </div>
  );
};
