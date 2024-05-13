import { useFormik } from "formik";
import './Form.css';
import * as Yup from 'yup';
import { profileAtom } from "../atoms/appState";
import {useSetRecoilState, useRecoilValue, useRecoilState} from 'recoil';

export const SignupForm = () => {
    const [profileData, setProfileData] = useRecoilState(profileAtom);
    const formik = useFormik({
      initialValues: {
        email: "",
        name: "",
        age: "",
        location: "", 
        likesCount: "", 
        postsCount: "", 
        photo: "",
    },
    validationSchema: Yup.object({
        name: Yup.string()
          .matches(/^[A-Za-z\s]+$/, 'Only letters are allowed')
          .required('Required'),
        age: Yup.number()
          .required('Required')
          .positive('Must be a positive number')
          .integer('Must be an integer'),
        email: Yup.string()
          .email('Invalid email address')
          .required('Required'),
        location: Yup.string()
          .required('Required'),
        likesCount: Yup.number()
          .required('Required')
          .positive('Must be a positive number')
          .integer('Must be an integer'),
        postsCount: Yup.number()
          .required('Required')
          .positive('Must be a positive number')
          .integer('Must be an integer'),
        photo: Yup.mixed()
          .required('Required')
      }),
      onSubmit: values => {
        alert(JSON.stringify(values));
        setProfileData(values);
        console.log(profileData);    
      }
    });

    const showState = () => {
        console.log("hi");
        const state = useRecoilValue(profileAtom);
        console.log(state);
    }

    return (
    <>
      <form>
        <label htmlFor='name'>Name</label>
        <input
          id='name'
          name='name'
          type='text'
          onChange={formik.handleChange}
          value={formik.values.name}
        />
        {formik.touched.name && formik.errors.name ? (<div className="error">{formik.errors.name}</div>) : null}
        <label htmlFor='age'>Age</label>
        <input
          id='age'
          name='age'
          type='text'
          onChange={formik.handleChange}
          value={formik.values.age}
        />
        {formik.touched.age && formik.errors.age ? (<div className="error">{formik.errors.age}</div>) : null}
        <label htmlFor='email'>Email Address</label>
        <input
          id='email'
          name='email'
          type='email'
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        {formik.touched.email && formik.errors.email ? (<div className="error">{formik.errors.email}</div>) : null}
        <label htmlFor='location'>Location</label> {/* New field: Location */}
        <input
            id='location'
            name='location'
            type='text'
            onChange={formik.handleChange}
            value={formik.values.location}
        />
        {formik.touched.location && formik.errors.location ? (<div className="error">{formik.errors.location}</div>) : null}
        <label htmlFor='likesCount'>Likes Count</label> {/* New field: LikesCount */}
        <input
            id='likesCount'
            name='likesCount'
            type='number'
            onChange={formik.handleChange}
            value={formik.values.likesCount}
        />
        {formik.touched.likesCount && formik.errors.likesCount ? (<div className="error">{formik.errors.likesCount}</div>) : null}
        <label htmlFor='postsCount'>Posts Count</label> {/* New field: PostsCount */}
        <input
            id='postsCount'
            name='postsCount'
            type='number'
            onChange={formik.handleChange}
            value={formik.values.postsCount}
        />
        {formik.touched.postsCount && formik.errors.postsCount ? (<div className="error">{formik.errors.postsCount}</div>) : null}

        <label htmlFor='photo'>Photo</label> {/* New field: Photo */}
        <input
            id='photo'
            name='photo'
            type='file'
            onChange={formik.handleChange}
            value={formik.values.photo}
        />
        {formik.touched.photo && formik.errors.photo ? (<div className="error">{formik.errors.photo}</div>) : null}
        <div></div>
        <button type='submit' onClick={formik.handleSubmit}>Create Profile</button>
      </form>
      <button onClick={() => { showState() }}>Display State</button>
    </>
    );
  };