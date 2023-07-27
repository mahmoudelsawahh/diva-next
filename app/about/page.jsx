import dynamic from 'next/dynamic'
 
const Service = dynamic(() => import('../components/Service/Service'))

export const metadata = {
  title: "اتيليه فساتين زفاف وافراح",
}
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