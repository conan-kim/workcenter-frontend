import Section00 from "./homeSections/Section00"
// import Section01 from "./homeSections/Section01"
import Section02 from "./homeSections/Section02"
import Section03 from "./homeSections/Section03"
import Section04 from "./homeSections/Section04"
import Section05 from "./homeSections/Section05"

export function Home() {
  return <>
    <div className="home">

      <Section00 />
      {/* <Section01 /> */}
      <Section02 />
      <Section03 />
      <Section04 />
      <Section05 />

    </div>
  </>
}

export default Home
