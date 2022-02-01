import React, { useEffect } from "react"

const SideAd = () => {
  useEffect(() => {
    const pushAd = () => {
      try {
        const adsbygoogle = window?.adsbygoogle
        console.log({ adsbygoogle })
        adsbygoogle.push({})
      } catch (e) {
        console.error(e)
      }
    }

    let interval = setInterval(() => {
      // Check if Adsense script is loaded every 300ms
      if (window.adsbygoogle) {
        pushAd()
        // clear the interval once the ad is pushed so that function isn't called indefinitely
        clearInterval(interval)
      }
    }, 300)

    return () => {
      clearInterval(interval)
    }
  }, [])
  return (
    <ins
      className="adsbygoogle"
      style={{ display: "inline-block", width: "300px", height: "250px" }}
      data-ad-client="ca-pub-5593915309329672"
      data-ad-slot="7238080479"
			data-full-width-responsive="true"
    ></ins>
  )
}

export default SideAd
