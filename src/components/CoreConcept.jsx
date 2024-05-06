export default function CoreConcept({ img, title, description }) {
  return (
    <li>
      <img src={img} className="" alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
}
