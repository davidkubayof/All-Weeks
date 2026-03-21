import { useState } from "react"
import { createLeunchers } from "../Api/apiLaunchers";
import Nav from '../componnet/Nav'
export default function AddLauncherPage() {
  const [data, setData] = useState({
    name: "",
    city: "",
    rocketType: "",
    latitude: "",
    longitude: ""
  })

  async function handleSumbite() {
    console.log(await createLeunchers(data))
  }
 
  return (
    <>
      <div>AddLauncherPage</div>
      <Nav />
      <form onSubmit={handleSumbite}>
        <input type="text" required placeholder='name' onChange={(e) => { setData({ ...data, name: e.target.value }) }} />
        <input type="text" required placeholder='city' onChange={(e) => { setData({ ...data, city: e.target.value }) }} />
        <select required onChange={(e) => { setData({ ...data, rocketType: e.target.value }) }}>
          <option value="">choes one</option>
          <option value="Shahab3">Shahab3</option>
          <option value="Fetah110">Fetah110</option>
          <option value="Radwan">Radwan</option>
          <option value="Kheibar">Kheibar</option>
        </select>
        <input type="number" required placeholder='latitude' onChange={(e) => { setData({ ...data, latitude: e.target.value }) }} />
        <input type="number" required placeholder='longitude' onChange={(e) => { setData({ ...data, longitude: e.target.value }) }} />
        <button type="submit">Send</button>
      </form>
    </>

  )
}