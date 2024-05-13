import { useFormik } from "formik";
import './Form.css';
export const SignupForm = () => {
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
      onSubmit: values => {
        alert(JSON.stringify(values, null, 2));
      }
    });
    return (
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor='name'>Name</label>
        <input
          id='name'
          name='name'
          type='text'
          onChange={formik.handleChange}
          value={formik.values.name}
        />
        <label htmlFor='age'>Age</label>
        <input
          id='age'
          name='age'
          type='text'
          onChange={formik.handleChange}
          value={formik.values.age}
        />
        <label htmlFor='email'>Email Address</label>
        <input
          id='email'
          name='email'
          type='email'
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        <label htmlFor='location'>Location</label> {/* New field: Location */}
        <input
            id='location'
            name='location'
            type='text'
            onChange={formik.handleChange}
            value={formik.values.location}
        />

        <label htmlFor='likesCount'>Likes Count</label> {/* New field: LikesCount */}
        <input
            id='likesCount'
            name='likesCount'
            type='number'
            onChange={formik.handleChange}
            value={formik.values.likesCount}
        />

        <label htmlFor='postsCount'>Posts Count</label> {/* New field: PostsCount */}
        <input
            id='postsCount'
            name='postsCount'
            type='number'
            onChange={formik.handleChange}
            value={formik.values.postsCount}
        />

        <label htmlFor='photo'>Photo</label> {/* New field: Photo */}
        <input
            id='photo'
            name='photo'
            type='file'
            onChange={formik.handleChange}
            value={formik.values.photo}
        />
        <div></div>
        <button type='submit'>Create Profile</button>
      </form>
    );
  };