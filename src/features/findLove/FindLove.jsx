function FindLove() {

  async function fetchProfiles() {
    const response = await fetch('https://randomuser.me/api/')
    const data = await response.json()
    console.log(data)
  }

  return (
    <>
      <div>
        hi page
      </div>
      <button onClick={ fetchProfiles }>fetch</button>
    </>
  )
}

export default FindLove