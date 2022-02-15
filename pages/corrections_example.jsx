import Correction from '../components/Correction'
import { text, image } from '../data/markup_data'

const CorrectionExamples = () => {
  return (
    <>
      <Correction markup={text} />
      <Correction  markup={image} image="/images/9k.png" />
    </>
  )
}

export default CorrectionExamples
