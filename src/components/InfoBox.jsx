import iconCheck from '../assets/check.svg'
const InfoBox = ({ customCSS }) => {
  return (
    <section className={`bg-red-color-v1 rounded-xl p-6 max-w-[520px] ${customCSS}`}>
      <ul>
        <li className="flex items-center mb-2">
          <img src={iconCheck} alt="icon check" />
          <p className="capitalize ml-2 text-white">Quality Control System, 100% Satisfaction Guarantee</p>
        </li>
        <li className="flex items-center mb-2">
          <img src={iconCheck} alt="icon check" />
          <p className="capitalize ml-2 text-white">Highly Proffesional Staff, Accurate Testing Processes</p>
        </li>
        <li className="flex items-center">
          <img src={iconCheck} alt="icon check" />
          <p className="capitalize ml-2 text-white">Unrivalled Workmanship, Proffesional and Qualified</p>
        </li>
      </ul>
    </section>
  )
}

export default InfoBox
