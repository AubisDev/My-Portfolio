import emailjs, { init } from '@emailjs/browser';
import Swal from 'sweetalert2';


export const SendEmail = (formData) => {
    const  { email, name, message, subject } = formData;
    emailjs.send("service_34j1f5j","template_c4u0sml",{
        from_name: name,
        subject: subject,
        message: message,
        form_email: email,
        }, init('user_i1fHzNGafHBmEGryOvXk8'))
    .then(
        Swal.fire(
            'Email send succesfully!',
            'Thank you and remenmber ill respond as soon as i can',
            'success'
        )
    ), (error) => {
        console.log( error );
        Swal.fire(
            'Something went wrong',
            'An error has ocurred, reload the page and try again',
            'error'
        )
    }
}