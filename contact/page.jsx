const ContactTitle = dynamic(() => import('../components/ContactPage/ContactTitle'));
const FormWrapper = dynamic(() => import('../components/ContactPage/FormWrapper'));
const InstagramBanner = dynamic(() => import('../components/InstagramBanner/InstagramBanner'));

const Contact = () => {
  return (
      <>
          {/* <section className='contact'>
            <ContactTitle/>
          </section>
          <section className='email-form'>
            <FormWrapper/>
          </section>
          <section>
            <InstagramBanner/>
          </section> */}
      </>
  )
}

export default Contact