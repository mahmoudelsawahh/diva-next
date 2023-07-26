import dynamic from 'next/dynamic'
 
const Service = dynamic(() => import('../components/Service/Service'))

const About = () => {
  return (
    <>
        <section>
            <Service/>
        </section>
    </>
  )
}

export default About