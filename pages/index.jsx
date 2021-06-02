import Link from 'next/link'

const Home = () => {
  return (
    <div style={{ padding: 50 }}>
      <h1>MyLab</h1>
      <p>Just a place to test things</p>
      <br />
      <ul>
        <li>
          <Link href="/scheduler">scheduler</Link>
        </li>
        <li>
          <Link href="/taskboard">taskboard</Link>
        </li>
        <li>
          <Link href="/slider_inputs">slider_inputs</Link>
        </li>
        <li>
          <Link href="/dynamic_inputs">dynamic_inputs</Link>
        </li>
        <li>
          <Link href="/auto_increment_fields">auto_increment_fields</Link>
        </li>
      </ul>
    </div>
  )
}

export default Home