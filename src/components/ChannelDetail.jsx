import React from 'react'

const ChannelDetail = () => {
  return (
    <div>
      <link rel="stylesheet" type="text/css" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />
      <link rel="stylesheet" type="text/css" href="https://cdn.rawgit.com/shuvroroy/youtube-clone/883c8d9a/public/css/main.css" />
      <div class="bg-white font-sans">
        <nav class="py-2 shadow">
          <div class="container mx-auto flex items-center">
            <div class="w-1/5">
              <a href="#" class="mr-6"><i class="fa fa-bars fa-lg" aria-hidden="true"></i></a>
              <a href="#" class="text-red-light tracking-tight">
                <i class="fa fa-youtube-play fa-lg" aria-hidden="true"></i>
                <span class="text-black font-bold tracking-tight">YouTube</span>
              </a>
            </div>
            <div class="w-3/5">
              <div class="relative">
                <input type="text" class="h-8 p-4 text-sm w-full border" placeholder="Search" />
                <span class="flex items-center bg-grey-lightest hover:bg-grey-lighter absolute pin-r pin-y border px-8"><i class="fa fa-search text-grey-dark"></i></span>
              </div>
            </div>
            <div class="w-1/5">
              <div class="flex items-center justify-end">
                <a href="#" class="mr-6"><i class="fa fa-upload fa-lg" aria-hidden="true"></i></a>
                <a href="#" class="mr-6"><i class="fa fa-th fa-lg" aria-hidden="true"></i></a>
                <a href="#" class="mr-6"><i class="fa fa-bell fa-lg" aria-hidden="true"></i></a>
                <a href="#">
                  <img class="h-8 w-8 rounded-full" src="https://yt3.ggpht.com/-d4QhdOi4N6c/AAAAAAAAAAI/AAAAAAAAAAA/vpG4T-iVv7w/s88-c-k-no-mo-rj-c0xffffff/photo.jpg" alt="avatar" />
                </a>
              </div>
            </div>
          </div>
        </nav>
        <div class="bg-cover h-112">
          <img src="https://yt3.ggpht.com/HR5bTyedjHyoOd9h2zty2OAqZ3MFM6T7_R48jhdd2rQE2aSPHOD2B-ibdv-yLSTy4_AAF6XdoCk=w2560-fcrop64=1,00005a57ffffa5a8-nd-c0xffffffff-rj-k-no" alt="banner" />
        </div>
        <div class="-mt-1 bg-grey-lighter">
          <div class="container mx-auto">
            <div class="flex justify-between items-center py-4 px-16">
              <div class="flex items-center">
                <img class="w-24 h-24 rounded-full" src="https://yt3.ggpht.com/-5ny40r8qe90/AAAAAAAAAAI/AAAAAAAAAAA/IrloZ_OeiYc/s288-c-k-no-mo-rj-c0xffffff/photo.jpg" alt="channel_logo" />
                <div class="ml-6">
                  <div class="text-2xl font-normal flex items-center">
                    <span class="mr-2">Fun Fun Function</span>
                    <span class="w-3 h-3 text-white inline-block text-center rounded-full bg-grey-dark text-2xs">&#10003;</span>
                  </div>
                  <p class="mt-2 font-hairline text-sm">126,014 subscribers</p>
                </div>
              </div>
              <div class="text-grey-dark">
                <button class="appearance-none px-3 py-2 bg-grey-light uppercase text-grey-darker text-sm mr-4">Subscribed 126K</button>
                <span><i class="fa fa-bell fa-lg" aria-hidden="true"></i></span>
              </div>
            </div>
            <div class="px-16">
              <ul class="list-reset flex">
                <li class="text-center py-3 px-8 border-b-2 border-solid border-grey-dark"><a href="#" class="text-black">Home</a></li>
                <li class="text-center py-3 px-8"><a href="#" class="hover:text-black">Videos</a></li>
                <li class="text-center py-3 px-8"><a href="#" class="hover:text-black">Playlists</a></li>
                <li class="text-center py-3 px-8"><a href="#" class="hover:text-black">Community</a></li>
                <li class="text-center py-3 px-8"><a href="#" class="hover:text-black">Channels</a></li>
                <li class="text-center py-3 px-8"><a href="#" class="hover:text-black">About</a></li>
                <li class="text-center py-3 px-8"><i class="fa fa-search fa-lg text-grey-dark"></i></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ChannelDetail