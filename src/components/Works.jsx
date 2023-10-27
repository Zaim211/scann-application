import Tilt from 'react-parallax-tilt'
import { styles } from '../styles'
import { motion } from 'framer-motion'
import { github } from '../assets'
import { SectionWrapper } from '../hoc'
import { projects } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'


const ProjectCard = ({index, name, image, source_code_linked, description, source_code_link}) => {
  return (
    <motion.div variants={fadeIn("", "", index * 0.5, 0.75)}>
       <Tilt
        options={{
          max: 45,
          scale: 3,
          speed: 450
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
       >
          <div className="relative w-full h-[250px]">
          <img 
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
          <div className="absolute flex inset-0 justify-end m-3 card-img_hover">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full
              flex justify-center items-center cursor-pointer"
            >
              <img 
                src={github}
                alt="github"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>  
          </div>
        </div>

        <div className='relative flex '>
        <div
              onClick={() => window.open(source_code_linked, "_blank")}
              className="gray-gradient w-40 h-10 rounded-lg
              flex justify-end cursor-pointer"
            >
             
            </div>
            </div>
       </Tilt>
    </motion.div>  
  )
}


const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionHeadText}>
        Scan the following QR
        </p>
        <h2 className={styles.sectionSubText}>JOB IT</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-4 text-secondary text-[17px] max-3xl'
        >
          Web application that enables users to search for job openings, 
          view estimated salary ranges for positions, and locate available jobs based 
          on their current location, saving you time and effort in your job search.
        </motion.p>
      </div>

      <div className="flex flex-wrap mt-20 gap-60">
        {projects.map((project, index) => (
          <ProjectCard 
          key={`project-${index}`} 
          {...project}
          index={index}
          />  
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Works, "")