import './index.css'

const SkillItem = props => {
  const {skillDetails} = props
  const {name, image_url} = skillDetails

  return (
    <li className="skill-item">
      <img src={image_url} alt={name} className="company-logo" />
      <p>{name}</p>
    </li>
  )
}

export default SkillItem
